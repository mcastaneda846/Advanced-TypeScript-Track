import type { CuentaBancaria } from "../models/CuentaBancaria.js";

export const cuentas: CuentaBancaria[] = [
  {
    documentoTitular: "123456789",
    nombreTitular: "Juan Pérez",
    numeroCuenta: "000123456",
    tipoDeCuenta: "ahorros",
    saldoDisponible: 1500000,
    estadoCuenta: "activa"
  },
  {
    documentoTitular: "987654321",
    nombreTitular: "María Gómez",
    numeroCuenta: "000987654",
    tipoDeCuenta: "corriente",
    saldoDisponible: 3200000,
    estadoCuenta: "bloqueada"
  }
];