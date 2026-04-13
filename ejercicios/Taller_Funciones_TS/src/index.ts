import { bugs, equipo, proyecto } from "./data.js";

import {
  mostrarFechasBugs,
  mostrarDesarrolladores,
  filtrarDisponibles,
  construirResumenDev,
  contarBugsPorEstado,
  obtenerTecnologias,
  imprimirReporte,
  alertasBugs,
  alertasPR,
} from "./services.js";

console.log("\n===== Fechas a string =====\n");
mostrarFechasBugs(bugs);

console.log("\n===== Desarrolladores =====\n");
mostrarDesarrolladores(equipo);

// Bloque 2
console.log("\n===== Desarrolladores disponibles =====\n");
console.log(filtrarDisponibles(equipo));

// Bloque 4
console.log("\n===== Resumen  =====\n");
const resumen = construirResumenDev(equipo[0]!, bugs, proyecto.pullRequests);
console.log(resumen);

console.log("\n===== Conteo Bugs =====\n");
console.log(contarBugsPorEstado(bugs));

console.log("\n===== Tecnologías =====\n");
console.log(obtenerTecnologias(equipo));

console.log("\n===== Reporte =====\n");
imprimirReporte(proyecto);

// Bloque 5 - Alertas
console.log("\n===== Alertas bugs =====\n");
console.log(alertasBugs(bugs, equipo));

console.log("\n===== Alertas PR =====\n");
console.log(alertasPR(proyecto.pullRequests, equipo));
