const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // Для парсинга JSON-запросов

// Простой GET эндпоинт
app.get('/', (req, res) => {
  res.send('Hello from Robot-Doctor Backend!');
});

// Пример POST эндпоинта
app.post('/api/diagnosis', (req, res) => {
  const { symptoms } = req.body;
  // Тут будет логика для анализа симптомов
  res.json({ message: `Received symptoms: ${symptoms}` });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
