# Backend API - CRUD de Usuarios (Next.js)

## Descripción

Este proyecto implementa una API REST utilizando Next.js que expone un CRUD de usuarios. Permite crear, consultar, actualizar y eliminar usuarios mediante endpoints HTTP.

## Requisitos

- Node.js instalado
- npm o yarn

## Ejecución del proyecto

1. Instalar dependencias:

```bash id="a1s2d3"
npm install
```

2. Ejecutar el servidor:

```bash id="f4g5h6"
npm run dev
```

## URL base de la API

```bash id="j7k8l9"
http://localhost:3000/api/users
```

## Estructura del proyecto

```bash id="m1n2o3"
app/
└── api/
    └── users/
        └── route.ts   # Definición del CRUD
```

## Endpoints disponibles

### GET /api/users

Obtiene la lista de usuarios.

**Respuesta:**

```json id="z1x2c3"
[
  { "id": 1, "name": "Juan" },
  { "id": 2, "name": "Ana" }
]
```

### POST /api/users

Crea un nuevo usuario.

**Body:**

```json id="v4b5n6"
{
  "name": "Maribel"
}
```

**Respuesta:**

```json id="q7w8e9"
{
  "id": 123456,
  "name": "Maribel"
}
```

### PUT /api/users

Actualiza un usuario existente.

**Body:**

```json id="r1t2y3"
{
  "id": 123456,
  "name": "Nuevo Nombre"
}
```

**Respuesta:**

```json id="u4i5o6"
{
  "message": "Updated"
}
```

### DELETE /api/users

Elimina un usuario.

**Body:**

```json id="p7a8s9"
{
  "id": 123456
}
```

**Respuesta:**

```json id="d1f2g3"
{
  "message": "Deleted"
}
```

## Almacenamiento de datos

Los usuarios se almacenan en memoria mediante un arreglo:

```ts id="h4j5k6"
let users = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Ana" },
];
```

Esto significa que:

- Los datos no son persistentes
- Se reinician al reiniciar el servidor

## Validación

Puedes probar la API de las siguientes formas:

### Navegador (GET)

```bash id="l7z8x9"
http://localhost:3000/api/users
```

### ✔ Consola del navegador

```js id="c1v2b3"
fetch("http://localhost:3000/api/users")
  .then((res) => res.json())
  .then(console.log);
```

### ✔ Cliente TypeScript

El proyecto cliente consume esta API y permite validar todas las operaciones CRUD.

## Consideraciones

- No se implementa autenticación
- No hay validación de datos
- No se maneja base de datos real

## Funcionalidades implementadas

✔ API REST con Next.js
✔ CRUD completo de usuarios
✔ Uso de métodos HTTP (GET, POST, PUT, DELETE)
✔ Manejo de datos en memoria

## Buenas prácticas aplicadas

- Separación de responsabilidades
- Uso de async/await
- Estructura modular de rutas
- Código claro y mantenible

## Conclusión

Esta API permite gestionar usuarios mediante un CRUD básico, sirviendo como base para aplicaciones más complejas y como ejemplo de integración con clientes frontend.
