// 1.1
export function formatearFecha(fecha) {
    const [dia, mes, anio] = fecha;
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return `${dia} de ${meses[mes - 1]} de ${anio}`;
}
// 1.2
export function presentarDesarrollador(dev) {
    const disponibilidad = dev.disponible ? "Disponible" : "No disponible";
    return `${dev.nivel.toUpperCase()} - ${dev.nombre} (${dev.rol}) - ${disponibilidad}`;
}
// 1.3
export function esBugCriticoActivo(bug) {
    return ((bug.prioridad === "alta" || bug.prioridad === "crítica") &&
        bug.estado !== "resuelto" &&
        bug.estado !== "cerrado" &&
        (bug.ambiente === "staging" || bug.ambiente === "producción"));
}
// 1.4
export function clasificarPR(pr) {
    const cambios = pr.lineasAgregadas + pr.lineasEliminadas;
    if (cambios < 50)
        return "Pequeño";
    if (cambios < 200)
        return "Mediano";
    return "Grande";
}
// Bloque 3 (one-liners)
export const esSeniorOLead = (dev) => dev.nivel === "senior" || dev.nivel === "lead";
export const tituloFormateado = (bug) => bug.prioridad === "crítica" ? bug.titulo.toUpperCase() : bug.titulo;
export const prValido = (pr) => pr.estado === "aprobado" && pr.revisores.length > 0;
export const nombreDevPorId = (devs, id) => { var _a; return ((_a = devs.find(d => d.id === id)) === null || _a === void 0 ? void 0 : _a.nombre) || "Desarrollador no encontrado"; };
//# sourceMappingURL=functionsDeclarations.js.map