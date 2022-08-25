//Importa a biblioteca express
import express from 'express';

export const app = express()

app.use(express.json())

//Para a rota '/', retorna o status 200 e "Marketplace Virtual"
app.get('/', (req, res) =>
{
    res.status(200).send('Marketplace Virtual');
})
