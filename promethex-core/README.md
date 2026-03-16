# Promethex Core

Biblioteca de activos de élite de la agencia Promethex. Contiene componentes, hooks, utilidades y plantillas reutilizables para acelerar el desarrollo de proyectos de alto impacto.

## Principios de diseño

- **Agnósticos al color**: Todos los componentes usan variables de Tailwind CSS (ej. `bg-primary`, `text-foreground`) en lugar de colores hardcodeados. Esto garantiza que cada activo sea reutilizable en cualquier proyecto sin modificaciones.
- **Modulares**: Cada pieza es independiente y puede integrarse sin dependencias innecesarias.
- **Tipados**: Todo el código está escrito en TypeScript.

## Estructura

```
promethex-core/
├── components/
│   ├── ui/          # Piezas básicas: botones, inputs, modales
│   ├── marketing/   # Secciones de alto impacto: Navbars, Heroes, Pricing
│   └── ecommerce/   # Carrito, checkout, tarjetas de producto
├── hooks/           # Lógica reutilizable: useCart, useAuth, etc.
├── utils/           # Funciones de ayuda: formateo de moneda, validación
└── templates/       # Estructuras de páginas completas: Landing, Dashboard
```

## Uso

Importa cualquier activo desde el barrel file raíz:

```ts
import { MasterNavbar, useCart, formatCurrency } from '@promethex/core'
```
