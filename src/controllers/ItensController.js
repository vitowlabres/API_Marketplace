import Item from '../models/Item.js'


export default class ItensController
{
    static listaItens = (req, res) => {
    
        return res.status(200).json(Item.filterParam(req.query))

    }

    static buscaItem = (req, res) => {
        
        if (!Item.findById(req.params.id)){
            res.status(400).json({
                mensagem: "O id informado não existe"
            });
        } else {
            res.status(200).json(Item.findById(req.params.id));
        }
    }

    static adicionaItem = (req, res) => {
        
        return (Item.addItem(req, res))
    
    }

    static removeItem = (req, res) => {

        if (Item.confereBD(req) === false) {
            return res.status(400).json({
                mensagem: `O item informado não existe`
            })
        } else { 
            return res.status(200).json(Item.deleteItem(req))
        }
    }

    static alteraItem = (req, res) => {

        //confere se o item informado existe
        if (Item.confereBD(req) === false) {
            return res.status(400).json({
                mensagem: `O item informado não existe`
            })
        }
        //se existe, confere se os campos enviados são campos válidos
        else if (Item.keysReais(req) === false) {
            return res.status(400).json({
                mensagem: "Pedido inválido, as informações enviadas estão incorretas"
            })     
        }
        //se são válidos, segue a atualização
        else {
            //atualiza todos os campos informados
            Item.altera(req)
            //retorna informando sucesso e o item atualizado
            return res.status(200).json({
                mensagem: 'Item atualizado',
                item: Item.findById(req.params.id)
            }) 
        }
        
    }

}