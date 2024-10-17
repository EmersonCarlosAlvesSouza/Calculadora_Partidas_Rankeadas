const readline = require('readline');

// Configurando o readline para capturar a entrada do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o saldo de Rankeadas e retorna o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para determinar o nível baseado no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o saldo e o nível do jogador
    return { saldoVitorias, nivel };
}

// Captura as vitórias e derrotas do usuário
rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
    rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
        // Converte as entradas para números inteiros
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        // Chama a função para calcular o saldo e o nível
        let resultado = calcularNivel(vitorias, derrotas);

        // Exibe a mensagem com o saldo e o nível
        console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}.`);

        // Fecha o readline após a conclusão
        rl.close();
    });
});
