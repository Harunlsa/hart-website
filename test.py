import os
import shutil

#Specify the dir
dir = r"C:\Users\harun\Desktop\web_dev(hart)\BizLand\products"

# Path to existing file
template_file = os.path.join(dir, "baby-sets.html")

#Ensure dir exists
os.makedirs(dir, exist_ok=True)

pages = [
    "basins.html",
    "baskets.html",
    "bowls.html",
    "buckets.html",
    "colanders+plates.html",
    "coolers.html",
    "drums.html",
    "ice-cream-containers.html",
    "jerry-cans.html",
    "mugs+cups.html",
    "racks.html",
    "take-away-containers.html",
    "toys.html"
]

if not os.path.isfile(template_file):
    print(f"Template file {template_file} does not exist. Exiting")
    exit(1)

with open(template_file, 'r') as file:
    template_content = file.read()

for page in pages:
    file_path = os.path.join(dir, page)
    with open(file_path, 'w') as file:
        file.write(template_content)
    print(f"Created file: {file_path}")



# pages = [
#     "basins",
#     "baskets",
#     "bowls",
#     "buckets",
#     "colanders+plates",
#     "coolers",
#     "drums",
#     "ice-cream-containers",
#     "jerry-cans",
#     "mugs+cups",
#     "racks",
#     "take-away-containers",
#     "toys"
# ]
# names = [
#     "Basins",
#     "Baskets",
#     "Bowls",
#     "Buckets",
#     "colanders and plates",
#     "coolers",
#     "drums",
#     "ice cream containers",
#     "jerry cans",
#     "mugsc and cups",
#     "racks",
#     "takeaway containers",
#     "toys"
# ]
# for page, name in zip(pages, names):
#     print(f'{{value: "{page}", text: "{name.title()}" }},')