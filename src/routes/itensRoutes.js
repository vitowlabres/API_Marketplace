//Importa a biblioteca express
import express from 'express';

import cors from 'cors'

//Importa a classe ItensController, que se encontra no caminho indicado e
//possui as funcionalidades que serão utilizadas nas rotas
import ItensController from '../controllers/ItensController.js';

export const app = express()

app.use(express.json())
app.use(cors())
//Aplica uma propriedade da classe ItensController em cada uma das rotas

app.get('/itens', ItensController.listaItens)

app.get('/itens/:id', ItensController.buscaItem)

app.post('/itens', ItensController.adicionaItem)

app.put('/itens/:id', ItensController.alteraItem)

app.delete('/itens/:id', ItensController.removeItem)
