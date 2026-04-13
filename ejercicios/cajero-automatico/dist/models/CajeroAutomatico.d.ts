export type BancoPerteneciente = "bancolombia" | "banco de bogotá" | "davivienda";
export type TipoBilleteDisponible = 20 | 50 | 100;
export type Ubicacion = "medellin" | "bogotá";
export interface CajeroAutomatico {
    idCajero: string;
    ubicacion: Ubicacion;
    bancoPerteneciente: BancoPerteneciente;
    dineroDisponible: number;
    tipoBilleteDisponible: TipoBilleteDisponible[];
}
//# sourceMappingURL=CajeroAutomatico.d.ts.map