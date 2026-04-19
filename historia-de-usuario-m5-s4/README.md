# Commerce Platform

Aplicación fullstack desarrollada con **Next.js + TypeScript + PostgreSQL**, enfocada en autenticación básica, gestión de usuarios y visualización de productos en un dashboard tipo e-commerce.

# Tecnologías utilizadas

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- PostgreSQL
- Node.js (API Routes internas de Next.js)

# Estructura del proyecto

/app
/api
/auth
login
register
/products
/stats
/components
Card.tsx
ProductCard.tsx
/dashboard
/login
/register
/lib
db.ts (conexión a PostgreSQL)

# Base de datos

## Tabla usuarios

CREATE TABLE usuarios (
id SERIAL PRIMARY KEY,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(100) NOT NULL,
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Tabla productos

CREATE TABLE productos (
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
precio NUMERIC(10,2) NOT NULL,
stock INT DEFAULT 0,
usuario_id INT,
image_url TEXT,
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fk_usuario
FOREIGN KEY (usuario_id)
REFERENCES usuarios(id)
);

# Instalación del proyecto

## 1. Clonar repositorio

git clone `<https://github.com/mcastaneda846/Advanced-TypeScript-Track.git>`

`cd historia-de-usuario-m5-s4`

## 2. Instalar dependencias

`npm install`

## 3. Configuración de base de datos

La conexión a PostgreSQL se realiza directamente desde:

`/lib/db.ts`

Ahí se configuran los datos de conexión (host, usuario, contraseña, puerto y base de datos).

## 4. Crear base de datos

`CREATE DATABASE commerce_platform;`

## 5. Ejecutar proyecto

`npm run dev`

Abrir:
`http://localhost:3000`

# Módulo de autenticación

## Registro

- POST /api/auth/register
- Inserta usuario en PostgreSQL
- Valida si el usuario ya existe

## Login

- POST /api/auth/login
- Valida credenciales
- Redirige al dashboard

# Dashboard

`GET /api/products`

Muestra productos en cards reutilizables con:

- imagen
- nombre
- precio
- stock

# Componentes

## ProductCard

- Imagen
- Nombre
- Precio
- Stock

# UI / UX

- Tailwind CSS
- Responsive design
- Dark mode support
- Grid de productos

# Flujo

`Register → Login → Dashboard → Productos`

# Funcionalidades

- Registro de usuarios
- Login de usuarios
- Conexión a PostgreSQL
- Listado de productos
- Cards reutilizables
- Dashboard funcional

# Notas

- Next.js fullstack (sin backend separado)
- API Routes internas
- PostgreSQL directo desde lib/db.ts
- Proyecto educativo

# Estado

- Registro
- Login
- DB conectada
- Dashboard
- UI con Tailwind
- Cards funcionales
