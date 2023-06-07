
// Aqui eu seto que sempre vai ter que haver um zero a esquerda de uma unidade
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

// Função que formata a hora atual no padrão Brasileiro
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

// Aqui eu puxo a hora local com new Date()
const data = new Date();

// Crio uma contante onde eu coloco a data em tempo real que eu coloquei dentro da contante "data"
const dataBrasil = formataData(data);

// Chamo a contante que esta com a função 
console.log(dataBrasil);