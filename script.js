
function getAdd(a,b){
    return a+b
}
function  getSubtract(a,b){
    return a-b
}
function  getMultiply(a,b){
    return a*b
}
function  getDivide(a,b){
    return a/b
}

function operate(num1,num2,sign){
    let res
    if(sign==="+"){
        res=getAdd(num1,num2)

    }
    else if(sign==='-'){
        res=getSubtract(num1,num2)
    }
    else if(sign==='×'){
        res=getMultiply(num1,num2)
    }
    else if(sign==="÷"){
        res=getDivide(num1,num2)
    }
    return res
}
let firstNum=0
let secondNum=0


let sign=""
let res=null

const display=document.querySelector(".display")
const numbers=document.querySelectorAll(".keypad .number")

// add event to number 0-9
for(let i=0;i<numbers.length;i++){

    numbers[i].addEventListener('click' ,function (){
        if(res!==null){
            res=null
            display.innerHTML=''
        }

        if(sign==="") {

            firstNum = display.innerHTML += numbers[i].innerHTML
            firstNum=Number(firstNum)
            console.log(display.innerHTML)

        }
       else{
           secondNum = display.innerHTML += numbers[i].innerHTML
            secondNum=Number(secondNum)

        }
        // console.log(firstNum,secondNum)
    })
}
// add event to sign
const signs=document.querySelectorAll(".keypad .sign")

for(let i=0;i<signs.length;i++){
    signs[i].addEventListener('click',function (){
        sign=signs[i].innerHTML
        display.innerHTML=""

    })
}
// add event to equal
const equal=document.querySelector("#equal")
equal.addEventListener('click',function (){
     res=display.innerHTML=operate(firstNum,secondNum,sign)
    sign=""

    // console.log(firstNum)

})
//add event to AC clear
const clear=document.querySelector('#clear')
clear.addEventListener('click',function (){
    res=null
    display.innerHTML=''
    sign=''
})
//add event to negative sign
const negative=document.querySelector("#Negative")
negative.addEventListener('click',function (){
    if(res===null&&display.innerHTML!=='0'){
        display.innerHTML=Number(display.innerHTML)>0?'-'+display.innerHTML:display.innerHTML-'-'
    }
})