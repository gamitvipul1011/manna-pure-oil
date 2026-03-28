@echo off
echo ===================================
echo   Maana Pure Oil - Starting Server
echo ===================================
echo.

echo [1/2] Starting Backend Server...
cd backend
start cmd /k "npm run dev"
timeout /t 3 > nul

echo [2/2] Starting Frontend Server...
cd ../frontend
start cmd /k "npm run dev"

echo.
echo ===================================
echo   Servers Starting!
echo ===================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo Admin:    http://localhost:5173/admin/login
echo.
echo Press any key to close this window...
pause > nul
