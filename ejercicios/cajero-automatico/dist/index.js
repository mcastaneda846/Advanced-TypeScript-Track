import { cajeros } from "./data/DataCajeroAutomatico.js";
import { cuentas } from "./data/DataCuentaBancaria.js";
import { AtmService } from "./services/CajeroService.js";
import { AccountService } from "./services/CuentaBancariaService.js";
import { obtenerPrimero } from "./utils/FuncionGenerica.js";
const servicio = new AccountService(cuentas);
// uso de función genérica
const primeraCuenta = obtenerPrimero(cuentas);
console.log("Primera cuenta:", primeraCuenta);
try {
    console.log("Saldo inicial:", servicio.obtenerSaldo("000123456"));
    servicio.depositar("000123456", 500000);
    console.log("Después de depositar:", servicio.obtenerSaldo("000123456"));
    servicio.retirar("000123456", 200000);
    console.log("Después de retirar:", servicio.obtenerSaldo("000123456"));
    // error controlado
    servicio.retirar("000123456", 999999999);
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    }
}
const atmService = new AtmService(cajeros);
try {
    console.log("Dinero inicial cajero:", atmService.consultarDinero("1"));
    atmService.retirarDinero("1", 500000);
    console.log("Después de retirar:", atmService.consultarDinero("1"));
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error ATM:", error.message);
    }
}
//# sourceMappingURL=index.js.map