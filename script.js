'use strict'


const game = function() {
    let secretNumber = 50;
    let userNumber = prompt('Загадай случайное число от 1 до 100');

    const tryUserNumber = function() {
        let isNumber = function(userNumber) {
            return !isNaN(parseFloat(userNumber)) && isFinite(userNumber)
        };

        if (userNumber !== null) {
            let correctNumber=isNumber;
            if (correctNumber===secretNumber) {
                alert('Ты угадал число! Сыграем снова?');
                game();
            } else if (correctNumber<50) {
                alert('Не угадал, твое число меньше, попробуй еще!!');
                game();
            } else if (correctNumber>50) {
                alert('Не угадал, твое число больше, попробуй еще!!');
                game();
            }
        
    }
    tryUserNumber();



}       
game();


// let isNumber = function(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n)
// };

// проверить на соответствие числу
// проверить на соответствие нулю
// проверить на свопадение с загаданным числом
//     если отмена то закрыть
//     если угадал то победа + еще раз?