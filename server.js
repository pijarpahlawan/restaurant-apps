const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const port = 9000;

app.use(compression());

const staticOptions = {
  maxAge: '1y',
};

app.use(express.static(path.resolve(__dirname, 'dist'), staticOptions));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
