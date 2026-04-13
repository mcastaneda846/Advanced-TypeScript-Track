export class AccountService {
    constructor(cuentasIniciales) {
        this.cuentas = cuentasIniciales;
    }
    depositar(numeroCuenta, monto) {
        const cuenta = this.buscarCuenta(numeroCuenta);
        if (monto <= 0) {
            throw new Error("El monto debe ser mayor a 0");
        }
        if (cuenta.estadoCuenta !== "activa") {
            throw new Error("La cuenta no está activa");
        }
        cuenta.saldoDisponible += monto;
    }
    retirar(numeroCuenta, monto) {
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
    obtenerSaldo(numeroCuenta) {
        const cuenta = this.buscarCuenta(numeroCuenta);
        return cuenta.saldoDisponible;
    }
    buscarCuenta(numeroCuenta) {
        const cuenta = this.cuentas.find(c => c.numeroCuenta === numeroCuenta);
        if (!cuenta) {
            throw new Error("Cuenta no encontrada");
        }
        return cuenta;
    }
}
//# sourceMappingURL=CuentaBancariaService.js.map