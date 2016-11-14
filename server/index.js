const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Root folder for serving static files
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routing will be handled on the front end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App receiving requests on port ${PORT}!`);
});

