let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

    function verificarConsole() {
        console.log('O botão foi clicado!')
}
    function verificarAlert() {
        console.log('Eu amo JS!')
    
}
    function exibirMensagem() {
    // Pergunta o nome de uma cidade do Brasil
        const cidade = prompt("Qual é o nome de uma cidade do Brasil?");
  
    // Verifica se o usuário inseriu um valor
        if (cidade) {
    // Exibe o alerta com a mensagem concatenada
    alert(`Estive em ${cidade} e lembrei de você.`);
        } else {
    alert("Você não informou nenhuma cidade!");
    }
}
    function somarNumeros() {
    // Solicita o primeiro número
        const num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    
    // Solicita o segundo número
        const num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    // Verifica se os dois valores são números válidos
        if (!isNaN(num1) && !isNaN(num2)) {
      // Calcula a soma e exibe o resultado
        const soma = num1 + num2;
      alert(`O resultado da soma é: ${soma}`);
        } else {
      // Alerta caso o usuário insira valores inválidos
      alert("Por favor, insira apenas números inteiros válidos.");
    }
}