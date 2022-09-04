const buttonMenu = document.querySelector('.button-menu')
const buttonSend = document.querySelector('.button-form-send')
const menu = document.querySelector('.menu')
const formCategoria = document.querySelector('.categoria-form')
const formTipo = document.querySelector('.tipo-form')
const formTamanho = document.querySelector('.tamanho-form')
const formCor = document.querySelector('.cor-form')
const formValor = document.querySelector('.valor-form')
const formEstoque = document.querySelector('.estoque-form')
const formId = document.querySelector('.id-form')



//FUNÇÕES:
async function leForm(filtro, metodo) {
    if (filtro === undefined) filtro = ""
    
    let envio = {}
    if (formCategoria.value !== "") envio.categoria = formCategoria.value
    if (formTipo.value !== "") envio.tipo = formTipo.value
    if (formTamanho.value !== "") envio.tamanho = formTamanho.value
    if (formCor.value !== "") envio.cor = formCor.value
    if (formValor.value !== "") envio.valor = Number(formValor.value)
    if (formEstoque.value !== "") envio.estoque = Number(formEstoque.value)

    const settings = {
        method: metodo,
        body: JSON.stringify(envio),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const a = await fetch(`http://localhost:3000/itens${filtro}`,settings)
    console.log(await a.json())
}

//EVENTOS:

//abre e fecha menu quando em mobile
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-style')
})

buttonSend.addEventListener('click', () => {
    let action = document.querySelector('input[name="action"]:checked');
    if (action.value === 'add') {
        leForm('', 'POST')
    } else if (action.value === 'update') {
        leForm(`/${formId.value}`, 'PUT')
    } else if (action.value === 'delete') {
        leForm(`/${formId.value}`, 'DELETE')
    }
    
})