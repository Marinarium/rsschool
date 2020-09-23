class Calculator {
    constructor(previousNumberText, currentNumberText) {
        this.previousNumberText = previousNumberText;
        this.currentNumberText = currentNumberText;
        this.clear();
    }

    clear(){
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = undefined;
    }

    delete(){
        this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }

    addNumber(number){
        if (number === '.' && this.currentNumber.includes('.')) return;
        this.currentNumber = this.currentNumber.toString() + number.toString();
    }

    chooseOperation(operation){
        if (this.currentNumber === '') return;
        if (this.previousNumber !== '') {
            this.total();
        }
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }

    total() {
        let result;
        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);
        if(isNaN(prev) || isNaN(current))  return;
        switch (this.operation) {
            case '+' :
                result = prev + current;
                break;
            case '-' :
                result = prev - current;
                break;
            case '*' :
                result = prev * current;
                break;
            case '÷' :
                result = prev / current;
                break;
            default:
                return;
        }

        this.currentNumber = result;
        this.operation = undefined;
        this.previousNumber = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('ru', {
                maximumFractionDigits: 0
            })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentNumberText.innerText = this.getDisplayNumber(this.currentNumber);
        if (this.operation != null) {
            this.previousNumberText.innerText = `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`;
        } else {
            this.previousNumberText.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousNumberText = document.querySelector('[data-previous-number]');
const currentNumberText = document.querySelector('[data-current-number]');

const calculator = new Calculator(previousNumberText, currentNumberText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.total();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})
