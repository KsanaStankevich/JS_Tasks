// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function minnumber(a, b) {
    return (a < b) ? a : b;  
}

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }