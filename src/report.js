import { normalize } from './data/loader.js';
import { totals, byCategory } from './logic/summary.js';
import { renderReport } from './format/text.js';

// Dataset de prueba (puedes modificarlo)
const sample = [
  { categoria: 'alimentos', monto: 150000 },
  { categoria: 'tecnologia', monto: 250000 },
  { categoria: 'alimentos', monto: 130000 },
  { categoria: 'tecnologia', monto: 200000 },
  { categoria: 'servicios', monto: 150000 },
];

try {
  // 1. Normalización/validación
  const rows = normalize(sample);
  
  // 2. Cálculos
  const { total, avg } = totals(rows);
  const byCat = byCategory(rows);
  
  // 3. Metadata
  const meta = {
    fecha: new Date().toISOString().slice(0, 10),
    registros: rows.length
  };
  
  // 4. Formateo y salida
  const output = renderReport({ total, avg, byCat, meta });
  console.log(output);
  
} catch (err) {
  console.error('Error al generar reporte:', err.message);
  process.exit(1);
}