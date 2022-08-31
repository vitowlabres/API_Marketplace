const buttonMenu = document.querySelector('.button-menu')
const buttonFilter = document.querySelector('.button-filter')
const buttonSearch = document.querySelector('.button-search')
const selects = document.querySelectorAll('select')
const categoria = document.querySelector('.categoria')
const tipo = document.querySelector('.tipo')
const tamanho = document.querySelector('.tamanho')
const cor = document.querySelector('.cor')
const menu = document.querySelector('.menu')
const form = document.querySelector('.form')
const divItens = document.querySelector('.itens')


//FUNÇÕES:

async function listaTodos(filtro){
    divItens.innerHTML=``
    const conteudoTotal = await fetch(`http://localhost:3000/itens${filtro}`)
    const itens = await conteudoTotal.json()
    itens.map(item => {
        divItens.innerHTML = divItens.innerHTML +
        `<div class="item">
        <p class="item-texto"> Item:</p>
        <p class="item-categoria">Categoria: ${(item.categoria)}</p>
        <p class="item-tipo">Tipo: ${(item.tipo)}</p>
        <p class="item-tamanho">Tamanho: ${(item.tamanho)}</p>
        <p class="item-cor">Cor: ${(item.cor)}</p>
        <p class="item-valor">Preço: R$ ${(item.valor)/100}</p>
        <p class="item-estoque">Estoque: ${(item.estoque)}</p>
        <p class="item-id">ID: ${(item.id)}</p>
        </div>`
    })
    // console.log(`dados: ${JSON.stringify(dados[0].id)}`)
}

leFiltros()
listaTodos("")

//ver com o gabi se ele sabe pq esse console dura segundos
function leFiltros() {
    let filtro = "?"
    for (let select of selects) {
        if (select.value !== "") {
            
            if ((filtro).indexOf(`=`) >= 0) {
                    filtro = filtro + `&`
            }

            filtro = filtro + select.className + `=` + select.value
        }
    }
    return console.log(filtro)
    // listaTodos(filtro)
}

//EVENTOS:

//abre e fecha menu quando em mobile
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-style')
})

//abre e fecha filtros
buttonFilter.addEventListener('click', () => {
    form.classList.add('form-style')
})

//envia filtros
buttonSearch.addEventListener('click', () => {
    leFiltros()
    // form.classList.remove('form-style')
})

// //click botão todos os itens
// button.addEventListener('click', () => {
//     listaTodos("")
// })