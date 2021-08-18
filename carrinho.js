var arrayCompras = [];
lerStorage()

gravar.addEventListener('click', function () {
    let compra = {
        item: item.value,
        quantidade: quantidade.value,
        valor: valor.value
    }

    arrayCompras.push(compra)
    string_json.value = JSON.stringify(arrayCompras)
    localStorage.setItem('produtos', JSON.stringify(arrayCompras))

    lerStorage()
})

remover.addEventListener('click', function () {
    localStorage.removeItem('js')
})

limpar.addEventListener('click', function () {
    localStorage.clear()
})

function lerStorage() {
    string_json.value = ''
    let produtos = [];
    var Total = 0;

    if (localStorage.hasOwnProperty('produtos')) {
        produtos = JSON.parse(localStorage.getItem('produtos'))
        produtos.forEach(produto => {
            string_json.value += 'Produtos: ' +  produto.item + ' - ' + ' Unidade: ' +  produto.quantidade + ' - ' + ' Total: ' + ( produto.valor * produto.quantidade) + '\n'
            
            Total += (produto.quantidade * produto.valor)
        })
    }

    

    desc.innerHTML = 'Compras (' + produtos.length + ') ' + ' - Valor Total:  ' + Total 
}
