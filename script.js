'use strict';

let isNumber = function(data) {
    return !isNaN(parseInt(data)) && isFinite(data);
};

let guessNumber = function(x) {
    let randomNumber = Math.ceil(Math.random()*100);
    console.log(randomNumber);
    let count = 10;
    let checkNumber = function(string) {
        count--;
        let userNumber = prompt(string);
        if (userNumber === null) {
            alert('Игра окончена');
            return;
        }
        if (!isNumber(userNumber)) {
            checkNumber('Введи число!');
        } else if (userNumber < randomNumber) {
            if (count === 0) {
                if (confirm('Попытки закончились!!! Хотите сыграть еще?')) {
                    guessNumber();
                } else {
                    return;
                }
            } else {
                alert('Загаданное число больше, осталось ' + count  + ' попыток');
                checkNumber('Введи другое число');
            }
        } else if (userNumber > randomNumber) {
            if (count === 0) {
                if (confirm('Попытки закончились!!! Хотите сыграть еще?')) {
                    guessNumber();
                } else {
                    return;
                }
            } else {
                alert('Загаданное число меньше, осталось ' + count  + ' попыток');
                checkNumber('Введи другое число');
            }
        } else {
            if (confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?')) {
                guessNumber();
            } else {
                return;
            }
        }
    };
    
    checkNumber('Угадай число от 1 до 100');
};

guessNumber();