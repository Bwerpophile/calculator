let num1;
let num2;
let result;

const add = function (a, b) {
    return a + b;
  };

const subtract = function (a, b) {
    return a - b;
  };

const multiply = function (a, b) {
    return a * b;
  };

const divide = function(a,b) {
    return a / b;
  }

  
  for (let i = 9; i >= 0; i--) {
    const numbContainer = document.querySelector('.numb-container');
    const numberPad = document.createElement('button');
    const numberTxt = 0+i;
 
    numberPad.innerText = `${numberTxt}` ;
    numberPad.classList.add('pad-button');

    numbContainer.appendChild(numberPad);
  }

  let operate = function (fct, a, b) {
    return fct(a,b)
  }

  console.log(operate(add, 1,3));
  