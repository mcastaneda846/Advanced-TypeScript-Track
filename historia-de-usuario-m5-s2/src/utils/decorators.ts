export function AddUserMetadata(
  // target: referencia a la clase donde está el método
  target: any,

  // propertyKey: nombre del método (ej: "create")
  propertyKey: string,

  // descriptor: contiene la definición del método original
  descriptor: PropertyDescriptor,
) {
  // Guarda el método original (create)
  const originalMethod = descriptor.value;

  // Sobrescribe el método original con una nueva función
  descriptor.value = function (...args: any[]) {
    // Obtiene el primer argumento (el usuario que se va a crear)
    const user = args[0];

    // Crea un nuevo objeto usuario agregando propiedades extra
    const enrichedUser = {
      ...user, // copia todas las propiedades originales
      role: "user", // agrega rol por defecto
      createdAt: Date.now(), // agrega timestamp de creación
    };

    // Llama al método original (create) pero pasando el usuario modificado
    return originalMethod.apply(this, [enrichedUser]);
  };

  // Retorna el descriptor modificado
  return descriptor;
}
