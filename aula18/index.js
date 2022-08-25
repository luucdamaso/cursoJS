const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Damaso',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

/*
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa ('Maria', 'Oliveira', 32);

console.log(pessoa1.nome, pessoa1.sobrenome);
*/