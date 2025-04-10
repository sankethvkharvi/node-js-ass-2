const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

// GET API
app.get('/info/:id', (req, res) => {
  const pathParam = req.params.id;
  const queryParam = req.query.name;

  res.json({
    message: 'GET request received',
    pathParam,
    queryParam
  });
});

// POST API
app.post('/submit', (req, res) => {
  const { users } = req.body;

  res.json({
    message: 'Data received',
    data: users || []
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
