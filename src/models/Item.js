import itens from '../../bd.js'

export default class Item
{
    static proximoID = itens[itens.length-1].id
    static all = itens
    // //função para gerar ID aleatório
    // static criaID(tipo, tamanho, cor, estoque) {
    //     let idCriado =
    //         tipo.toLowerCase().substring(0, 1)
    //         + tamanho.toLowerCase().substring(0, 1)
    //         + cor.toLowerCase().substring(0, 1)
    //         + estoque
    //     let num = 1
    //     while (itens.find(item => item.id === num+idCriado)) {
    //         num++
    //     }
    //     return num+idCriado
    // }

    static findById( id )
    {
        const item = Item.all.find(produto => produto.id === id)
        
        if (item !== undefined) {
            return item
        } else {
            return null
        }
    }

    constructor(tipo, tamanho, cor, valor, estoque)
    {
        this.id = Item.proximoID++
        this.tipo = tipo
        this.tamanho = tamanho
        this.cor = cor
        this.valor = valor
        this.estoque = estoque
    }

    static update( body )
    {

    }

}
