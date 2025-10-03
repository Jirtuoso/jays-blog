@echo off
echo Starting your website...
echo.

REM Add Node.js to PATH for this session
set PATH=%PATH%;C:\Program Files\nodejs

REM Navigate to the project directory
cd /d "%~dp0"

REM Check if Node.js is working
echo Checking Node.js installation...
node --version
if errorlevel 1 (
    echo ERROR: Node.js not found! Please install Node.js first.
    pause
    exit /b 1
)

echo Node.js found! Starting development server...
echo.
echo Your website will be available at: http://localhost:1977/
echo Press Ctrl+C to stop the server
echo.

REM Start the development server
npm run dev

pause
