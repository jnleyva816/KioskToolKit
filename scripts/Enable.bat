@echo off
pushd "%CD%"
CD /D "%~dp0" 
ren "C:\Windows\System32\smartscreen.plm" "C:\Windows\System32\smartscreen.exe"
FOR /R %%f IN (GalleryInc.MelodyScript.DefenderRemover.EnablerScript\*.reg) DO PowerRun.exe regedit.exe /s "%%f" >nul
FOR /R %%f IN (GalleryInc.MelodyScript.DefenderRemover.EnablerScript\*.reg) DO regedit.exe /s "%%f" >nul
pause 10s