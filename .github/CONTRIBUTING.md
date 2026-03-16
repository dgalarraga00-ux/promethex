# Flujo de trabajo Git — Promethex

## Regla principal
**Nunca hacer push directo a `main`.**

## Pasos para cada cambio

```bash
# 1. Actualiza main
git checkout main && git pull origin main

# 2. Crea una rama
git checkout -b feat/nombre-del-cambio

# 3. Commits
git add archivo.tsx
git commit -m "descripción del cambio"

# 4. Sube la rama
git push origin feat/nombre-del-cambio

# 5. Abre Pull Request en GitHub
gh pr create --title "Título" --base main
```

## Tipos de rama
| Prefijo | Uso |
|---------|-----|
| `feat/` | Nueva funcionalidad |
| `fix/` | Corrección de bug |
| `chore/` | Mantenimiento |
| `ui/` | Ajustes visuales |
