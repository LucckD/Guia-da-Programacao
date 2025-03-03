//Area de variáveis. Explicação: nao estava sendo possível criar dentro das funções por um bug no MEU vscode. Já corrigi, mas fiquei com preguiça de refazer.
const textoArea = document.getElementById('resultArea');
const textoFront = document.getElementById('resultFront');
const textoBack = document.getElementById('resultBack');
const textoEspec = document.getElementById('resultEspecializar');
const resultado = document.querySelector('#resultFinal');
let campo = document.querySelector('input');
let listaTecnologias = [];
const apenasLetras = /^[^\d]+$/ //permite apenas caracteres epeciais e letras.
//início botões
const frontBtn = document.querySelector('#frontBtn');
const backBtn = document.querySelector('#backBtn');
const lingFront1 = document.querySelector('#frontL1');
const lingFront2 = document.querySelector('#frontL2');
const lingBack1 = document.querySelector('#backL1');
const lingBack2 = document.querySelector('#backL2');
const espec = document.querySelector('#especializarBtn');
const fullstack = document.querySelector('#fullstackBtn');
//fechamento botões
//Final área de variáveis.

//estiliza o botão após o clique
function estilizarBotao(botao) {
    botao.style.backgroundColor = "#ff3300";
    botao.style.transform = "scale(1.15)";
    botao.disabled = true;
}

function escolhaArea(area, botao) {
    if (area === "Front-End") {
        document.querySelector('.front').classList.remove('hidden');
        backBtn.classList.add('disabled'); // Impossibilita de ciclar nos botões, adicionando a classe disabled juntamente com o css
        backBtn.disabled = true;
        textoArea.classList.remove('hidden');
        textoArea.innerHTML = "Parabéns por escolher o Front-End!";
    } else {
        document.querySelector('.back').classList.remove('hidden');
        document.querySelector('#frontBtn').disabled = true;
        frontBtn.classList.add('disabled');
        textoArea.classList.remove('hidden');
        textoArea.innerHTML = "Eu adoro Back-End!";
    }
    estilizarBotao(botao);
}

function escolherLinguagem(tipo, linguagem, botao) {

    let elemento, textoElemento, mensagem;

    if (tipo === 'Front') {
        //elemento vai receber o botao que NAO foi clicado.
        elemento = linguagem === 'Vue' ? lingFront2 : lingFront1;
        textoElemento = textoFront;
        mensagem = linguagem === 'Vue' ? "Vue? Que interessante!" : "Com certeza é uma boa opção.";
    } else {
        elemento = linguagem === 'C#' ? lingBack2 : lingBack1;
        textoElemento = textoBack;
        mensagem = linguagem === 'C#' ? "É difícil, mas você consegue." : "Java? Ok, isso é maneiro!";
    }

    elemento.disabled = true;
    elemento.classList.add('disabled');

    textoElemento.classList.remove('hidden');
    textoElemento.innerHTML = mensagem;
    document.querySelector('.especializacao').classList.remove('hidden');

    estilizarBotao(botao);
}

function spec(seg, botao) {
    if (seg === "Fullstack") {
        espec.disabled = true;
        espec.classList.add('disabled');
        textoEspec.classList.remove('hidden');
        textoEspec.innerHTML = "Maneiro! Eu também quero virar Full-Stack.";
    } else {
        fullstack.disabled = true;
        fullstack.classList.add('disabled');
        textoEspec.classList.remove('hidden');
        textoEspec.innerHTML = "Que legal! Espero que consiga se especializar.";
    }
    document.querySelector('.tecnologias').classList.remove('hidden');
    resultado.classList.remove('hidden');
    inserirTecnologias();
    estilizarBotao(botao);
}

function limparCampo() {
    campo.value = '';
    campo.focus();
}

// Função para inserir tecnologias na área de resultados
function inserirTecnologias() {
    resultado.innerHTML = '';
    if (listaTecnologias.length === 0) {
        resultado.innerHTML = "Nenhuma tecnologia adicionada.";
    } else {
        // Percorrer a lista e adicionar cada tecnologia na área de resultado
        listaTecnologias.forEach(tec => { // 'tec' representa cada item da lista
            let novaTec = document.createElement('div');
            novaTec.textContent = tec; // Define o texto como a tecnologia
            resultado.appendChild(novaTec);
        })
    }
}

function mostrarMensagemEspecial() {
    resultado.innerHTML += `<p class="mensagemEspecial">Que interessante as suas 3 tecnologias. Boa sorte!</p>`
}

function dispararConfete() {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    document.body.appendChild(confete);

    setTimeout(() => {
        confete.remove();
    }, 3000);
}

function enviar(botao) {
    // Verificação básica
    inputTexto = campo.value.trim();
    if (inputTexto.length === 0) {
        alert('Insira algo.')
    } else if (!apenasLetras.test(inputTexto)) {
        alert('Por favor, insira apenas letras.')
    } else if (listaTecnologias.includes(inputTexto)) {
        alert('Você já adicionou esta tecnologia. Por favor, insira uma diferente.');
        limparCampo();
    } else {
        // Adiciona a tecnologia à lista
        listaTecnologias.push(inputTexto);
        inserirTecnologias();
        limparCampo();

        if (listaTecnologias.length === 3) {
            mostrarMensagemEspecial();
            dispararConfete();
            campo.disabled = true;
            campo.classList.add('hidden');
            botao.classList.add('disabled');
            botao.disabled = true;
        }
    }
}