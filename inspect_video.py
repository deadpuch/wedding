import subprocess
import os

os.makedirs("video_inspect", exist_ok=True)
cmd = [
    "ffmpeg", "-y", "-ss", "0", "-t", "8", "-i", "pin_media/walkthrough.mp4",
    "-vf", "fps=3",
    "video_inspect/f_%03d.jpg"
]
subprocess.run(cmd, check=True)
print("Extracted", len(os.listdir("video_inspect")), "frames from 0 to 8s.")
