function addDigit(num){
    if(result.innerHTML == "0"){
        result.innerHTML =  event.target.value;
    }
    else{
        result.innerHTML += event.target.value;
    }

    
}

function addDot(){

    if(!result.innerHTML.includes(".")){
        result.innerHTML += event.target.value;
    }
}

function plusminus(){
    result.innerHTML *= -1;
}

function clear(){
    result.innerHTML = "0";
}

function root(){
    let num = result.innerHTML;
    result.innerHTML = Math.sqrt(num);
}

let A=0;
let B=0;


function calculator(event){
    
    console.log(event)
    console.log(event.target)
    console.log(event.target.type)

    let uslovie = new RegExp(/\d/);
    if(uslovie.test(event.target.value)){
    
        addDigit()
    }

    switch(event.target.value){
        case "C":
            clear();
            break;
        case "sqrt":
            root();
            break;
        case "pm":
            plusminus()
            break;
        case ".":
            addDot()
            break;
    }

}

let classArr = document.getElementsByClassName("calc");
for(let i=0; i<classArr.length; i++){
    classArr[i].addEventListener("click", calculator)
}

function getRandomArbitrary(min, max) {
    result.innerHTML = Math.floor (Math.random() * (10000 - 1) + 1);
}



seven.addEventListener("click", addDigit)
eight.addEventListener("click", addDigit)
nine.addEventListener("click", addDigit)
four.addEventListener("click", addDigit)
five.addEventListener("click", addDigit)
six.addEventListener("click", addDigit)
one.addEventListener("click", addDigit)
two.addEventListener("click", addDigit)
three.addEventListener("click", addDigit)
zero.addEventListener("click", addDigit)
dot.addEventListener("click", addDot)
pm.addEventListener("click", plusminus)
clc.addEventListener("click", clear)
sqrt.addEventListener("click", root)
rnd.addEventListener("click", getRandomArbitrary)
//let arr = [1,2,3,324234,true]

//for(let i=0; i<arr.length; i++){
//   alert(arr[i])
//}

