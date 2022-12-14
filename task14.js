// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

let firstnum = parseInt(prompt('Введите первое число'));
let secondnum = parseInt(prompt('Введите второе число'));

alert (firstnum + secondnum);


// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
// В этом случае функция должна вернуть null.

function readNumber() {
    let num;

    do {
        num = prompt("Введите число");
      } while ( !isFinite(num) );

    if (num === null || num === '') return null;
    return +num;
}

alert(`Число: ${readNumber()}`);


// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525


// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5