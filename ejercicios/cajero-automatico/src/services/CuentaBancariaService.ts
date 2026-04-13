import type { CuentaBancaria } from "../models/CuentaBancaria.js";

export class AccountService {
  private cuentas: CuentaBancaria[];

  constructor(cuentasIniciales: CuentaBancaria[]) {
    this.cuentas = cuentasIniciales;
  }

  public depositar(numeroCuenta: string, monto: number): void {
    const cuenta = this.buscarCuenta(numeroCuenta);

    if (monto <= 0) {
      throw new Error("El monto debe ser mayor a 0");
    }

    if (cuenta.estadoCuenta !== "activa") {
      throw new Error("La cuenta no está activa");
    }

    cuenta.saldoDisponible += monto;
  }

  public retirar(numeroCuenta: string, monto: number): void {
    const cuenta = this.buscarCuenta(numeroCuenta);

    if (monto <= 0) {
      throw new Error("El monto debe ser mayor a 0");
    }

    if (cuenta.estadoCuenta !== "activa") {
      throw new Error("La cuenta no está activa");
    }

    if (cuenta.saldoDisponible < monto) {
      throw new Error("Saldo insuficiente");
    }

    cuenta.saldoDisponible -= monto;
  }

  public obtenerSaldo(numeroCuenta: string): number {
    const cuenta = this.buscarCuenta(numeroCuenta);
    return cuenta.saldoDisponible;
  }

  private buscarCuenta(numeroCuenta: string): CuentaBancaria {
    const cuenta = this.cuentas.find(c => c.numeroCuenta === numeroCuenta);

    if (!cuenta) {
      throw new Error("Cuenta no encontrada");
    }

    return cuenta;
  }
}