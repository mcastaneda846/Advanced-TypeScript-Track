# Cliente TypeScript - Consumo de API CRUD

## Descripción

Este proyecto corresponde a un cliente desarrollado en TypeScript que consume una API REST creada con Next.js. Permite realizar operaciones CRUD (Create, Read, Update, Delete) sobre usuarios mediante peticiones HTTP.

## Requisitos

- Node.js instalado
- Tener en ejecución el backend (Next.js API)

## Ejecución del proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Compilar TypeScript:

```bash
npx tsc
```

3. Ejecutar el cliente:

```bash
npm run dev
```

## URL de la API

El cliente consume la siguiente API:

```
http://localhost:3000/api/users
````

Asegúrate de que el backend esté corriendo antes de ejecutar el cliente.

## Estructura del proyecto

```bash
src/
├── api.ts        # Funciones para consumir la API
├── index.ts      # Archivo principal de ejecución
```

## Funciones disponibles

### Obtener usuarios

```ts
getUsers();
```

Realiza una petición GET para listar todos los usuarios.

### Crear usuario

```ts
createUser(name: string)
```

Envía una petición POST para crear un nuevo usuario.

### Actualizar usuario

```ts
updateUser(id: number, name: string)
```

Envía una petición PUT para actualizar un usuario existente.

### Eliminar usuario

```ts
deleteUser(id: number)
```

Envía una petición DELETE para eliminar un usuario.

## Ejemplo de uso

El archivo `index.ts` ejecuta una secuencia de pruebas:

```ts
const newUser = await createUser("Maribel");
```

Esto permite validar que el cliente se comunica correctamente con el backend.

## Validación de funcionamiento

Para comprobar que la API responde correctamente:

1. Ejecutar el cliente
2. Revisar la consola
3. Verificar los logs en el backend
4. Acceder a:

```bash
http://localhost:3000/api/users
```

## Notas importantes

- Los datos no son persistentes (se almacenan en memoria)
- Al reiniciar el servidor, los usuarios se reinician

## Funcionalidades implementadas

✔ Consumo de API REST
✔ Operaciones CRUD completas
✔ Uso de fetch con TypeScript
✔ Separación de lógica en módulos

## Buenas prácticas aplicadas

- Código modular
- Uso de async/await
- Separación entre lógica de API y ejecución
- Tipado con TypeScript

## Conclusión

Este cliente permite interactuar de forma completa con una API backend, simulando un flujo real de comunicación frontend-backend en una aplicación moderna.
