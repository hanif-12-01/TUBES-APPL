import csv
import json
import random

# Raw CSV Data provided by user
csv_data = """Nama,Kategori,Jam_Buka,Jam_Tutup,Jenis_Usaha,Lokasi,Kisaran_Harga,Spesialisasi
Soto Sokaraja Pak Min,Makanan,06:00,14:00,Warung Tetap,Sokaraja,15000-25000,Soto Daging
Mie Ayam Bakso Pak Kumis,Makanan,08:00,21:00,Warung Tetap,Jl. Jenderal Sudirman,12000-20000,Mie Ayam Bakso
Warung Nasi Pecel Bu Tinuk,Makanan,06:00,12:00,Warung Tetap,Pasar Wage,8000-15000,Pecel Sayur
Sate Ambal Pak Kasno,Makanan,16:00,22:00,Warung Tetap,Ambal,25000-40000,Sate Kambing
Mendoan Pak Dhuwur,Makanan,15:00,21:00,Pedagang Keliling,Area Alun-alun,5000-10000,Mendoan Tempe
Lotek Kupat Tahu Bu Sri,Makanan,07:00,13:00,Warung Tetap,Jl. Veteran,10000-18000,Lotek Kupat Tahu
Bakmi Jawa Pak Karno,Makanan,10:00,21:00,Warung Tetap,Jl. Ahmad Yani,15000-25000,Bakmi Jawa
Nasi Gandul Yu Tum,Makanan,08:00,15:00,Warung Tetap,Jl. Overste Isdiman,18000-28000,Nasi Gandul
Es Dawet Ayu Telasih,Minuman,08:00,17:00,Warung Tetap,Jl. Sunan Kalijaga,8000-12000,Es Dawet
Kopi Progo,Minuman,07:00,22:00,Kafe Tetap,Jl. Jenderal Sudirman,12000-35000,Kopi Manual Brew
Tahu Gimbal Pak Hadi,Makanan,16:00,21:00,Gerobak Tetap,Alun-alun Purwokerto,12000-20000,Tahu Gimbal
Warung Nasi Ayam Bu Yanti,Makanan,10:00,20:00,Warung Tetap,Berkoh,15000-25000,Nasi Ayam Kampung
Sate Blater Pak Bambang,Makanan,17:00,23:00,Warung Tetap,Jl. Mayjend Sungkono,20000-35000,Sate Ayam
Angkringan Mbah Paijo,Makanan,18:00,02:00,Gerobak Tetap,Jl. Gatot Subroto,5000-15000,Nasi Kucing
Wedang Ronde Pak Tirto,Minuman,18:00,23:00,Gerobak Tetap,Grendeng,8000-15000,Wedang Ronde
Getuk Goreng Bu Siti,Makanan,08:00,17:00,Warung Tetap,Pasar Manis,5000-10000,Getuk Goreng
Bubur Ayam Barito,Makanan,06:00,11:00,Warung Tetap,Jl. Barito,10000-18000,Bubur Ayam
Nasi Uduk Bu Retno,Makanan,06:00,12:00,Warung Tetap,Purwokerto Lor,12000-20000,Nasi Uduk
Bakso Malang Cak Eko,Makanan,10:00,21:00,Warung Tetap,Jl. HR Bunyamin,15000-30000,Bakso Malang
Es Cao Purwokerto,Minuman,09:00,17:00,Warung Tetap,Purwokerto Kidul,10000-20000,Es Cao
Ayam Geprek Bensu,Makanan,10:00,22:00,Resto Tetap,Jl. Yos Sudarso,18000-35000,Ayam Geprek
Soto Ayam Lamongan,Makanan,07:00,15:00,Warung Tetap,Jl. Gerilya,12000-22000,Soto Ayam
Pecel Lele Lela,Makanan,15:00,23:00,Warung Tetap,Jl. Overste Isdiman,15000-28000,Pecel Lele
Es Kelapa Muda Pak Naryo,Minuman,08:00,16:00,Gerobak Tetap,Pasar Wage,8000-15000,Es Kelapa Muda
Nasi Goreng Pak Gemblung,Makanan,18:00,02:00,Gerobak Tetap,Jl. Jenderal Sudirman,12000-20000,Nasi Goreng
Warung Tegal Bu Slamet,Makanan,06:00,14:00,Warung Tetap,Purwokerto Kulon,10000-25000,Aneka Lauk Warteg
Mie Koclok Cirebon,Makanan,08:00,16:00,Warung Tetap,Jl. Gerilya,15000-25000,Mie Koclok
Pisang Goreng Ponorogo,Makanan,14:00,21:00,Gerobak Tetap,Terminal Purwokerto,5000-12000,Pisang Goreng
Kopi Tuku Purwokerto,Minuman,08:00,21:00,Kafe Tetap,Jl. Ahmad Yani,15000-40000,Kopi Susu Kekinian
Geprek Bensu,Makanan,10:00,22:00,Resto Tetap,Jl. HR Bunyamin,18000-35000,Ayam Geprek
Rawon Nguling Bu Pur,Makanan,07:00,14:00,Warung Tetap,Bancarkembar,18000-30000,Rawon Daging
Martabak Orins,Makanan,16:00,23:00,Gerobak Tetap,Jl. Mayjend Sungkono,20000-50000,Martabak Manis Telur
Cendol Dawet Bu Dermi,Minuman,09:00,17:00,Warung Tetap,Pasar Pon,8000-12000,Cendol Dawet
Gado-gado Bu Tini,Makanan,07:00,13:00,Warung Tetap,Purwokerto Lor,12000-20000,Gado-gado
Bakwan Malang Cak Man,Makanan,15:00,22:00,Warung Tetap,Jl. Veteran,15000-25000,Bakwan Malang
Juice Buah Segar Pak Wito,Minuman,08:00,20:00,Warung Tetap,Jl. Sunan Kalijaga,10000-25000,Jus Buah
Nasi Liwet Bu Wongso,Makanan,17:00,23:00,Warung Tetap,Berkoh,18000-30000,Nasi Liwet
Ketoprak Jakarta,Makanan,08:00,15:00,Gerobak Tetap,Jl. Gatot Subroto,10000-18000,Ketoprak
Sate Maranggi Purwokerto,Makanan,16:00,22:00,Warung Tetap,Jl. Yos Sudarso,25000-45000,Sate Maranggi
Warung Kopi Klotok,Minuman,06:00,12:00,Warung Tetap,Sokaraja,5000-15000,Kopi Klotok
Lumpia Semarang Bu Mul,Makanan,09:00,20:00,Warung Tetap,Jl. Ahmad Yani,15000-30000,Lumpia Basah
Pempek Palembang Asli,Makanan,10:00,21:00,Warung Tetap,Jl. HR Bunyamin,12000-35000,Pempek Kapal Selam
Klepon Bu Niken,Makanan,07:00,16:00,Pedagang Keliling,Pasar Manis,5000-10000,Klepon Kue Basah
Es Teler 77,Minuman,10:00,22:00,Resto Tetap,Rita Mall,15000-35000,Es Teler
Nasi Bakar Cianjur,Makanan,11:00,22:00,Warung Tetap,Jl. Gerilya,18000-35000,Nasi Bakar Ayam
Depot Es Durian,Minuman,09:00,21:00,Warung Tetap,Purwokerto Kidul,15000-40000,Es Durian
Ayam Goreng Mbok Berek,Makanan,10:00,20:00,Warung Tetap,Jl. Overste Isdiman,20000-35000,Ayam Goreng Kampung
Tengkleng Kambing Solo,Makanan,08:00,16:00,Warung Tetap,Jl. Mayjend Sungkono,25000-45000,Tengkleng Kambing
Serabi Notosuman,Makanan,14:00,21:00,Gerobak Tetap,Alun-alun Purwokerto,8000-15000,Serabi Solo
Susu Jahe Pak Kumis,Minuman,17:00,23:00,Gerobak Tetap,Terminal Purwokerto,7000-12000,Susu Jahe Hangat
"""

def parse_price(price_range):
    # Take the lower bound as base price for sorting/display
    try:
        if '-' in price_range:
            return price_range
        return price_range
    except:
        return "Rp 15.000"

def get_coords():
    # Purwokerto Center: -7.421, 109.242
    # Random offset ~2km
    lat = -7.421 + (random.random() * 0.04 - 0.02)
    lng = 109.242 + (random.random() * 0.04 - 0.02)
    return round(lat, 5), round(lng, 5)

lines = csv_data.strip().split('\n')
headers = lines[0].split(',')

kuliner_list = []
start_id = 200 # Avoid conflict with existing IDs

for line in lines[1:]:
    parts = line.split(',')
    if len(parts) < 8: continue
    
    nama = parts[0]
    kategori = parts[1]
    buka = parts[2]
    tutup = parts[3]
    jenis = parts[4]
    lokasi = parts[5]
    harga = parts[6]
    spesialisasi = parts[7]
    
    lat, lng = get_coords()
    
    # Map Category to existing categories if possible
    # "Makanan", "Minuman" -> "Makanan Berat", "Minuman"
    std_kategori = kategori
    if kategori == "Makanan": std_kategori = "Makanan Berat"
       
    item = {
        "id": start_id,
        "nama": nama,
        "kategori": std_kategori,
        "alamat": lokasi,
        "jam": f"{buka} - {tutup}",
        "harga": f"Rp{harga.replace('-', ' - Rp')}",
        "deskripsi": f"{spesialisasi}. {jenis}.",
        "foto": "https://via.placeholder.com/400x200?text=" + nama.replace(" ", "+"),
        "lat": lat,
        "lng": lng,
        "keliling": "Keliling" in jenis or "Pedagang" in jenis,
        "halal": "halal",
        "kontak": "-",
        "parkir": "Tersedia",
        "rute": lokasi,
        "verified": True,
        "reviews": []
    }
    
    kuliner_list.append(item)
    start_id += 1

with open('new_data_v2.json', 'w') as f:
    json.dump(kuliner_list, f, indent=4)

print(f"Successfully generated {len(kuliner_list)} items.")
