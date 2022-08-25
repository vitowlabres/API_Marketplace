import itens from '../../bdprojeto.js'
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
        itens.push(req.body);
        res.status(201).send(`Item do tipo ${req.body.tipo} adicionado ao marketplace no id ${req.body.id}`)
    }

    static removeItem = (req, res) => {
        let index = itens.findIndex(item => item.id == req.params.id)
        itens.splice(index, 1)
        res.status(200).send(`Item de id ${index + 1} removido com sucesso`)
    }

    static alteraItem = (req, res) => {
        let index = itens.findIndex(item => item.id == req.params.id)
        if (req.body.id!=="")
        itens[index].tipo = req.body.tipo;
        res.status(200).json(itens) 
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
