#!/bin/bash

echo "Verificando frontend..."

if [ -f src/main/resources/static/index.html ]; then
  echo "Frontend encontrado"
else
  echo "Frontend NÃO encontrado"
  exit 1
fi