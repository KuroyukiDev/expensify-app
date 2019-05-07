const express = require('express');
const PORT = process.env.port || 3000;
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is up!`);
});