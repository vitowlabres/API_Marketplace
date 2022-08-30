const button = document.querySelector('.button')
const menu = document.querySelector('.menu')
const main = document.querySelector('.main')

//FUNÇÕES:

async function atualizaPag(){
    main.innerHTML=``
    const conteudoTotal = await fetch('http://localhost:3000/itens')
    const itens = await conteudoTotal.json()
    itens.map(item => {
        main.innerHTML = main.innerHTML + 
        `<div class="item">
        <p class="texto"> Item:</p>
        <p class="categoria">${(item.categoria)}</p>
        <p class="tipo">${(item.tipo)}</p>
        <p class="tamanho">${(item.tamanho)}</p>
        <p class="cor">${(item.cor)}</p>
        <p class="valor">${(item.valor)}</p>
        <p class="estoque">${(item.estoque)}</p>
        <p class="id">id: ${(item.id)}</p>
        </div>`
    })
    // console.log(`dados: ${JSON.stringify(dados[0].id)}`)
}

atualizaPag()


//EVENTOS:

//abre e fecha menu quando em mobile
button.addEventListener('click', () => {
    menu.classList.toggle('menu-style')
})


