'use strict';

let number = prompt(`Введите число:         
   `, ``);

console.log(number);
function checkNumber(number) {
    let i;
    let isPryme = true;
    let isEven = true;
    let isDividedTen = true;

    if(number >= 2){
        for(i = 2;i < number;i++){
            if(number % i === 0){
                isPryme = false;
            }
        }
    }else{
            isPryme = false;
    }


    if (number % 2 !== 0 || number == 0){
            isEven = false;
    }

    if (number % 10 !== 0 || number == 0){
            isDividedTen = false;
    }

    return [isPryme,isEven,isDividedTen];
}
console.log (checkNumber(number));

//если надо как на примере чтобы работало то просто комментим
// let number = prompt(`Введите число:
//    `, ``);
//
// console.log(number);
// и пишем число в console.log (checkNumber(-10));
