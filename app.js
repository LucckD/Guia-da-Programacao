//Area de variáveis. Explicação: nao estava sendo possível criar dentro das funções por um bug no MEU vscode. Já corrigi, mas fiquei com preguiça de refazer.
const textoArea = document.getElementById('resultArea');
const textoFront = document.getElementById('resultFront');
const textoBack = document.getElementById('resultBack');
const textoEspec = document.getElementById('resultEspecializar');
const resultado = document.querySelector('#resultFinal');
let campo = document.querySelector('input');
let listaTecnologias = [];
const apenasLetras = /^[^\d]+$/ //permite apenas
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
    botao.style.backgroundColor = "#ff3300";
    botao.style.transform = "scale(1.15)";
    botao.disabled = true;
}

function lingFront(lang, botao) {
    if (lang === "Vue") {
        lingFront2.disabled = true;
        lingFront2.classList.add('disabled');
        textoFront.classList.remove('hidden');
        textoFront.innerHTML = "Vue? Que interessante!";
    } else {
        lingFront1.disabled = true;
        lingFront1.classList.add('disabled');
        textoFront.classList.remove('hidden');
        textoFront.innerHTML = "Com certeza é uma boa opção.";
    }
    document.querySelector('.especializacao').classList.remove('hidden');
    botao.style.backgroundColor = "#ff3300";
    botao.style.transform = "scale(1.15)";
    botao.disabled = true;
}

function lingBack(lang, botao) {
    if (lang === "C#") {
        lingBack2.disabled = true;
        lingBack2.classList.add('disabled');
        textoBack.classList.remove('hidden');
        textoBack.innerHTML = "É difícil, mas você consegue.";
    } else {
        lingBack1.disabled = true;
        lingBack1.classList.add('disabled');
        textoBack.classList.remove('hidden');
        textoBack.innerHTML = "Java? Ok, isso é maneiro!";
    }
    document.querySelector('.especializacao').classList.remove('hidden');
    botao.style.backgroundColor = "#ff3300";
    botao.style.transform = "scale(1.15)";
    botao.disabled = true;
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
    botao.style.backgroundColor = "#ff3300";
    botao.style.transform = "scale(1.15)";
    botao.disabled = true;
}

function limparCampo() {
    campo.value = '';
    campo.focus();
}

// Função para inserir tecnologias na área de resultados
function inserirTecnologias(){
    resultado.innerHTML = '';
    if (listaTecnologias.length === 0){
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


// 
function enviar() {
    // Verificação básica
    inputTexto = campo.value.trim();
    if (inputTexto.length === 0) {
        alert('Insira algo.')
    } else if (!apenasLetras.test(inputTexto)) {
        alert('Por favor, insira apenas letras.')
    } else {
        // Adiciona a tecnologia à lista
        listaTecnologias.push(inputTexto);
        inserirTecnologias();
        limparCampo();
    }
}

/*
Futuras Melhorias:

Trocar as fontes dos textos;
Polir o código;
Unir as funções lingFront e lingBack;
Adicionar verificação de tecnologia repetida;
Adicionar loop para que seja possível adicionar apenas três tecnologias;
Adicionar interação com as 3 tecnologias descritas;
Remover os comentários;
Fazer o Git Oficial;
*/
