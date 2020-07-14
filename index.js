var myNum = document.querySelectorAll("#num");
var getInput = document.getElementById("input");
var clearInput = document.querySelectorAll("#clear");
var getOperators = document.querySelectorAll(".operator");
var showResult = document.getElementById("show-result");
var calculate = document.getElementById("calculate");
var operator;
var secondValue;
var firstValue ;
var operator;
var result = "";
calculator();

function calculator() {
  
  // GET NUMBER INPUT ///
  myNum.forEach(num => {
      num.addEventListener("click", function() {
        if (getInput.textContent === "0" || getInput.textContent === "/" || getInput.textContent === "%" || getInput.textContent === "x" ||getInput.textContent === "+" || getInput.textContent === "-") {
          getInput.textContent = num.innerHTML;
        } else {
          getInput.textContent += num.innerHTML;
        }
        showResult.textContent += num.innerHTML;
      });
  });

  // GET OPERATOR INPUT ///
  getOperators.forEach(el => {
      el.addEventListener("click", function () {
        firstNum = getInput.textContent;
        if(!firstNum.lastIndexOf(".")) {
          firstNum = getInput.textContent + "0";
          showResult.textContent += "0";
        }
        // if (operator.length > 1) {
        //   operator.length = 1; 
        // }
        getInput.textContent = el.innerHTML;
        operator = getInput.textContent;
        showResult.textContent += " " + el.innerHTML + " ";
     });
  });

  // CALCULATE USING THE EQUALS SIGN //////
  function calculateNum() {
    getSecondNum();
    if (operator === "+") {
      result = parseFloat(firstNum) + parseFloat(secondNum);
    } else  if (operator === "-") {
      result = parseFloat(firstNum) - parseFloat(secondNum);
    } else  if (operator === "x") {
      result = parseFloat(firstNum) * parseFloat(secondNum);
    } else  if (operator === "/") {
      result = parseFloat(firstNum) / parseFloat(secondNum);
    } else  if (operator === "%") {
      result = parseFloat(firstNum) % parseFloat(secondNum);
    }

    getInput.textContent = result;
    firstNum = result;
  }

  // GET SECOND NUMBER//////
 function getSecondNum() {
    if (getInput.textContent === "x" || getInput.textContent === "%" || getInput.textContent === "/" || getInput.textContent === "+" || getInput.textContent === "-") {
      secondNum = firstNum;
    } else {
      secondNum = getInput.textContent;
    }
    if(secondNum.includes(".")) {
      secondNum = getInput.textContent + "0";
      showResult.textContent += "0";
    }
}

  // CLEAR INPUT AND ANSWERS////
  function clearMyInput() {
    clearInput.forEach(clear => {
      clear.addEventListener("click", function () {
        if (clear.innerHTML === "AC") {
          getInput.textContent = "";
          showResult.textContent = "";

        } else if (clear.innerHTML === "CE") {
          getInput.length -1;
        }
    });
        
  });

  }

  clearMyInput();
  calculate.addEventListener("click", calculateNum);
}













// //GET NUMBER INPUT////
// myNum.forEach( function(e) {
//   e.addEventListener("click", function() {
//     if (getInput.innerHTML === "0" || getInput.innerHTML === "x" || getInput.innerHTML === "-" || getInput.innerHTML === "+" || getInput.innerHTML === "/" || getInput.innerHTML === "%") {
//       getInput.innerHTML = e.innerHTML;
//     } else {
//       getInput.innerHTML += e.innerHTML;
//     }
//     showResult.textContent += e.innerHTML;
//   });
// });

// //CLEAR INPUT USING AC////
// function clearMyInput() { 
//     getInput.textContent = 0;
//     showResult.textContent = "";
//   }

// // GET OPERATORS //
//   getOperators.forEach(el => {
//       el.addEventListener("click", function() {
//         if (el.innerHTML === "x" || el.innerHTML === "-" || el.innerHTML === "+" || el.innerHTML === "/" || el.innerHTML === "%") {
//            firstValue = getInput.textContent;
//          } 
//         getInput.innerHTML = el.innerHTML;
//         showResult.textContent += " " + el.innerHTML + " ";
//         operator = getInput.textContent
//       });
//   });

// // CALCULATE NUMBERS////
//   function calculateNum() {
//     secondValue = getInput.textContent;
//       if (operator === "x") {
//         result = parseFloat(firstValue) * parseFloat(secondValue);
//       } else if (operator === "+") {
//         result = parseFloat(firstValue) + parseFloat(secondValue);
//       } else if(operator === "-") {
//         result = parseFloat(firstValue) - parseFloat(secondValue);
//       } else if(operator === "/") {
//         result = parseFloat(firstValue) / parseFloat(secondValue);
//       } else if(operator === "%") {
//         result = parseFloat(firstValue) % parseFloat(secondValue);
//       }
//       getInput.textContent = result;
//   }



//   clearInput.addEventListener("click", clearMyInput);
//   calculate.addEventListener("click", calculateNum);
