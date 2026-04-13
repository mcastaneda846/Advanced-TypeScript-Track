import type { Bug, Desarrollador, PullRequest, Proyecto, ResumenDev} from "./models.js";
import {
  formatearFecha,
  presentarDesarrollador,
  esBugCriticoActivo,
  clasificarPR
} from "./utils/functionsDeclarations.js";

// Mostrar las fechas de reporte de los bugs de forma legible
export function mostrarFechasBugs(bugs: Bug[]): void {
  bugs.forEach((bug) => {
    console.log(`Fecha: ${formatearFecha(bug.fechaReporte)}`);
  });
}

// Mostrar  desarrolladores
export function mostrarDesarrolladores(devs: Desarrollador[]): void {
  devs.forEach((dev) => {
    console.log(`Desarrollador: ${presentarDesarrollador(dev)}`);
  });
}

// Bloque 2

export const filtrarDisponibles = (devs: Desarrollador[]) => {
  return devs.filter(dev => dev.disponible);
};

export const filtrarBugsPorEstado = (
  bugs: Bug[],
  estado: Bug["estado"]
) => {
  return bugs.filter(bug => bug.estado === estado);
};

export const bugsPorDev = (bugs: Bug[], id: number) => {
  return bugs.filter(bug => bug.idAsignado === id);
};

export const prsSinRevisores = (prs: PullRequest[]) => {
  return prs.filter(pr => pr.revisores.length === 0);
};

export const buscarPorStack = (
  devs: Desarrollador[],
  tech: Desarrollador["stack"][number]
) => {
  return devs.filter(dev =>
    dev.stack.some(t => t === tech)
  );
};

// Bloque 4

export function construirResumenDev(
  dev: Desarrollador,
  bugs: Bug[],
  prs: PullRequest[]
): ResumenDev {
  const asignados = bugs.filter(b => b.idAsignado === dev.id);

  const resueltos = asignados.filter(
    b => b.estado === "resuelto"
  );

  const prsAbiertos = prs.filter(
    pr => pr.idAutor === dev.id && pr.estado === "abierto"
  );

  return {
    nombre: dev.nombre,
    rol: dev.rol,
    nivel: dev.nivel,
    bugsAsignados: asignados.length,
    bugsResueltos: resueltos.length,
    prsAbiertos: prsAbiertos.length,
    disponible: dev.disponible
  };
}
// 4.2
export function contarBugsPorEstado(bugs: Bug[]) {
  return {
    abiertos: bugs.filter(b => b.estado === "abierto").length,
    enRevision: bugs.filter(b => b.estado === "en revisión").length,
    resueltos: bugs.filter(b => b.estado === "resuelto").length,
    cerrados: bugs.filter(b => b.estado === "cerrado").length
  };
}

// 4.3
export function obtenerTecnologias(devs: Desarrollador[]) {
  const techs: string[] = [];

  devs.forEach(dev => {
    dev.stack.forEach(tech => {
      if (!techs.some(t => t === tech)) {
        techs.push(tech);
      }
    });
  });

  return techs;
}

// 4.4
export function imprimirReporte(proyecto: Proyecto) {
  console.log("Proyecto:", proyecto.nombre);

  console.log("---- Bugs ----");
  proyecto.bugs.forEach(b => {
    console.log(
      `Bug ${b.id}: ${formatearFecha(b.fechaReporte)}`
    );
  });

  console.log("---- PRs ----");
  proyecto.pullRequests.forEach(pr => {
    console.log(
      `PR ${pr.id}: ${clasificarPR(pr)}`
    );
  });
}

// Bloque 5

export function alertasBugs(
  bugs: Bug[],
  devs: Desarrollador[]
) {
  return {
    criticos: bugs.filter(b => esBugCriticoActivo(b)),

    noReproducibles: bugs.filter(
      b => !b.reproducible && b.estado === "abierto"
    ),

    muchosBugs: devs.filter(
      d => bugs.filter(b => b.idAsignado === d.id).length > 2
    ),

    enRevisionNoDisponible: bugs.filter(b => {
      const dev = devs.find(d => d.id === b.idAsignado);
      return (
        b.estado === "en revisión" &&
        dev !== undefined &&
        !dev.disponible
      );
    })
  };
}

export function alertasPR(
  prs: PullRequest[],
  devs: Desarrollador[]
) {
  return {
    sinRevisores: prs.filter(
      pr => pr.revisores.length === 0
    ),

    grandes: prs.filter(
      pr =>
        clasificarPR(pr) === "Grande" &&
        pr.estado === "aprobado"
    ),

    autorNoDisponible: prs.filter(pr => {
      const dev = devs.find(d => d.id === pr.idAutor);
      return dev !== undefined && !dev.disponible;
    })
  };
}