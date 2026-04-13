export type TipoDeCuenta = "ahorros" | "corriente";
export type EstadoCuenta = "activa" | "bloqueada";

export interface CuentaBancaria {
    documentoTitular: string;
    nombreTitular: string;
    numeroCuenta: string;
    tipoDeCuenta: TipoDeCuenta;
    saldoDisponible: number;
    estadoCuenta: EstadoCuenta
}