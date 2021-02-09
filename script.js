'use strict'



const game = function() {
    let userNumber = prompt('Угадай случайное число от 1 до 100');                
    
    let isNumber = function() {         
        return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
    }
    isNumber();
    console.log(isNumber());


    const start = function () {

        let secretNumber = function() {
            return Math.ceil(Math.random()*100);        
        }
        secretNumber();
        

        if (userNumber==null) {
            alert('игра окончена, го еще');
            game();
        } else {
            if (isNumber() != false) {
                let correctUserNumber = Number(userNumber);      
                
                if (correctUserNumber==secretNumber) {
                    console.log('norm');
                } else {
                    console.log('ne norm');
                                     
                    
                }
                
            } else {
                alert('введи целое число!');
            }
        }

    }
    start();
}
game();