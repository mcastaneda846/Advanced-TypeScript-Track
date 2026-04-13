export function formatearFecha(fecha) {
    const [dia, mes, anio] = fecha;
    const meses = [
        "enero", "febrero", "marzo", "abril",
        "mayo", "junio", "julio", "agosto",
        "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return `${dia} de ${meses[mes - 1]} de ${anio}`;
}
//# sourceMappingURL=date.js.map