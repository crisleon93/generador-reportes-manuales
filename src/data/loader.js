export function normalize(data) {
  if (!Array.isArray(data)) {
    throw new Error('El dataset debe ser un array');
  }

  return data.map((row, index) => {
    // Validar que sea un objeto
    if (typeof row !== 'object' || row === null) {
      throw new Error(`Registro en índice ${index}: debe ser un objeto`);
    }

    // Normalizar categoría
    let categoria = String(row.categoria || row.category || '').trim();
    if (!categoria) {
      categoria = 'sin-categoría';
    }

    // Validar y normalizar monto
    const montoRaw = row.monto || row.amount || row.valor || 0;
    const monto = Number(montoRaw);

    if (isNaN(monto)) {
      throw new Error(`Registro en índice ${index}: monto "${montoRaw}" no es un número válido`);
    }

    if (monto < 0) {
      throw new Error(`Registro en índice ${index}: monto no puede ser negativo`);
    }

    return {
      categoria,
      monto
    };
  });
}