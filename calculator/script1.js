(function(){
    document.onkeydown = checkKey;

    let result, operand = '',operandNumber, functionKey;
    function $(name){
        return document.getElementsByClassName(name);
    }

    let digitsArray = Array.from($("digit"));
   
    for(let i=0;i<digitsArray.length;i++){
        digitsArray[i].addEventListener("click",function(){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            display(digitsArray[i]);
            operand += digitsArray[i].innerHTML;
        })
    }

    $("plus")[0].addEventListener("click",plus); 

    function plus(){
        if(result!==undefined){
            equals();
        }
        result = Number(operand);
        operand = '';
        functionKey = 1;
    }

    $("minus")[0].addEventListener("click",minus);

    function minus(){
        if(result!==undefined){
            equals();
        }
        result = Number(operand);
        operand = '';
        functionKey = 2;
    }

    $("times")[0].addEventListener("click",times);

    function times(){
        if(result!==undefined){
            equals();
        }
        result = Number(operand);
        operand = '';
        functionKey = 3;
    }

    $("divide")[0].addEventListener("click",divide);

    function divide(){
        if(result!==undefined){
            equals();
        }
        result = Number(operand);
        operand = '';
        functionKey = 4;
    }

    $("decimal")[0].addEventListener("click",decimal);

    function decimal(e){
        display(e.target);
        operand += '.';
    }

    $("equals")[0].addEventListener("click",equals);

    function equals(){
        if(functionKey===1){
            result = result + Number(operand);
            $("screen")[0].innerHTML = result;
        }
        else if(functionKey===2){
            result = result - Number(operand);
            $("screen")[0].innerHTML = result;
        }
        else if(functionKey===3){
            result = result * Number(operand);
            $("screen")[0].innerHTML = result;
        }
        else if(functionKey===4){
            if(Number(operand)===0){
                $("screen")[0].innerHTML = "Cannot divide by zero!";
                operand='';
                result = undefined;
            }
            else{
                result = result / Number(operand);
                $("screen")[0].innerHTML = result;
            }
        }
        operand = result;
        result = undefined;
    }

    function display(element){
        $("screen")[0].innerHTML += element.innerHTML;
    }

    $("remove")[0].addEventListener("click",clear);

    function clear(e){
        $("screen")[0].innerHTML = '';
        operand = '';
        result = 0;
    }

    function checkKey(e){
        e = e || window.event;
        if(e.keyCode===96){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '0';
            operand += 0;
        }
        else if(e.keyCode===97){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '1';
            operand += 1;
        }
        else if(e.keyCode===98){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '2';
            operand += 2;
        }
        else if(e.keyCode===99){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '3';
            operand += 3;
        }
        else if(e.keyCode===100){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '4';
            operand += 4;
        }
        else if(e.keyCode===101){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '5';
            operand += 5;
        }
        else if(e.keyCode===102){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '6';
            operand += 6;
        }
        else if(e.keyCode===103){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '7';
            operand += 7;
        }
        else if(e.keyCode===104){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '8';
            operand += 8;
        }
        else if(e.keyCode===105){
            if(operand===''){
                $("screen")[0].innerHTML = '';
            }
            $("screen")[0].innerHTML += '9';
            operand += 9;
        }
        else if(e.keyCode===107){
            plus();
        }
        else if(e.keyCode===109){
            minus();
        }
        else if(e.keyCode===106){
            times();
        }
        else if(e.keyCode===111){
            divide();       }
        else if(e.keyCode===13){
            console.log('*')
            equals();
        }
        else if(e.keyCode===110){
            $("screen")[0].innerHTML += '.';
            operand += '.';
        }
        else if(e.keyCode===46){
            clear();
        }
    }
})();