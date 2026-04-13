import type { Bug, Desarrollador, PullRequest } from "../models.js";

// 1.1
export function formatearFecha(fecha: [number, number, number]): string {
  const [dia, mes, anio] = fecha;
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  return `${dia} de ${meses[mes - 1]} de ${anio}`;
}

// 1.2
export function presentarDesarrollador(dev: Desarrollador): string {
  const disponibilidad = dev.disponible ? "Disponible" : "No disponible";
  return `${dev.nivel.toUpperCase()} - ${dev.nombre} (${dev.rol}) - ${disponibilidad}`;
}

// 1.3
export function esBugCriticoActivo(bug: Bug): boolean {
  return (
    (bug.prioridad === "alta" || bug.prioridad === "crítica") &&
    bug.estado !== "resuelto" &&
    bug.estado !== "cerrado" &&
    (bug.ambiente === "staging" || bug.ambiente === "producción")
  );
}

// 1.4
export function clasificarPR(pr: PullRequest): string {
  const cambios = pr.lineasAgregadas + pr.lineasEliminadas;

  if (cambios < 50) return "Pequeño";
  if (cambios < 200) return "Mediano";
  return "Grande";
}

// Bloque 3 (one-liners)

export const esSeniorOLead = (dev: Desarrollador) =>
  dev.nivel === "senior" || dev.nivel === "lead";

export const tituloFormateado = (bug: Bug) =>
  bug.prioridad === "crítica" ? bug.titulo.toUpperCase() : bug.titulo;

export const prValido = (pr: PullRequest) =>
  pr.estado === "aprobado" && pr.revisores.length > 0;

export const nombreDevPorId = (devs: Desarrollador[], id: number) =>
  devs.find(d => d.id === id)?.nombre || "Desarrollador no encontrado";