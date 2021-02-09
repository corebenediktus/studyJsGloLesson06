'use strict'

const game = function() {
    
    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }      
    const secretNumber = getRandomNum(1, 100);   


    const start = function () {
        let userNumber = prompt('Угадай случайное число от 1 до 100');
        let correctUserNumber = Number(userNumber)                      
    
        const isNumber = function(n) {         
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        if (userNumber==null) {
            alert('игра окончена, го еще');
            game();
        } else {
            if (isNumber(correctUserNumber)) {                     
                
                if (correctUserNumber==secretNumber) {
                    alert('Угадал, го еще!');
                    game();

                } else if (correctUserNumber>secretNumber) {
                    alert('Загадонное число меньше');
                    start();

                } else if (correctUserNumber<secretNumber) {
                    alert('Загадонное число больше');
                    start();
                }                
            } else {
                alert('введи целое число!');
                start();
            }
        }
    }
    start();
}
game();