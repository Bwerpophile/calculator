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
  
  const numbContainer = document.querySelector('.numb-container');
  const numberPads = [];

  /* CREATE THE DIGITS */
  for (let i = 9; i >= 0; i--) {
    const numbContainer = document.querySelector('.numb-container');
    const numberPad = document.createElement('button');
    const numberTxt = 0+i;
 
    numberPad.innerText = `${numberTxt}` ;
    numberPad.classList.add('pad-button');

    numbContainer.appendChild(numberPad);

    numberPads.push(numberPad);
  }
 

  let operate = function (fct, a, b) {
    return fct(a,b)
  }

  const screenText = document.querySelector('.screen-text');

  const addBtn = document.querySelector('.addition');

  addBtn.addEventListener('click', () => {
    return add;
  })

  const subtractBtn = document.querySelector('.subtract');

  subtractBtn.addEventListener('click', () => {
    return subtract;
  })


  const multiplyBtn = document.querySelector('.multiply');

  multiplyBtn.addEventListener('click', () => {
    return multiply ;
  })

  const divideBtn = document.querySelector('.divide');

  divideBtn.addEventListener('click', () => {
    return divide ;
  })

/* EventListner for digit to be display*/
  // num1 =  numbb;

  let arrNumb1 = [];
  let arrNumb2 = [];
 
 // let numbToInt = Number(numbSlice); 

  num1 = numberPads.map(button => {
    button.addEventListener('click',() => {
      btnChoose = button.innerText;
      arrNumb1.push(btnChoose);
      userEnter = parseInt(arrNumb1.join(""), 10);
      screenText.innerText = userEnter;
    });
  });

  num2 = numberPads.map(button => {
    button.addEventListener('click',() => {
      btnChoose = button.innerText;
      arrNumb2.push(btnChoose);
      userEnter = parseInt(arrNumb2.join(""), 10);
      screenText.innerText = userEnter;
    });
  });

console.log(numb);

  console.log(operate(add, 1,3));



  