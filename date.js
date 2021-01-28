
// Função formata n em 0n
const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    //Pega o horário atual
    const now = new Date();

    //Formate a data em dd/mm/aaaa e hh/mm/ss
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    document.getElementById('date').innerHTML = dataHora;
}, 1000);

