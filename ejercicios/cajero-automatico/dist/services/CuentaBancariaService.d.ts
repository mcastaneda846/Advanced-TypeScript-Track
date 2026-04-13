import type { CuentaBancaria } from "../models/CuentaBancaria.js";
export declare class AccountService {
    private cuentas;
    constructor(cuentasIniciales: CuentaBancaria[]);
    depositar(numeroCuenta: string, monto: number): void;
    retirar(numeroCuenta: string, monto: number): void;
    obtenerSaldo(numeroCuenta: string): number;
    private buscarCuenta;
}
//# sourceMappingURL=CuentaBancariaService.d.ts.map