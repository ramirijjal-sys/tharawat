$ErrorActionPreference = 'Stop'
$ff = 'C:\Users\LENOVO\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.1-full_build\bin\ffmpeg.exe'
$root = Resolve-Path (Join-Path $PSScriptRoot '..')
Set-Location $root
New-Item -ItemType Directory -Force -Path 'public\assets\videos' | Out-Null
$dir = Resolve-Path 'public\assets\images\hero'
$out = Join-Path (Resolve-Path 'public\assets\videos') 'hero-saudi.mp4'

# Simple stills + crossfade (no zoompan) — ~16s loop-friendly clip
$filter = '[0:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30,format=yuv420p,trim=duration=5,setpts=PTS-STARTPTS[v0];[1:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30,format=yuv420p,trim=duration=5,setpts=PTS-STARTPTS[v1];[2:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30,format=yuv420p,trim=duration=5,setpts=PTS-STARTPTS[v2];[3:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30,format=yuv420p,trim=duration=5,setpts=PTS-STARTPTS[v3];[v0][v1]xfade=transition=fade:duration=1:offset=4[vx1];[vx1][v2]xfade=transition=fade:duration=1:offset=8[vx2];[vx2][v3]xfade=transition=fade:duration=1:offset=12[vout]'

& $ff -y `
  -loop 1 -t 5 -i (Join-Path $dir 'frame-01.jpg') `
  -loop 1 -t 5 -i (Join-Path $dir 'frame-02.jpg') `
  -loop 1 -t 5 -i (Join-Path $dir 'frame-03.jpg') `
  -loop 1 -t 5 -i (Join-Path $dir 'frame-04.jpg') `
  -filter_complex $filter `
  -map '[vout]' -c:v libx264 -pix_fmt yuv420p -crf 24 -preset veryfast -movflags +faststart -an $out

Write-Output "created $out bytes=$((Get-Item $out).Length)"
