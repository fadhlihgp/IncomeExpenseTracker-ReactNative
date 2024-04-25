export function changeCurrencyFormat(currency , value) {
    let reverse = value.toString().split('').reverse().join(''),
        ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return `${currency} ` + ribuan;
}