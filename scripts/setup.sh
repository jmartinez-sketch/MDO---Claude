#!/usr/bin/env bash
# Setup para sesiones cloud frescas. Instala Node modules + Chromium para
# que el render funcione. Idempotente: si ya está instalado, no hace nada.
set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -d node_modules ] || [ ! -d node_modules/puppeteer ]; then
  echo "[setup] Instalando dependencias npm..."
  npm install --no-audit --no-fund
else
  echo "[setup] node_modules OK"
fi

# Verificar que Chromium quedó descargado
CHROME_BIN="$(find "$HOME/.cache/puppeteer/chrome" -name chrome -type f 2>/dev/null | head -1 || true)"
if [ -z "$CHROME_BIN" ]; then
  echo "[setup] Chromium no encontrado, forzando descarga..."
  npx puppeteer browsers install chrome
else
  echo "[setup] Chromium OK: $CHROME_BIN"
fi

echo "[setup] Listo."
