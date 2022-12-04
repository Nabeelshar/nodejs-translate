const express = require('express');
const { translate } = require('@vitalets/google-translate-api');

const app = express();
const appUrl = 'https://nabeelshar.github.io/nodejs-translate/';
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/translate', (req, res) => {
  const { text, from, to } = req.body;
  
  translate(text, { from, to }).then(result => {
    res.json({
      text: result.text,
    });
  }).catch(err => {
    res.status(500).send(err);
  });
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
