function operate(num1, operator, num2) {

    switch (operator) {

        case "+":
            return Number(num1)+Number(num2);
            break;

        case "-":
            return Number(num1)-Number(num2);
            break;

        case "x":
            return Number(num1)*Number(num2);
            break;

        case "/":
            return Number(num1)/Number(num2);
            break;
    }
}

let num1 = "";
let operator = "";
let num2 = "";
const screenContent = document.querySelector(".screen-content");
let operatorClicked = false;

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

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", () => {

    if (num2.length !== 0) {
        num2 = num2.substring(0,num2.length-1);

    } else if (operatorClicked) {
        operator = "";
        operatorClicked = false;

    } else if (num1.length !== 0) {
        num1 = num1.substring(0,num1.length-1);
    }
    screenContent.textContent = screenContent.textContent.substring(0, screenContent.textContent.length-1);

});

// number and operator buttons (excluding equals button)
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {

    if (button.classList.contains("number-button")) {
        button.addEventListener("click", handleNumberClick(button.textContent))

    } else if (button.classList.contains("operator-button")) {
        button.addEventListener("click", handleOperatorClick(button.textContent));
    }
});

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

function handleOperatorClick(operatorSymbol) {
    
    return () => {

        if (operatorClicked) {
            // If two numbers and an operator already is in the screen, calculate that first
            // before adding the new operator to the result
            // example: 1+2+3 
            // when the user enters the new operator (+ between 2 and 3), the 1+2 will be calculated and 
            // result (3) shown on the screen with the + after it (3+). The user can then
            // enter 3 (screen will show 3+3) and get the final result (6). 
            equalsButton.click();
            
            // two operators cannot be adjacent
            const lastCharacter = screenContent.textContent.slice(-1);
            if (["+","-","x","/"].includes(lastCharacter)) {
                return;
            }
        }

        if (num1 === "") { // if an operator is clicked without a first number don't do anything...

            if (operatorSymbol === "-") { // except when you want the first number to be negative
                num1 += operatorSymbol;
                screenContent.textContent += operatorSymbol;
            }
            return;
        }

        operatorClicked = true;
        num1 = screenContent.textContent;
        operator = operatorSymbol;
        screenContent.textContent += operatorSymbol;
    }
}

// equals button
const equalsButton = document.querySelector(".equals"); 

equalsButton.addEventListener("click", () => {
    if (num1 === "" || num2 === "" || operator === "") return;
    let result = operate(num1, operator, num2);
    screenContent.textContent = result;
    num1 = result;
    num2 = "";
});