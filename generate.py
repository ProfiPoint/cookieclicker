from PIL import Image
import os

def extract_icons(input_path, output_folder, icon_width, icon_height):
    # Open the image
    image = Image.open(input_path)

    # Get the dimensions of the original image
    img_width, img_height = image.size

    # Calculate the number of icons in rows and columns
    num_rows = img_height // icon_height
    num_cols = img_width // icon_width

    # Ensure the output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Iterate through each row and column to extract icons
    for row in range(num_rows):
        for col in range(num_cols):
            # Define the region to crop
            left = col * icon_width
            upper = row * icon_height
            right = (col + 1) * icon_width
            lower = (row + 1) * icon_height

            # Crop the region
            icon = image.crop((left, upper, right, lower))

            # Save the cropped icon
            icon.save(os.path.join(output_folder, f"icon_{row}_{col}.png"))

    print("Extraction completed successfully.")

# Example usage
input_image_path = r"C:\Users\profipoint\Downloads\Cookie clicker\assets\upgrades.png"
output_icons_folder = r"C:\Users\profipoint\Downloads\Cookie clicker\assets"
icon_width = 48
icon_height = 48

extract_icons(input_image_path, output_icons_folder, icon_width, icon_height)
