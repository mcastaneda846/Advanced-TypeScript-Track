import type { Bug, Desarrollador, PullRequest, Proyecto, ResumenDev } from "./models.js";
export declare function mostrarFechasBugs(bugs: Bug[]): void;
export declare function mostrarDesarrolladores(devs: Desarrollador[]): void;
export declare const filtrarDisponibles: (devs: Desarrollador[]) => Desarrollador[];
export declare const filtrarBugsPorEstado: (bugs: Bug[], estado: Bug["estado"]) => Bug[];
export declare const bugsPorDev: (bugs: Bug[], id: number) => Bug[];
export declare const prsSinRevisores: (prs: PullRequest[]) => PullRequest[];
export declare const buscarPorStack: (devs: Desarrollador[], tech: Desarrollador["stack"][number]) => Desarrollador[];
export declare function construirResumenDev(dev: Desarrollador, bugs: Bug[], prs: PullRequest[]): ResumenDev;
export declare function contarBugsPorEstado(bugs: Bug[]): {
    abiertos: number;
    enRevision: number;
    resueltos: number;
    cerrados: number;
};
export declare function obtenerTecnologias(devs: Desarrollador[]): string[];
export declare function imprimirReporte(proyecto: Proyecto): void;
export declare function alertasBugs(bugs: Bug[], devs: Desarrollador[]): {
    criticos: Bug[];
    noReproducibles: Bug[];
    muchosBugs: Desarrollador[];
    enRevisionNoDisponible: Bug[];
};
export declare function alertasPR(prs: PullRequest[], devs: Desarrollador[]): {
    sinRevisores: PullRequest[];
    grandes: PullRequest[];
    autorNoDisponible: PullRequest[];
};
//# sourceMappingURL=services.d.ts.map