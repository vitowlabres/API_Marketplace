import itens from '../../bd.js'
import Item from '../models/Item.js'


export default class ItensController
{
    static listaItens = (req, res) => {
    
        return res.status(200).json(Item.filterParam(req.query))

    }

    static buscaItem = (req, res) => {
        
        if (!Item.findById(req.params.id)){
            res.status(400).json("O id informado não existe");
        } else {
            res.status(200).json(Item.findById(req.params.id));
        }
    }

    static adicionaItem = (req, res) => {

        //atribui a variavel rb o body enviado no pedido
        const rb = req.body

        // verifica se o id enviado no body já consta no bd
        const idItem = Number ( rb.id )
        const item = Item.findById(idItem)
        
        //caso  exista um item no bd com o mesmo id, informa que id já existe
        if (item) {
            return res.status(400).json({
                mensagem: `O id informado já existe`
            })
        }

        //verifica as keys originais do item e as keys enviadas
        const itemKeys = Object.keys(Item.all[0])
        const bodykeys = Object.keys(req.body)

        //caso alguma key enviada seja incorreta, envia aviso
        const wrongKey = bodykeys.some( key => !itemKeys.includes(key) )

        //exceto o id, verifica todas as keys necessárias, e confere se alguma não está incluída no body
        let missingKey = false
        itemKeys.map(key => {

            if (key !== 'id' && !bodykeys.includes(key)) {
                missingKey = true
            }

        })
    
        //caso alguma key enviada seja incorreta, envia aviso
        if ( wrongKey || missingKey ) {
            return res.status(400).json("Pedido inválido, as informações enviadas estão incorretas")     
        } 
        if (Item.filterParam(req.body).length > 0) {
            return res.status(400).json("Esse item já existe")     
        }
        

        //cria um novo item com as informações do pedido
        const novoItem = new Item(rb.categoria, rb.tipo, rb.tamanho, rb.cor, rb.valor, rb.estoque)
        //adiciona o item ao bd
        itens.push(novoItem);
        //informa que o item foi adicionado
        res.status(201).send(`Item do tipo ${rb.tipo} adicionado ao marketplace no id ${novoItem.id}`)

    }

    static removeItem = (req, res) => {
        // verifica se o id enviado no parametro já consta no bd
        const idItem = Number ( req.params.id )
        const item = Item.findById(idItem)
        
        //caso não exista um item no bd com o mesmo id, informa que id não existe
        if (!item) {
            return res.status(400).json({
                mensagem: `O id informado não existe`
            })
        }
        // verifica o index do item enviado como parametro no bd
        let index = itens.indexOf(item)
        // remove o item do bd
        itens.splice(index, 1)
        //informa que o item foi removido
        res.status(200).send(`Item de id ${index + 1} removido com sucesso`)
    }

    static alteraItem = (req, res) => {

        // retorna o item do bd que contém o id enviado como parâmetro
        const idItem = Number ( req.params.id )
        const item = Item.findById(idItem)
        
        //caso não exista um item no bd com o mesmo id, informa que não existe
        if (!item) {
            return res.status(400).json({
                mensagem: `O id informado não existe`
            })
        }

        //veririfica as keys originais do item e as keys enviadas
        const itemKeys = Object.keys( item )
        const bodykeys = Object.keys(req.body)
        const wrongKey = bodykeys.some( key => !itemKeys.includes(key) )

        //caso alguma key enviada seja incorreta, envia aviso
        if ( wrongKey ) {
           return res.status(400).json("Pedido inválido, as informações enviadas estão incorretas")     
        } 

        //atualiza item - para cada key enviada no body, substitui a mesma key no item já existente no bd
        for (let key in req.body)
        {
            item[key] = req.body[key]
        }
        //informa que o item foi atualizado e mostra a atualização
        res.status(200).json({
            mensagem: 'Item atualizado',
            item: item
        }) 
        
    }

}