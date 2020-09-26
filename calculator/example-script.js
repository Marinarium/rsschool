// class Calculator {
//   constructor(previousOperandTextElement, currentOperandTextElement) {
//     this.previousOperandTextElement = previousOperandTextElement;
//     this.currentOperandTextElement = currentOperandTextElement;
//     this.readyToReset = false;
//     this.clear();
//   }
//
//   clear() {
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operation = undefined;
//   }
//
//   delete() {
//     this.currentOperand = this.currentOperand.toString().slice(0, -1);
//   }
//
//   appendNumber(number) {
//     if (number === '.' && this.currentOperand.includes('.')) return;
//     this.currentOperand = this.currentOperand.toString() + number.toString();
//   }
//
//   chooseOperation(operation) {
//     if (this.currentOperand === '') return;
//     if (this.previousOperand !== '' && this.previousOperand !== '') {
//       this.compute();
//     }
//     this.operation = operation;
//     this.previousOperand = this.currentOperand;
//     this.currentOperand = '';
//   }
//
//   compute() {
//     let computation;
//     const prev = parseFloat(this.previousOperand);
//     const current = parseFloat(this.currentOperand);
//     if (isNaN(prev) || isNaN(current)) return;
//     switch (this.operation) {
//       case '+':
//         computation = prev + current;
//         break
//       case '-':
//         computation = prev - current;
//         break
//       case '*':
//         computation = prev * current;
//         break
//       case '÷':
//         computation = prev / current;
//         break
//       default:
//         return;
//     }
//     this.readyToReset = true;
//     this.currentOperand = computation;
//     this.operation = undefined;
//     this.previousOperand = '';
//   }
//
//   getDisplayNumber(number) {
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay
//     if (isNaN(integerDigits)) {
//       integerDisplay = ''
//     } else {
//       integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`
//     } else {
//       return integerDisplay
//     }
//   }
//
//   updateDisplay() {
//     this.currentOperandTextElement.innerText =
//       this.getDisplayNumber(this.currentOperand)
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//     } else {
//       this.previousOperandTextElement.innerText = ''
//     }
//   }
// }
//
//
// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]');
//
// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
//
// numberButtons.forEach(button => {
//     button.addEventListener("click", () => {
//
//         if (calculator.previousOperand === "" &&
//             calculator.currentOperand !== "" &&
//             calculator.readyToReset) {
//             calculator.currentOperand = "";
//             calculator.readyToReset = false;
//         }
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay();
//     })
// })
//
// operationButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.chooseOperation(button.innerText);
//     calculator.updateDisplay();
//   })
// })
//
// equalsButton.addEventListener('click', button => {
//   calculator.compute();
//   calculator.updateDisplay();
// })
//
// allClearButton.addEventListener('click', button => {
//   calculator.clear();
//   calculator.updateDisplay();
// })
//
// deleteButton.addEventListener('click', button => {
//   calculator.delete();
//   calculator.updateDisplay();
// })


//ВТОРОЙ СКРИПТ
// class Calculator {
//     constructor(previousNumberText, currentNumberText) {
//         this.previousNumberText = previousNumberText;
//         this.currentNumberText = currentNumberText;
//         this.clear(); // очищаем значения при создании калькулятора
//     }
//
//     //Очистить все значения
//     clear(){
//         this.currentNumber = '';
//         this.previousNumber = '';
//         this.operation = undefined;
//     }
//
//     //Удалить последнюю цифру
//     delete(){
//         this.currentNumber = this.currentNumber.toString().slice(0, -1);
//     }
//
//     //Добавить цифру к числу
//     addNumber(number){
//         if (number === '.' && this.currentNumber.includes('.')) return; //если уже есть точка - не добавлять
//         this.currentNumber = this.currentNumber.toString() + number.toString();
//     }
//
//     //Выбрать операцию
//     chooseOperation(operation){
//         if (this.currentNumber === '') return; //если нет текущего числа - отмена
//         if (this.previousNumber !== '') { //если в предыдущем числе что-то есть - считаем результат
//             this.total();
//         }
//         this.operation = operation;
//         this.previousNumber = this.currentNumber;//если произошло нажатие операции - текущее число добвляем в предыдущее
//         this.currentNumber = '';//если операция - очищаем текущее число
//     }
//
//     //Посчитать результат
//     total() {
//         let result;
//         const prev = parseFloat(this.previousNumber);//превращение строки в число
//         const current = parseFloat(this.currentNumber);
//         if(isNaN(prev) || isNaN(current))  return; // если нажать равно без чисел - отмена
//         switch (this.operation) {
//             case '+' :
//                 result = prev + current;
//                 break;
//             case '-' :
//                 result = prev - current;
//                 break;
//             case '*' :
//                 result = prev * current;
//                 break;
//             case '÷' :
//                 result = prev / current;
//                 break;
//             case '^' :
//                 result = Math.pow(prev, current);
//                 break;
//             case '√' :
//                 result = Math.sqrt(current);
//                 break;
//             default:
//                 return;
//         }
//
//         this.currentNumber = result;
//         this.operation = undefined;
//         this.previousNumber = '';
//     }
//
//     getDisplayNumber(number) {
//         const stringNumber = number.toString();
//         const integerDigits = parseFloat(stringNumber.split('.')[0]);
//         const decimalDigits = stringNumber.split('.')[1];
//         let integerDisplay;
//         if (isNaN(integerDigits)) {
//             integerDisplay = '';
//         } else {
//             integerDisplay = integerDigits.toLocaleString('ru', {
//                 maximumFractionDigits: 0
//             })
//         }
//         if(decimalDigits != null){
//             return `${integerDisplay}.${decimalDigits}`;
//         } else {
//             return integerDisplay;
//         }
//     }
//
//     //Обновить дисплей если своершна операция
//     updateDisplay() {
//         this.currentNumberText.innerText = this.getDisplayNumber(this.currentNumber);
//         if (this.operation != null) {
//             this.previousNumberText.innerText = `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`;
//         } else {
//             this.previousNumberText.innerText = '';
//         }
//     }
// }
//
// //Спсиок элементов из DOM
// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousNumberText = document.querySelector('[data-previous-number]');
// const currentNumberText = document.querySelector('[data-current-number]');
//
//
// //Создаем калькулятор
// const calculator = new Calculator(previousNumberText, currentNumberText);
//
// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.addNumber(button.innerText);//добавляем текст с нажатой кнопки
//         calculator.updateDisplay();//всякий раз при нажатии обновляем дисплей
//     });
// });
//
// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();
//     });
// });
//
// equalsButton.addEventListener('click', () => {
//     calculator.total();
//     calculator.updateDisplay();
// })
//
// allClearButton.addEventListener('click', () => {
//     calculator.clear();
//     calculator.updateDisplay();
// })
//
// deleteButton.addEventListener('click', () => {
//     calculator.delete();
//     calculator.updateDisplay();
// })



///Третий
// class Calculator {
//     constructor(previousNumberText, currentNumberText) {
//         this.previousNumberText = previousNumberText;
//         this.currentNumberText = currentNumberText;
//         this.clear(); // очищаем значения при создании калькулятора
//     }
//
//     //Очистить все значения
//     clear(){
//         this.currentNumber = '';
//         this.previousNumber = '';
//         this.operation = undefined;
//     }
//
//     //Удалить последнюю цифру
//     delete(){
//         this.currentNumber = this.currentNumber.toString().slice(0, -1);
//     }
//
//     //Добавить цифру к числу
//     addNumber(number){
//         if (number === '.' && this.currentNumber.includes('.')) return; //если уже есть точка - не добавлять
//         this.currentNumber = this.currentNumber.toString() + number.toString();
//     }
//
//     //Выбрать операцию
//     chooseOperation(operation){
//         if (this.currentNumber === '') return; //если нет текущего числа - отмена
//         if (this.previousNumber !== '') { //если в предыдущем числе что-то есть - считаем результат
//             this.total();
//         }
//         this.operation = operation;
//         this.previousNumber = this.currentNumber;//если произошло нажатие операции - текущее число добвляем в предыдущее
//         this.currentNumber = '';//если операция - очищаем текущее число
//     }
//
//     //Посчитать результат
//     total() {
//         let result;
//         const prev = parseFloat(this.previousNumber);//превращение строки в число
//         const current = parseFloat(this.currentNumber);
//         if(isNaN(prev) || isNaN(current))  return; // если нажать равно без чисел - отмена
//         switch (this.operation) {
//             case '+' :
//                 result = prev + current;
//                 break;
//             case '-' :
//                 result = prev - current;
//                 break;
//             case '*' :
//                 result = prev * current;
//                 break;
//             case '÷' :
//                 result = prev / current;
//                 break;
//             case '^' :
//                 result = Math.pow(prev, current);
//                 break;
//             case '√' :
//                 result = Math.sqrt(current);
//                 break;
//             default:
//                 return;
//         }
//
//         this.currentNumber = result;
//         this.operation = undefined;
//         this.previousNumber = '';
//     }
//
//     getDisplayNumber(number) {
//         const stringNumber = number.toString();
//         const integerDigits = parseFloat(stringNumber.split('.')[0]);
//         const decimalDigits = stringNumber.split('.')[1];
//         let integerDisplay;
//         if (isNaN(integerDigits)) {
//             integerDisplay = '';
//         } else {
//             integerDisplay = integerDigits.toLocaleString('ru', {
//                 maximumFractionDigits: 0
//             })
//         }
//         if(decimalDigits != null){
//             return `${integerDisplay}.${decimalDigits}`;
//         } else {
//             return integerDisplay;
//         }
//     }
//
//     //Обновить дисплей если своершна операция
//     updateDisplay() {
//         this.currentNumberText.innerText = this.getDisplayNumber(this.currentNumber);
//         if (this.operation != null && this.operation == '√') {
//             this.previousNumberText.innerText = `${this.getDisplayNumber(this.previousNumber)}`;
//             this.currentNumberText.innerText = `${this.operation} ${this.getDisplayNumber(this.currentNumber)}`;
//         } else if(this.operation != null) {
//             this.previousNumberText.innerText = `${this.getDisplayNumber(this.previousNumber)} ${this.operation}`;
//         } else {
//             this.previousNumberText.innerText = '';
//         }
//     }
// }
//
// //Спсиок элементов из DOM
// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousNumberText = document.querySelector('[data-previous-number]');
// const currentNumberText = document.querySelector('[data-current-number]');
//
//
// //Создаем калькулятор
// const calculator = new Calculator(previousNumberText, currentNumberText);
//
// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.addNumber(button.innerText);//добавляем текст с нажатой кнопки
//         calculator.updateDisplay();//всякий раз при нажатии обновляем дисплей
//     });
// });
//
// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.addNumber(button.innerText);//добавляем текст с нажатой кнопки
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();
//     });
// });
//
// equalsButton.addEventListener('click', () => {
//     calculator.total();
//     calculator.updateDisplay();
// })
//
// allClearButton.addEventListener('click', () => {
//     calculator.clear();
//     calculator.updateDisplay();
// })
//
// deleteButton.addEventListener('click', () => {
//     calculator.delete();
//     calculator.updateDisplay();
// })
