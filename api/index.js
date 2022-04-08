const express = require('express')

const app = express()

app.use(express.json())

const port = 3005

app.get('/teste', (req, res) => res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' })
)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app