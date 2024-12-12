const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/enviar-contato', (req, res) => {
  const nome = req.body.name;
  const email = req.body.email;
  console.log(req.body); // Exibe os dados recebidos no terminal
  // ... processa os dados ...
  res.send('Mensagem enviada com sucesso!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});