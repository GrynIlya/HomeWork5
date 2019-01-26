    'use strict';
    var result={};

    let password = prompt(`Введите ваш пароль:
        Ваш пароль должен отвечать следующим требованиям:
        1) Пароль должен содержать только буквенно-цифровые символы;
        2) Длина пароля долдна быть минимум 6 символов,но не менее 20;
        3) Пароль должен содержать буквы и цифры`, ``);

    console.log(password);

    function validatePassword(password) {

        if(password.length<6 || password.length>20) {
            return 'invalid';
        }

        let i;
        let letterAvailability;
        let numberAvailability;

        for(i=0;i<password.length;i++){
            let validateSymbol= password.charAt(i);
            if(('Z'>= validateSymbol && validateSymbol >= 'A') || ('z'>= validateSymbol && validateSymbol >= 'a')){
                letterAvailability = true;
            }else if('0' <= validateSymbol && validateSymbol <= '9'){
                numberAvailability = true;
            }else{
                return 'invalid';
            }
        }

        if(numberAvailability===true && letterAvailability===true){
            return 'valid';
        }else{
            return 'invalid';
        }
    }

    result.validate=validatePassword (password);

    if(result.validate=='invalid'){
        console.log('пароль не соответствует требованиям')
    }else{
        let number = prompt(`Введите число:         
       `, ``);

        console.log(number);

        checkNumber(number);
        result.userNumber=checkNumber(number);
    }

    function checkNumber(number) {
        let i;

        if(number >= 2){
            let check=true;
            for(i = 2;i < number;i++){
                if(number % i === 0){
                    check=false;
                }
            }
            if(check){
                return true;
            }
        }

        if (number % 2 == 0){
            return true;
        }

        if (number % 10 == 0){
            return true;
        }
        return false;
    }


    if(result.userNumber==true){
        let number1 = prompt(`Введите первое число:         
       `, ``);
        let number2 = prompt(`Введите второе число:         
       `, ``);
        getSum(number1,number2);
    }
    function getSum(number1,number2){

    let i;
    let arr=[];
    let maxLengs;
    let sum;

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
    arr.reverse();

        sum=arr.join('');
        console.log(sum);
        result.sumNumbers=sum;
    }

    console.log(result);