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

}
