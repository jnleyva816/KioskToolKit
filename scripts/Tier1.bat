@echo off
Powershell.exe -executionpolicy Bypass -Command "Start-Process -Verb RunAs powershell -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File \"%cd%\Tier1.ps1\"'"
pause