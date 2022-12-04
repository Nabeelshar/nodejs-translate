const express = require('express');
const { translate } = require('@vitalets/google-translate-api');

const app = express();

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

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
