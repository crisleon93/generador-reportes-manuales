export function renderReport({ total, avg, byCat, meta }) {
  // Formateador monetario
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2
  });

  // Encabezado
  let output = '=== REPORTE DE VENTAS ===\n';
  output += `Fecha de ejecución: ${meta.fecha}\n`;
  output += `Registros procesados: ${meta.registros}\n\n`;

  // Totales
  output += '**Totales:**\n\n';
  output += `- Total general: ${formatter.format(total)}\n`;
  output += `- Promedio por registro: ${formatter.format(avg)}\n\n`;

  // Por categoría
  output += '**Por categoría (desc):**\n\n';
  
  if (byCat.length === 0) {
    output += 'No hay categorías para mostrar\n';
  } else {
    byCat.forEach((cat, index) => {
      output += `${index + 1}) ${cat.categoria}: ${formatter.format(cat.total)}\n`;
    });
  }

  return output;
}