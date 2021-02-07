'use strict'

const game = function() {
    const userNumber = prompt('Угадай случайное число от 1 до 100');
    
    let isNumber = function(userNumber) {
        return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
    };
    
    if (isNumber(userNumber)==true) {
        const tryUserNumber = function() {
            let secretNumber = 50;
            
            if (userNumber!==null) {
                if (userNumber==secretNumber) {
                    alert('Ты угадал! попробуем снова?');
                    game();
                } else if (userNumber<50) {
                    alert('Загаданное число больше');
                    game();
                } else if (userNumber>50) {
                    alert('Загаданное число меньше');
                    game();
                }   
            } 
        }
        tryUserNumber();
    } else if  (userNumber==null) {
        alert('Игра окончена! Сыграем снова?');
        game();
    } else {
        alert('Введи число по условию');
        game();
    }
}
game();