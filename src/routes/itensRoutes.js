//Importa a biblioteca express
import express from 'express';

//Importa a classe ItensController, que se encontra no caminho indicado e
//possui as funcionalidades que serão utilizadas nas rotas
import ItensController from '../controllers/ItensController.js';

export const app = express()

app.use(express.json())

//Aplica um método em cada uma das rotas

//Para a rota /itens, é chamada a classe ItensController
app.get('/itens', ItensController.listaItens)

app.get('/itens/:id', ItensController.buscaItem)

app.post('/itens', ItensController.adicionaItem)

app.put('/itens/:id', ItensController.alteraItem)

app.delete('/itens/:id', ItensController.removeItem)
