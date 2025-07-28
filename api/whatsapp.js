export default async function handler(req, res) {
  const { phone } = req.query;
  const url = `https://whatsapp-pic-api.p.rapidapi.com/jpic2?phone=${phone}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b7ff50aceemsh46e8ce494d97a6ep10441ajsna186cd3fb5d8',
      'x-rapidapi-host': 'whatsapp-pic-api.p.rapidapi.com'
    }
  });
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
} 