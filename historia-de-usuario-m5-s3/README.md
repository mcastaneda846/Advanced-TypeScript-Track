# Componentes UI Reutilizables con React + TypeScript

## Descripción

Este proyecto implementa componentes reutilizables (Button, Badge y Card) utilizando React y TypeScript, con tipado fuerte, diseño consistente y enfoque escalable.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abrir en:
http://localhost:5173/

## Componentes

### Button

Componente reutilizable para acciones.

**Props:**

- text: string (obligatorio)
- variant: "primary" | "secondary" | "danger"
- size: "sm" | "md" | "lg"
- disabled, loading
- leftIcon, rightIcon
- onClick

### Badge

Componente para mostrar estados o categorías.

**Props:**

- label: string (obligatorio)
- status: "success" | "warning" | "info" | "error" | "neutral"
- icon?: ReactNode

### Card

Contenedor visual reutilizable.

**Props:**

- title: string (obligatorio)
- type: "green" | "white" | "black"
- imageUrl?: string
- footer?: ReactNode
- children?: ReactNode

## Ejemplo en pantalla

Se muestra un listado de Cards donde cada una incluye:

- Un Badge (estado)
- Un Button (acción)
- Imagen opcional

## Estructura

```bash
src/
├── components/
│   ├── Button.tsx
│   ├── Badge.tsx
│   └── Card.tsx
```

## Funcionalidades

- Componentes reutilizables y tipados
- Integración entre componentes
- UI consistente con paleta de colores
- Soporte de iconos y estados
- Diseño limpio y extensible

## Requerimientos cumplidos

✔ RF_01: Button reutilizable
✔ RF_02: Badge reutilizable
✔ RF_03: Card reutilizable
✔ RF_04: Listado de Cards

✔ RNF_01: TypeScript sin errores
✔ RNF_02: Modularidad
✔ RNF_03: Diseño limpio
✔ RNF_04: Ejecución local

## Notas

- El diseño puede escalar fácilmente a CSS o Tailwind
- Componentes preparados para reutilización en proyectos reales
