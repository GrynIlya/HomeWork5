'use strict';

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

console.log(validatePassword (password));
