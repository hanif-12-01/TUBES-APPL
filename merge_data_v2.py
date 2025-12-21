import json
import re

# Load new data
with open('new_data_v2.json', 'r') as f:
    new_data = json.load(f)

# Load script.js
with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

# Prepare new data string (without outer brackets)
new_data_str = json.dumps(new_data, indent=4)
# Remove first [ and last ] to append to existing array
new_items_str = new_data_str.strip()[1:-1] 

# Find the end of initialKulinerData
# We look for "const initialKulinerData = [" and the matching "];"
# Since it might be nested, we can try to find the last object ending before the variable definition ends.
# A simpler heuristic for this specific file: finding the closing "];" of that variable.

# However, since the file is large, using detailed regex or string finding is better.
# We know the structure is `const initialKulinerData = [ ... ];`

# Let's find the start
start_marker = "const initialKulinerData = ["
start_idx = script_content.find(start_marker)

if start_idx == -1:
    print("Error: initialKulinerData not found")
    exit(1)

# Find the next semicolon after start
# This is risky if there are strings with semicolons.
# Better to look for `];` that closes the array.
# We'll assume the array is closed by `];` at the start of a line or after a brace.

# Regex to find the end of the array definition
# We look for `const initialKulinerData = [...]`
# We can search for the first `];` after `initialKulinerData` start? No, there might be nested arrays.
# But `initialKulinerData` is top level.

# Strategy: Find "const initialKulinerData = [" -> Find matching closing bracket.
# Since we know the formatting is likely consistent or simple enough.

match = re.search(r'(const initialKulinerData\s*=\s*\[)(.*?)(\];)', script_content, re.DOTALL)
if match:
    pre_array = match.group(1)
    existing_content = match.group(2)
    post_array = match.group(3)
    
    # Strategy: 
    # 1. Parse existing initialKulinerData from the file
    # 2. Keep items with ID < 100 (Manual data)
    # 3. Discard items with ID >= 100 (Old import)
    # 4. Append new items (IDs 200+)
    # 5. Reconstruct the string
    
    # Extract the array content
    array_content = match.group(2)
    
    # We need to parse this JS array into Python to filter it easily.
    # Since it's JS, it might have unquoted keys (e.g. id: 1). JSON decoder won't like that.
    # We'll use a regex to identify objects and their IDs.
    
    # Simple regex to find objects with id < 100
    # This is fragile. A better way: Identify the range of the OLD imported data.
    # We saw in the file that ID 100 starts around line 224.
    # We can just cut the string before the start of ID 100.
    
    split_marker = '{'
    # This is getting complicated to parse reliably with regex.
    # Alternative: We know the original manually added data ends at ID 10.
    # We can hardcode the preservation of lines or IDs.
    
    # Improved Strategy:
    # Read the file line by line.
    # Inside initialKulinerData:
    #   If line contains "id: 100,", stop reading/copying the array content and skip until the end of the array.
    #   Then insert new data.
    
    content_lines = script_content.splitlines()
    new_script_lines = []
    in_kuliner_array = False
    skip_mode = False
    
    for line in content_lines:
        if "const initialKulinerData = [" in line:
            in_kuliner_array = True
            new_script_lines.append(line)
            continue
            
        if in_kuliner_array:
            if "];" in line and line.strip() == "];": # End of array
                # Append new data here
                # Format new items as JS objects
                
                # Add comma to the last item if needed
                if new_script_lines[-1].strip() != "[":
                     if not new_script_lines[-1].strip().endswith(','):
                         new_script_lines[-1] += ","

                for item in new_data:
                    # Manually format to match JS style (keys without quotes if simple)
                    # or just use JSON with keys quoted (valid JS)
                    # To allow future parsing, let's just dump JSON string but indent it
                    item_str = json.dumps(item) 
                    # Remove quotes around specific keys to match style? Not strictly necessary.
                    # Just use JSON, it's valid JS.
                    new_script_lines.append(f"    {item_str},")

                in_kuliner_array = False
                skip_mode = False
                new_script_lines.append(line) # The closing ];
                continue
            
            if '"id": 100,' in line or 'id: 100,' in line or '"id": 200,' in line or 'id: 200,' in line: # Detect start of old import
                skip_mode = True
            
            if not skip_mode:
                new_script_lines.append(line)
        else:
            new_script_lines.append(line)
            
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_script_lines))
        
    print("Merged data successfully with clean up.")
else:
    print("Could not locate initialKulinerData block via regex.")
