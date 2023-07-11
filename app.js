
function addition(num1, num2) {
    return Number(num1)+Number(num2);
}

function subtraction(num1, num2) {
    return Number(num1)-Number(num2);
}

function multiplication(num1, num2) {
    return Number(num1)*Number(num2);
}

function division(num1, num2) {
    return Number(num1)/Number(num2);
}

function operate(num1, operator, num2) {

    switch (operator) {

        case "+":
            return addition(num1, num2);
            break;

        case "-":
            return subtraction(num1, num2);
            break;

        case "x":
            return multiplication(num1, num2);
            break;

        case "/":
            return division(num1, num2);
            break;
    }
}

let num1 = "";
let operator = "";
let num2 = "";
let operatorClicked = false;

const screenContent = document.querySelector(".screen-content");

// misc buttons
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    num1 = "";
    operator = "";
    num2 = "";
    operatorClicked = false;
    screenContent.textContent = "";
});

const commaButton = document.querySelector(".dot-comma");
commaButton.addEventListener("click", () => {
    screenContent.textContent += ".";
    if (operatorClicked) {
        num2 += ".";
    }
});

// operator buttons

const additionButton = document.querySelector(".addition");
const subtractionButton = document.querySelector(".subtraction");
const multiplicationButton = document.querySelector(".multiplication");
const divisionButton = document.querySelector(".division");
const equalsButton = document.querySelector(".equals"); 

function handleOperatorClick(operatorSymbol) {
    
    return () => {
        operatorClicked = true;
        if (num1 === "") return;
        num1 = screenContent.textContent;
        operator = operatorSymbol;
        screenContent.textContent += operatorSymbol;
    }
}

additionButton.addEventListener("click", handleOperatorClick("+"));
subtractionButton.addEventListener("click", handleOperatorClick("-"));
multiplicationButton.addEventListener("click", handleOperatorClick("x"));
divisionButton.addEventListener("click", handleOperatorClick("/"));

equalsButton.addEventListener("click", () => {
    let result = operate(num1, operator, num2);
    screenContent.textContent = result;
    num1 = result;
    num2 = "";
});

// number buttons

const zeroButton = document.querySelector("#zero");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");

function handleNumberClick(number) { 
    return () => {

        if (!operatorClicked) {
            num1 += number.toString();

        } else {
            num2 += number.toString();
        }

        screenContent.textContent += number;
    }
}

zeroButton.addEventListener("click", handleNumberClick(0));
oneButton.addEventListener("click", handleNumberClick(1));
twoButton.addEventListener("click", handleNumberClick(2));
threeButton.addEventListener("click", handleNumberClick(3));
fourButton.addEventListener("click", handleNumberClick(4));
fiveButton.addEventListener("click", handleNumberClick(5));
sixButton.addEventListener("click", handleNumberClick(6));
sevenButton.addEventListener("click", handleNumberClick(7));
eightButton.addEventListener("click", handleNumberClick(8));
nineButton.addEventListener("click", handleNumberClick(9));

// bugs funnet hittil

