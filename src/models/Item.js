import itens from '../../bdprojeto.js'

export default class Item
{
    
    //função para gerar ID aleatório
    static criaID(tipo, tamanho, cor, estoque) {
        let idCriado =
            tipo.toLowerCase().substring(0, 1)
            + tamanho.toLowerCase().substring(0, 1)
            + cor.toLowerCase().substring(0, 1)
            + estoque
        let num = 1
        while (itens.find(item => item.id === num+idCriado)) {
            num++
        }
        return num+idCriado
    }

    constructor(tipo, tamanho, cor, estoque){
        this.id = Item.criaID(tipo, tamanho, cor, estoque)
        this.tipo = tipo
        this.tamanho = tamanho
        this.cor = cor
        this.estoque = estoque
    }
}
