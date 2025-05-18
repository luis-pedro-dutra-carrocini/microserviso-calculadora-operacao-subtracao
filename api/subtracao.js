export default function handler(req, res) {
  // Configura os cabeçalhos de CORS para todas as requisições
  res.setHeader('Access-Control-Allow-Origin', '*'); // Substitua por seu domínio se quiser restringir
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Trata requisições OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Finaliza a preflight com sucesso
  }

  // Apenas POST deve continuar daqui para baixo
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { a, b } = req.body;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }

  const result = Number(a) - Number(b);
  res.status(200).json({ result });
}
