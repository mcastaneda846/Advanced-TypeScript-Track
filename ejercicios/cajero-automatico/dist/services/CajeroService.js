export class AtmService {
    constructor(cajerosIniciales) {
        this.cajeros = cajerosIniciales;
    }
    // Buscar cajero
    buscarCajero(id) {
        const cajero = this.cajeros.find(c => c.idCajero === id);
        if (!cajero) {
            throw new Error("Cajero no encontrado");
        }
        return cajero;
    }
    // Retirar dinero del cajero (no de la cuenta)
    retirarDinero(id, monto) {
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
    consultarDinero(id) {
        const cajero = this.buscarCajero(id);
        return cajero.dineroDisponible;
    }
}
//# sourceMappingURL=CajeroService.js.map