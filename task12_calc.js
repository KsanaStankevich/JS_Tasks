// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {

    read() {
        this.a = +prompt('Введите первое число');
        this.b = +prompt('Введите второе число');
    },

    sum() {
        return (this.a + this.b);
    },

    mul() {
        return (this.a * this.b);
    }

  };
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };