function calcularLiquidacion({
    salarioBase,
    diasTrabajadosMes,
    diasVacacionesPendientes,
    porcentajePrimaVacacional,
    aguinaldoAnual,
    anosTrabajados   }) {
    // 1. Calculo del salario proporcional
    const salarioProporcional = (salarioBase / 30) * diasTrabajadosMes;
  
    // 2. Calculo de las vacaciones pendientes
    const vacacionesPendientes = diasVacacionesPendientes * (salarioBase / 30);
  
    // 3. Calculo de la prima vacacional
    const primaVacacional = vacacionesPendientes * porcentajePrimaVacacional;
  
    // 4. Calculo del aguinaldo proporcional
    const aguinaldoProporcional = (aguinaldoAnual / 365) * diasTrabajadosMes * 12 / 365;
  
    // 5. Calculo de la indemnización por años trabajados
    const indemnizacion = salarioBase * anosTrabajados;
  
    // 6. Total de la liquidación
    const totalLiquidacion = salarioProporcional + vacacionesPendientes + primaVacacional + aguinaldoProporcional + indemnizacion;
  
    return {
      salarioProporcional: salarioProporcional.toFixed(2),
      vacacionesPendientes: vacacionesPendientes.toFixed(2),
      primaVacacional: primaVacacional.toFixed(2),
      aguinaldoProporcional: aguinaldoProporcional.toFixed(2),
      indemnizacion: indemnizacion.toFixed(2),
      totalLiquidacion: totalLiquidacion.toFixed(2)
    };
  }
  
  function calcular() {
    const salarioBase = parseFloat(document.getElementById("salario").value);
    const diasTrabajadosMes = parseInt(document.getElementById("dias-trabajados").value);
    const diasVacacionesPendientes = parseInt(document.getElementById("vacaciones-pendientes").value);
    const porcentajePrimaVacacional = parseFloat(document.getElementById("prima").value) / salarioBase;
    const aguinaldoAnual = salarioBase;  // Suponiendo que el aguinaldo es un salario mensual (puedes modificarlo)
    const anosTrabajados = 1;  // Asume un año trabajado por defecto
  
    const liquidacion = calcularLiquidacion({
      salarioBase,
      diasTrabajadosMes,
      diasVacacionesPendientes,
      porcentajePrimaVacacional,
      aguinaldoAnual,
      anosTrabajados
    });
  
    document.getElementById("resultado").innerHTML = `
      <h2>Resultados de la Liquidación</h2>
      <p>Salario proporcional: $${liquidacion.salarioProporcional}</p>
      <p>Vacaciones pendientes: $${liquidacion.vacacionesPendientes}</p>
      <p>Prima vacacional: $${liquidacion.primaVacacional}</p>
      <p>Aguinaldo proporcional: $${liquidacion.aguinaldoProporcional}</p>
      <p>Indemnización: $${liquidacion.indemnizacion}</p>
      <h3>Total Liquidación: $${liquidacion.totalLiquidacion}</h3>
    `;
  }
  