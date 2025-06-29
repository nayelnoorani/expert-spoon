const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files first
app.use(express.static(path.join(__dirname, 'frontend')));

// Optional fallback route if no file matches
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
