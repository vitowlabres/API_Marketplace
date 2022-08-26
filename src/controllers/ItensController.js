import itens from '../../bd.js'
import Item from '../models/Item.js'


export default class ItensController
{
    static listaItens = (req, res) => {
        res.status(200).json(itens)
    }

    static buscaItem = (req, res) => {
        let index = itens.findIndex(item => item.id == req.params.id)
        res.status(200).json(itens[index]);
    }

    static adicionaItem = (req, res) => {
        
        //Define as variáveis conforme o pedido enviado
        const tipo = req.body.tipo
        const tamanho = req.body.tamanho
        const cor = req.body.cor
        const valor = req.body.valor
        const estoque = req.body.estoque
        
        //cria um novo item com as informações do pedido
        const novoItem = new Item(tipo, tamanho, cor, valor, estoque)
        
        //verifica se esse item já existe no banco de dados
        // if( itens.find(item => item.id == novoItem.id) === true)
        console.log(itens.find(item => {
            // console.log(item.id)
                // === novoItem.id
        }))
        // else
        //     ('não existe')
            itens.push(novoItem);
        // res.status(201).send(`Item do tipo ${tipo} adicionado ao marketplace no id ${novoItem.id}`)
        res.status(201).send(`a`)

    }

    static removeItem = (req, res) => {
        let index = itens.findIndex(item => item.id == req.params.id)
        itens.splice(index, 1)
        res.status(200).send(`Item de id ${index + 1} removido com sucesso`)
    }


    //verificar se o id existe
    //verificar se enviou alguma key que não é utilizada
    //verificar se possui pelo menos uma key, e alterar todas as que foram enviadas
    //usar o:
    // update(novasInfos)
    // {
    //     for (let campo in novasInfos) {
    //         if ( typeof)
    //       this[campo] = novasInfos.[campo]
    //     }
    // }

    static alteraItem = (req, res) => {

        // olhar todo o código que ele fez pra fazer esse
        // tentar usar o mesmo do object.keys(usuario) que ele usou
        const idItem = Number ( req.params.id )

        const item = Item.findById(idItem)
        
        if (!item) {
            return res.status(400).json({
                mensagem: `O item informado não existe`
            })
        }

        const itemKeys = Object.keys( item )
        const bodykeys = Object.keys(req.body)
        // console.log(Item.proximoID)
        console.log(`itemKeys: ${itemKeys}`)
        console.log(item)

        const wrongKey = itemKeys.some( key => !bodykeys.includes(key) )

        if ( wrongKey ) {
            res.status(400).json("Pedido inválido, as informações enviadas estão incorretas")     
        } 
        
        //atualiza item - para cada key do body, substitui a mesma key no item já existente no bd
        for (let key in req.body)
        {
            item[key] = req.body[key]
        }

        res.status(200).json("Item atualizado") 
        
    }

}


// app.get('/', (req, res) => {
//     res.status(200).send('Curso de Node');
// })

// app.put('/itens/:id', (req, res) => {
//     let index = buscaItem(req.params.id);
//     itens[index].titulo = req.body.titulo;
//     res.status(200).json(itens)
// })



// function buscaItem(id) {
//     return itens.findIndex(item => item.id == id)
// }
