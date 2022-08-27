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
        const item = Item.all.find(produto => produto.id === id)
        
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

    static filterParam(query) {
        
        const keys = Object.keys(query)
        let resultado = Item.all

        //para cada key enviada como parametro, vai adicionando um filtro ao bd, e devolve o array com o filtro  final
        for (const key in keys) {
            resultado = resultado.filter(i => (String(i[keys[key]]) === query[keys[key]]))
        }

        return resultado
 
    }

}
