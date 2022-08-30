import itens from '../../bd.js'

export default class Item
{
    static all = itens

    static proximoID() {
        let maxID = 0
        //varre o bd e verifica qual o maior ID encontrado
        Item.all.map(item => {
            if (item.id > maxID)
                maxID = item.id
        })
        return maxID + 1
    } 

    static findById( id )
    {
        //procura no bd qual produto tem o id igual ao enviado no parametro
        const item = Item.all.find(produto => String(produto.id) === String(id))
        
        if (item !== undefined) {
            return item
        } else {
            return null
        }
    }

    constructor(categoria, tipo, tamanho, cor, valor, estoque)
    {
        this.id = Item.proximoID()
        this.categoria = categoria
        this.tipo = tipo
        this.tamanho = tamanho
        this.cor = cor
        this.valor = valor
        this.estoque = estoque
    }

    static filterParam(body) {
        
        const keys = Object.keys(body)
        // //para cada key enviada como parametro, vai adicionando um filtro ao bd, e devolve o array com o filtro  final
        const response = Item.all.filter((item) => keys.every((key) => String(item[key]).toLowerCase() === String(body[key]).toLowerCase()))
        
        return response
 
    }

    static addItem(req, res) {
            
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
        //verifica se o item já existe no bd
        if (Item.filterParam(req.body).length > 0) {
            return res.status(400).json("Esse item já existe")     
        }
        

        //cria um novo item com as informações do pedido
        const novoItem = new Item(rb.categoria, rb.tipo, rb.tamanho, rb.cor, rb.valor, rb.estoque)

        //adiciona o item ao bd
        itens.push(novoItem);

        //retorna o item que foi adicionado
        return res.status(201).send(`Item do tipo ${rb.tipo} adicionado ao marketplace no id ${novoItem.id}`)

    }

    static confereBD(req) {
        // verifica se o id enviado no parametro já consta no bd
        const idItem = Number(req.params.id)
        const item = Item.findById(idItem)
        
        //caso não exista um item no bd com o mesmo id, informa que id não existe
        if (!item) {
            return false
        } else {
            return true
        }
    }

    //verifica se as keys enviadas no body existem
    static keysReais(req) {

        // retorna o item do bd que contém o id enviado como parâmetro
        const idItem = Number ( req.params.id )
        const item = Item.findById(idItem)

        //veririfica as keys originais do item e as keys enviadas
        const itemKeys = Object.keys( item )
        const bodykeys = Object.keys(req.body)
        const wrongKey = bodykeys.some(key => !itemKeys.includes(key))
        
        if ( wrongKey ) {
            return false
        } else {
            return true
        }

    }

    static altera(req) {
    
        // retorna o item do bd que contém o id enviado como parâmetro
        const idItem = Number ( req.params.id )
        const item = Item.findById(idItem)
    
        //atualiza item - para cada key enviada no body, substitui a mesma key no item já existente no bd
        for (let key in req.body)
        {
            item[key] = req.body[key]
        }        

    }

    static deleteItem(req) {
            // verifica se o id enviado no parametro já consta no bd
            const idItem = Number(req.params.id)
            const item = Item.findById(idItem)
 
            // verifica o index do item enviado como parametro no bd
            let index = itens.indexOf(item)
        
            // remove o item do bd
            itens.splice(index, 1)
        
            //informa que o item foi removido
            return (`Item de id ${index + 1} removido com sucesso`)
    }

}
