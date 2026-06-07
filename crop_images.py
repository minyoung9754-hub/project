from PIL import Image
import os

img_path = r"C:\Users\minyo\.gemini\antigravity\brain\tempmediaStorage\media__1780745127451.jpg"
out_dir = r"c:\Users\minyo\OneDrive\바탕 화면\캡스톤 3\assets\images"
os.makedirs(out_dir, exist_ok=True)

try:
    img = Image.open(img_path)
    w, h = img.size
    print(f"Original size: {w}x{h}")
    
    # The image is 3 products horizontally: Missha, Aestura, Pyunkang Yul
    w3 = w // 3
    
    img1 = img.crop((0, 0, w3, h))
    img2 = img.crop((w3, 0, w3*2, h))
    img3 = img.crop((w3*2, 0, w, h))
    
    img1.save(os.path.join(out_dir, "missha.jpg"))
    img2.save(os.path.join(out_dir, "aestura.jpg"))
    img3.save(os.path.join(out_dir, "pyunkangyul.jpg"))
    print("Images saved successfully.")
except Exception as e:
    print(f"Error: {e}")
