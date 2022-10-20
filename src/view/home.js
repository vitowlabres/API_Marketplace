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

async function preencheItens(filtro){
    //pega todos os itens conforme filtro
    const itens = await listaTodos(filtro)

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
}

async function listaTodos(filtro){
    if (filtro===undefined) filtro = ""
    divItens.innerHTML=``
    const conteudoTotal = await fetch(`http://localhost:3000/itens${filtro}`)
    return await conteudoTotal.json()
}

//preenche os options
async function preencheOptions(filtro){
    if (filtro===undefined) filtro = ""
    const itens = await listaTodos(filtro)
    itens.map(item => {
        selects.forEach(select =>{
            if (!select.innerHTML.includes(`<option>${item[select.className]}</option>`)){
                select.innerHTML = select.innerHTML +
                `<option>${item[select.className]}</option>`
            }               
            
        })
    
        
    })
}

//ver com o gabi se ele sabe pq esse console dura segundos
function leFiltros() {
    let filtro = "/?"
    for (let select of selects) {
        if (select.value !== "") {
            
            if ((filtro).indexOf(`=`) >= 0) filtro = filtro + `&`

            filtro = filtro + select.className + `=` + select.value
        }
    }
    return filtro
}

preencheItens("")
preencheOptions()
//EVENTOS:

//abre e fecha menu quando em mobile
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-style')
})

//abre e fecha filtros
buttonFilter.addEventListener('click', () => {
    form.classList.toggle('form-style')
})

//envia filtros
buttonSearch.addEventListener('click', () => {
    const filtro = leFiltros()
    preencheItens(filtro)
    form.classList.remove('form-style')
})