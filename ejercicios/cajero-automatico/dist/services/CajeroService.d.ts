import type { CajeroAutomatico } from "../models/CajeroAutomatico.js";
export declare class AtmService {
    private cajeros;
    constructor(cajerosIniciales: CajeroAutomatico[]);
    private buscarCajero;
    retirarDinero(id: string, monto: number): void;
    consultarDinero(id: string): number;
}
//# sourceMappingURL=CajeroService.d.ts.map