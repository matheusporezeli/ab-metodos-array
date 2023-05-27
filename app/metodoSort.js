let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenasLivrosPorPreco)

function ordenasLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco) //Compara o preço de a e b e ordena do menor pro maior
    exibirOsLivrosNaTela(livrosOrdenados)
}