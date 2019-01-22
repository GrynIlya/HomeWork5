'use strict';

let number1 = '11';
let number2 = '99999999';

let i;
let arr=[];
let maxLengs;

console.log('Узнаем сумму двух чисел ' + number1 + ' и ' + number2);

if(number1.length>number2.length){
    maxLengs=number1.length;
}else {
    maxLengs=number2.length;
}
console.log(maxLengs);

for(i = 0;i < maxLengs;i++){
    let numeral1=+number1.charAt(number1.length-i-1) || 0;
    let numeral2=+number2.charAt(number2.length-i-1) || 0;
    let bonus = arr[i] || 0;
    console.log(numeral1);
    console.log(numeral2);
    arr[i]=numeral1 + numeral2+ bonus;

    if(arr[i]>9){
        arr[i]=arr[i]-10;
        arr[i+1]=1;
    }


}
console.log(arr.reverse());

console.log(arr.join(''));
