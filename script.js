/**
 * ECOSTORE TECH - Script de Protótipo
 * Responsável pela interatividade e lógica do programa de sustentabilidade.
 */

// --- VARIÁVEIS GLOBAIS ---
// Selecionando elementos do DOM para manipulação utilizando os novos IDs em português
const botaoCarrinho = document.getElementById('botao-carrinho');
const elementoContadorCarrinho = document.getElementById('contador-carrinho');
const btnVerificarHistorico = document.getElementById('btn-verificar-historico');
const btnReciclar = document.getElementById('btn-reciclar');
const campoSerial = document.getElementById('serial-produto');
const exibicaoResultado = document.getElementById('resultado-eco');

// Estado simulado do carrinho
let contagemItensCarrinho = 0;

// --- DADOS SIMULADOS (MOCK) ---
// Lista de IDs de produtos que foram "vendidos" pela loja para simular o histórico
const historicoPedidosValidos = ['ECO-12345', 'ECO-67890', 'ECO-TECH-01'];

// --- FUNÇÕES DE INTERAÇÃO ---

/**
 * Atualiza o contador visual do carrinho
 */
function atualizarCarrinho() {
    contagemItensCarrinho++;
    elementoContadorCarrinho.textContent = contagemItensCarrinho;
    alert('Produto adicionado ao carrinho!');
}

/**
 * Simula a verificação de um produto no banco de dados da loja
 */
function verificarHistoricoProduto() {
    const valorSerial = campoSerial.value.trim().toUpperCase();

    // Limpa classes anteriores de resultado
    exibicaoResultado.className = 'mensagem-resultado';

    if (valorSerial === "") {
        mostrarResultado("Por favor, insira um código de pedido ou número de série.", "erro");
        return;
    }

    // Lógica de verificação no histórico simulado
    if (historicoPedidosValidos.includes(valorSerial)) {
        mostrarResultado(`✅ Produto localizado! Como você é nosso cliente, você tem direito a <strong>20% de desconto</strong> no seu upgrade! Código do Cupom: ECOUPGRADE20`, "sucesso");
    } else {
        mostrarResultado("❌ Este produto não consta em nosso histórico de vendas. Mas você ainda pode ganhar desconto pelo descarte legal!", "erro");
    }
}

/**
 * Simula o processo de descarte legal para sustentabilidade
 */
function solicitarReciclagem() {
    // Limpa classes anteriores de resultado
    exibicaoResultado.className = 'mensagem-resultado';
    
    mostrarResultado(`🌱 Obrigado por ajudar o meio ambiente! Um código de logística reversa foi enviado para seu e-mail. Após o recebimento do produto, você ganhará um <strong>cupom de 5% de desconto</strong> para sua próxima compra.`, "sucesso");
}

/**
 * Exibe mensagens de feedback para o usuário na interface
 * @param {string} mensagem - Texto a ser exibido
 * @param {string} tipo - 'sucesso' ou 'erro'
 */
function mostrarResultado(mensagem, tipo) {
    exibicaoResultado.innerHTML = mensagem;
    // Adiciona a classe correspondente ao tipo de resultado (sucesso ou erro)
    exibicaoResultado.classList.add(tipo === "sucesso" ? "resultado-sucesso" : "resultado-erro");
}

// --- EVENT LISTENERS (OUVINTES DE EVENTOS) ---

// Adicionar evento aos botões de compra (usando delegação de eventos para eficiência)
document.addEventListener('click', (evento) => {
    // Verifica se o clique foi em um botão com a classe 'botao-adicionar'
    if (evento.target.classList.contains('botao-adicionar')) {
        atualizarCarrinho();
    }
});

// Evento para o botão de verificar histórico de compra
btnVerificarHistorico.addEventListener('click', verificarHistoricoProduto);

// Evento para o botão de solicitar descarte/reciclagem
btnReciclar.addEventListener('click', solicitarReciclagem);

// Atalho: Tecla Enter no campo de texto também dispara a verificação
campoSerial.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verificarHistoricoProduto();
    }
});

console.log("ECOSTORE TECH: Protótipo (Versão em Português) carregado com sucesso!");
