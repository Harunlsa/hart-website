import os

dir = '/home/hlabdulwahab/Documents/hart-website/products'

wrong_script_tag = '<script src="path/to/categoryFilter.js"></script>\n'
script_tag = '<script src="../categoryFilter.js"></script>'

def add_script_tag_to_file(file_path):
    with open(file_path, 'r+') as file:
        content = file.read()

        if wrong_script_tag in content:
            content = content.replace('<script src="path/to/categoryFilter.js"></script>', '')
            file.seek(0)
            file.write(content)
            file.truncate()

        if script_tag not in content:
            content = content.replace('</body>', script_tag + '</body>')
            file.seek(0)
            file.write(content)
            file.truncate()


for filename in os.listdir(dir):
    if filename.endswith('.html'):
        file_path = os.path.join(dir, filename)
        add_script_tag_to_file(file_path)
        print(f"Script tag added to ${filename}")