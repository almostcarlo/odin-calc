const calcButton = document.querySelectorAll('button');
let calcScreen = document.querySelector('.displayCont');
let calcAnsScreen = document.querySelector('.ansCont');
let operator = ['/','+','-','*'];

// console.log(calcButton);
calcButton.forEach(function(btn){
    
    btn.addEventListener('click', function(){
        if(btn.textContent == 'c'){
            calcScreen.textContent = ''; /* CLEAR SCREEN */
            calcAnsScreen.textContent = '';
            return;
        }

        if(btn.textContent == 'del'){
            calcScreen.textContent = calcScreen.textContent.slice(0, -1); /* DELETE LAST INPUT */
            return;
        }

        if(btn.textContent == '.' && calcScreen.textContent.indexOf(btn.textContent)>0){
            // console.log(btn.textContent+' exists');
            // console.log(calcScreen.textContent.indexOf(btn.textContent));
            return;
        }

        /* PROCESS OPERATION UPON CLICKING = */
        if(btn.textContent == '='){
            let num1;
            let num2;
            let thisOptr;
            operator.forEach(function(optr){
                if(calcScreen.textContent.indexOf(optr) > 0){
                    // console.log(operator);
                    //console.log(calcScreen.textContent.indexOf(optr));
                    // console.log(calcScreen.textContent.substring(0,calcScreen.textContent.indexOf(optr)));
                    // console.log(calcScreen.textContent.substr(calcScreen.textContent.indexOf(optr),1));
                    // console.log(calcScreen.textContent.substr(calcScreen.textContent.indexOf(optr)+1));
                    num1 = +calcScreen.textContent.substring(0,calcScreen.textContent.indexOf(optr));
                    thisOptr = calcScreen.textContent.substr(calcScreen.textContent.indexOf(optr),1);
                    num2 = +calcScreen.textContent.substr(calcScreen.textContent.indexOf(optr)+1);
                    // console.log(num1);
                }
            });
            /* DO MATH OPERATIONS HERE */
            // console.log(num1);
            calcAnsScreen.textContent = eval(num1+thisOptr+num2);
            return;

        }
        // if(operator.includes(btn.textContent)){
        //     console.log('operate here');
        // }

        // console.log(btn.textContent);
        calcScreen.textContent += btn.textContent;
    });
})

function add(addend1, addend2){
    return parseFloat(addend1)+parseFloat(addend2);
}

function subtract(minuend, subtrahend){
    return parseFloat(minuend) - parseFloat(subtrahend);
}

function multiply(multiplicand, multiplier){
    return parseFloat(multiplicand)*parseFloat(multiplier);
}

function divide(dividend, divisor){
    return parseFloat(dividend)/parseFloat(divisor);
}

// console.log(divide(1.02,2.75));
// let opopo = '223/90';
// console.log(opopo.indexOf('/'));
// console.log(opopo.substring(3,4));
// console.log(opopo.substr(3,1));