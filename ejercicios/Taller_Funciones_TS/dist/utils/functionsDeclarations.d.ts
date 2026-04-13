import type { Bug, Desarrollador, PullRequest } from "../models.js";
export declare function formatearFecha(fecha: [number, number, number]): string;
export declare function presentarDesarrollador(dev: Desarrollador): string;
export declare function esBugCriticoActivo(bug: Bug): boolean;
export declare function clasificarPR(pr: PullRequest): string;
export declare const esSeniorOLead: (dev: Desarrollador) => boolean;
export declare const tituloFormateado: (bug: Bug) => string;
export declare const prValido: (pr: PullRequest) => boolean;
export declare const nombreDevPorId: (devs: Desarrollador[], id: number) => string;
//# sourceMappingURL=functionsDeclarations.d.ts.map