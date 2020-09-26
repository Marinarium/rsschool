class Calculator {
    constructor(previousNumberText, currentNumberText) {
        this.previousNumberText = previousNumberText;
        this.currentNumberText = currentNumberText;
        this.readyToReset = false;
        this.clear(); // очищаем значения при создании калькулятора
    }

    //Очистить все значения
    clear(){
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = undefined;
        this.readyToReset = false;
    }

    //Удалить последнюю цифру
    delete(){
        this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }

    //Добавить цифру к числу
    addNumber(number){
        if (number === '.' && this.currentNumber.includes('.')) return; //если уже есть точка - не добавлять
        this.currentNumber = this.currentNumber.toString() + number.toString();
    }

    changeSign() {
        this.currentNumber *= -1;
    }

    extractSquareRoot() {
        if (this.currentNumber < 0) {
            alert("Не-а :Р Ты не можешь возвести " + this.currentNumber + " в квадрат. Это отрицательное число, сделай с ним, что-нибудь другое:)");
            return;
        }
        this.currentNumber = Math.sqrt(this.currentNumber);
    }

    //Выбрать операцию
    chooseOperation(operation){
        if (this.currentNumber === '') return; //если нет текущего числа - отмена
        if (this.previousNumber !== '') { //если в предыдущем числе что-то есть - считаем результат
            this.total();
        }
        this.operation = operation;
        this.previousNumber = this.currentNumber;//если произошло нажатие операции - текущее число добвляем в предыдущее
        this.currentNumber = '';//если операция - очищаем текущее число
    }

    //Посчитать результат
    total() {
        let result;
        const q = this.previousNumber.length - 1;
        let multiplier = 1;
        for (let i = 1; i < q; i++){
            multiplier *= 10;
        }
        const prev = parseFloat(this.previousNumber);//превращение строки в число
        const current = parseFloat(this.currentNumber);
        if(isNaN(prev) || isNaN(current))  return; // если нажать равно без чисел - отмена
        switch (this.operation) {
            case '+' :
                result = ((prev * multiplier) + (current * multiplier)) / multiplier;
                break;
            case '-' :
                result = ((prev * multiplier) - (current * multiplier)) / multiplier;
                break;
            case '*' :
                result = parseFloat((prev * current).toFixed(12));
                break;
            case '÷' :
                result = prev / current;
                break;
            case '^' :
                result = Math.pow(prev, current);
                break;
            default:
                return;
        }

        this.readyToReset = true;
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

    //Обновить дисплей если своершна операция
    updateDisplay() {
        this.currentNumberText.innerText = this.getDisplayNumber(this.currentNumber);
        if (this.operation != null) {
            this.previousNumberText.innerText = `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`;
        } else {
            this.previousNumberText.innerText = '';
        }
    }
}

//Спсиок элементов из DOM
const numberButtons = document.querySelectorAll('[data-number]');
const signChangerButton = document.querySelector('[data-signchanger]');
const squareButton = document.querySelector('[data-square]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousNumberText = document.querySelector('[data-previous-number]');
const currentNumberText = document.querySelector('[data-current-number]');


//Создаем калькулятор
const calculator = new Calculator(previousNumberText, currentNumberText);

/*numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText);//добавляем текст с нажатой кнопки
        calculator.updateDisplay();//всякий раз при нажатии обновляем дисплей
    });
});*/

numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (calculator.previousNumber === "" && calculator.currentNumber !== "" && calculator.readyToReset) {
            calculator.currentNumber = "";
            calculator.readyToReset = false;
        }
        calculator.addNumber(button.innerText)
        calculator.updateDisplay();
    })
})

signChangerButton.addEventListener('click', (button) => {
    calculator.changeSign();
    calculator.updateDisplay();
});

squareButton.addEventListener('click', (button) => {
    calculator.extractSquareRoot();
    calculator.updateDisplay();
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