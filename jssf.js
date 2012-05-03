/* Проверка на число */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/* Проверка на объект */
function isObject(n) {
    return typeof(n) == 'Object';
}

function alarm()
{
    alert('O_O');
}