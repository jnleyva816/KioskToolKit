taskkill /f /im smartscreen.exe & ren "C:\Windows\System32\smartscreen.exe" "C:\Windows\System32\smartscreen.plm"
FOR /R %%f IN (GalleryInc.MelodyScript.DefenderRemover.DisablerScript\*.reg GalleryInc.MelodyScript.DefenderRemover.Extras\*.reg) DO PowerRun.exe regedit.exe /s "%%f" >nul
FOR /R %%f IN (GalleryInc.MelodyScript.DefenderRemover.DisablerScript\*.reg GalleryInc.MelodyScript.DefenderRemover.Extras\*.reg) DO regedit.exe /s "%%f" >nul
pause