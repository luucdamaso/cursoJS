function getDayWeekText(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Digite um número valido (Entre 0 - 7)'
            return diaSemanaTexto;
    }

}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDayWeekText(diaSemana);

console.log(diaSemana, diaSemanaTexto);