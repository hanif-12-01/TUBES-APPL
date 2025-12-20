import json
import re

# Read new data
with open('new_data.json', 'r', encoding='utf-8') as f:
    new_data = json.load(f)

# Format as JS object strings (remove quotes from keys if you want, but JSON is fine)
# actually, let's just dump it as string and slice off the [ and ]
new_data_str = json.dumps(new_data, indent=4)
# Remove outer []
inner_data = new_data_str.strip()[1:-1]
# Add a leading comma if the array wasn't empty
inner_data = ",\n" + inner_data

# Read script.js
with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

# Find the end of initialKulinerData
# Look for "const initialKulinerData = [" ... "];"
# We'll search for the first occurrence of `const initialKulinerData = [` and finding the matching closing `];` might be tricky with nested arrays (reviews).
# But `initialKulinerData` is at the top.
# Let's simple regex search?
# Or just find the first `];` after `const initialKulinerData`?
# The structure is:
# const initialKulinerData = [
#    {...},
#    {...}
# ];
# We can regex for `const initialKulinerData = \[([\s\S]*?)\];`

pattern = r"(const initialKulinerData = \[[\s\S]*?)(\];)"
match = re.search(pattern, script_content)

if match:
    # Insert before the closing `];`
    # We prefer to append to the existing list.
    # The group 1 ends with the last character before `];`.
    # likely it ends with `}` or whitespace.
    
    # Check if we need a comma
    # If the list ended with `}`, add comma.
    # But my inner_data already starts with comma.
    
    new_content = script_content[:match.end(1)] + inner_data + script_content[match.end(1):]
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Merged successfully.")
else:
    print("Could not find initialKulinerData array.")
