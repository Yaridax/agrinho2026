// Função para o Simulador Interativo de Economia Solar
function calcularEconomia() {
    // Captura o valor digitado pelo usuário
    const valorContaInput = document.getElementById('conta-luz').value;
    const valorConta = parseFloat(valorContaInput);

    // Validação simples para conferir se o número é válido
    if (isNaN(valorConta) || valorConta <= 0) {
        alert("Por favor, insira um valor válido maior do que zero.");
        return;
    }

    // Lógica matemática simples e educativa sobre o impacto
    // 1. Uma fazenda com energia solar economiza cerca de 90% da conta por mês
    const economiaMensal = valorConta * 0.90;
    const economiaAnual = economiaMensal * 12;

    // 2. Cálculo ecológico hipotético: A cada R$100 economizados na conta limpa, 
    // evita-se em média o equivalente a emissão de CO2 que 2 árvores absorveriam, 
    // e evita cerca de 15kg de CO2 na atmosfera.
    const arvoresSalvas = Math.round((economiaAnual / 100) * 2);
    const co2Evitado = Math.round((economiaAnual / 100) * 15);

    // Exibe a caixa de resultados alterando a classe CSS (retirando o 'hidden')
    const resultadoBox = document.getElementById('resultado');
    resultadoBox.classList.remove('hidden');

    // Insere os valores calculados formatados na tela
    document.getElementById('economia-anual').innerText = `R$ ${economiaAnual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById('arvores').innerText = `${arvoresSalvas} árvores`;
    document.getElementById('carbono').innerText = `${co2Evitado} kg`;

    // Rola a tela suavemente até o resultado para melhorar a experiência em celulares
    resultadoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}