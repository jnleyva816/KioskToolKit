@echo off
Powershell.exe -executionpolicy Bypass -Command "Start-Process -Verb RunAs powershell -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File \"%cd%\Tier3.ps1\"'"
pause