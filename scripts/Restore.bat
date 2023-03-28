@echo off
Powershell.exe -executionpolicy Bypass -Command "Start-Process -Verb RunAs powershell -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File \"%cd%\Restore_Services.ps1\"'"
pause