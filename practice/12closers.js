function printFullName(firstName, lastName){

    function print(){
        console.log(firstName, lastName);
    }

    return print;
}

const temp = printFullName("john", "deep")

temp()

function outer(power){
    function inner(value){
        return value ** power;
    }
    return inner
}

const Power = outer(2)
const Value = Power(3)
console.log(Value)

function func(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi You Called me");
            counter++;
        }else{
            console.log("Mai already ek bar call ho chuka hoon!");
        }
    }
}

const myFunc = func();
myFunc();

myFunc();