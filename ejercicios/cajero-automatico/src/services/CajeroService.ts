import type { CajeroAutomatico } from "../models/CajeroAutomatico.js";

export class AtmService {
  private cajeros: CajeroAutomatico[];

  constructor(cajerosIniciales: CajeroAutomatico[]) {
    this.cajeros = cajerosIniciales;
  }

  // Buscar cajero
  private buscarCajero(id: string): CajeroAutomatico {
    const cajero = this.cajeros.find(c => c.idCajero === id);

    if (!cajero) {
      throw new Error("Cajero no encontrado");
    }

    return cajero;
  }

  // Retirar dinero del cajero (no de la cuenta)
  public retirarDinero(id: string, monto: number): void {
    const cajero = this.buscarCajero(id);

    if (monto <= 0) {
      throw new Error("El monto debe ser mayor a 0");
    }

    if (cajero.dineroDisponible < monto) {
      throw new Error("El cajero no tiene suficiente dinero");
    }

    cajero.dineroDisponible -= monto;
  }

  // Consultar dinero disponible
  public consultarDinero(id: string): number {
    const cajero = this.buscarCajero(id);
    return cajero.dineroDisponible;
  }
}