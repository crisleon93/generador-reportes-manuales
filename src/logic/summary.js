export function totals(rows) {
  if (!rows || rows.length === 0) {
    return { total: 0, avg: 0 };
  }

  const total = rows.reduce((sum, row) => sum + row.monto, 0);
  const avg = total / rows.length;

  return { total, avg };
}

export function byCategory(rows) {
  const grupos = {};

  rows.forEach(row => {
    const { categoria, monto } = row;
    
    if (!grupos[categoria]) {
      grupos[categoria] = { categoria, total: 0 };
    }
    
    grupos[categoria].total += monto;
  });

  // Convertir a array y ordenar descendentemente
  return Object.values(grupos)
    .sort((a, b) => b.total - a.total);
}