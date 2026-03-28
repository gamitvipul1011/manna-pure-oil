#!/bin/bash

echo "==================================="
echo "  Maana Pure Oil - Starting Server"
echo "==================================="
echo ""

echo "[1/2] Starting Backend Server..."
cd backend
npm run dev &
BACKEND_PID=$!
cd ..

echo "[2/2] Starting Frontend Server..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "==================================="
echo "  Servers Started!"
echo "==================================="
echo ""
echo "Backend:  http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo "Admin:    http://localhost:5173/admin/login"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for Ctrl+C
trap "kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait
