const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) //Pra cada botão adiciona o filtrarLivros

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) //pega o id do botão que eu cliquei
    const categoria = elementoBtn.value //verifica a categoria do botão
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDispoibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDoslivrosnaTela(valorTotal)
    } 
}

function filtrarPorDispoibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function exibirValorTotalDoslivrosnaTela (valorTotal) {
    elemenntoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
} 