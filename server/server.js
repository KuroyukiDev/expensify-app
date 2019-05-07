const express = require('express');
const PORT = process.env.port || 3000;
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Server is up!`);
});