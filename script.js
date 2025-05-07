// DOM elements & nodes selected
const calculator = document.querySelector("#calculator")
const display = document.querySelector("#display")
const displayNumbers = document.querySelector(".display-numbers")
const addOperand = document.querySelector("#add")
const subtractOperand = document.querySelector("#minus")
const multiplyOperand = document.querySelector("#multiply")
const divideOperand = document.querySelector("#divide")
const equalsOperand = document.querySelector("#equals")
const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const clear = document.querySelector("#clear")
const dot = document.querySelector("#dot")
const del = document.querySelector("#delete")

// Declared global variables
let displayVal = "0"
let number1 = ""
let operator = ""
let number2 = ""
let shouldResetDisplay = false

// Display 0 as the default number on the display
function displayValue() {
  displayNumbers.textContent = displayVal
}
displayValue()

// Helper function to reset the display
function resetDisplayIfNeeded() {
  if (shouldResetDisplay) {
    displayVal = "0"
    shouldResetDisplay = false
  }
}

// Click event listeners for number buttons
function handleNumberInput(num) {
  resetDisplayIfNeeded()

  if (!operator) {
    number1 += num
    displayVal = number1
  } else {
    number2 += num
    displayVal = number2
  }
  updateDisplay()
}

;[zero, one, two, three, four, five, six, seven, eight, nine].forEach(
  (btn, idx) => {
    btn.addEventListener("click", () => handleNumberInput(idx.toString()))
  }
)

dot.addEventListener("click", () => {
  resetDisplayIfNeeded()

  if (!operator && !number1.includes(".")) {
    number1 += "."
    displayVal = number1
  } else if (operator && !number2.includes(".")) {
    number2 += "."
    displayVal = number2
  }
  updateDisplay()
})

// Operand buttons
function handleOperatorInput(op) {
  if (number1 && number2) {
    number1 = operate(Number(number1), operator, Number(number2)).toString()
    number2 = ""
  }
  operator = op
  shouldResetDisplay = true
  updateDisplay()
}

addOperand.addEventListener("click", () => handleOperatorInput("+"))
subtractOperand.addEventListener("click", () => handleOperatorInput("-"))
multiplyOperand.addEventListener("click", () => handleOperatorInput("*"))
divideOperand.addEventListener("click", () => handleOperatorInput("/"))

// Equals button
equalsOperand.addEventListener("click", () => {
  if (!number1 || !operator || !number2) return

  const result = operate(Number(number1), operator, Number(number2))
  displayVal = result.toString()
  number1 = result.toString()
  operator = ""
  number2 = ""
  shouldResetDisplay = true
  updateDisplay()
})

// Clear button
clear.addEventListener("click", () => {
  displayVal = "0"
  number1 = ""
  operator = ""
  number2 = ""
  shouldResetDisplay = false
  updateDisplay()
})

// Delete button
function deleteLastInput() {
  resetDisplayIfNeeded()

  if (!operator) {
    number1 = number1.slice(0, -1)
    displayVal = number1 || "0"
  } else if (operator && !number2) {
    operator = ""
  } else {
    number2 = number2.slice(0, -1)
    displayVal = number2 || "0"
  }
  updateDisplay()
}

del.addEventListener("click", deleteLastInput)

// Update display
function updateDisplay() {
  displayNumbers.textContent =
    `${number1} ${operator} ${number2}`.trim() || displayVal
}

// Error handling for division by zero
function handleDivideByZero(val1, val2) {
  if (val1 === 0 && val2 === 0) return "Undefined"
  if (val2 === 0) return "Error: Division by 0"
  return val1 / val2
}

// Math operations
const add = (val1, val2) => val1 + val2
const subtract = (val1, val2) => val1 - val2
const multiply = (val1, val2) => val1 * val2
const divide = handleDivideByZero

function operate(val1, operator, val2) {
  switch (operator) {
    case "+":
      return add(val1, val2)
    case "-":
      return subtract(val1, val2)
    case "*":
      return multiply(val1, val2)
    case "/":
      return divide(val1, val2)
    default:
      return val1
  }
}

// Add keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key)) {
    handleNumberInput(e.key)
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    handleOperatorInput(e.key)
  } else if (e.key === "Enter" || e.key === "=") {
    equalsOperand.click()
  } else if (e.key === "Backspace") {
    deleteLastInput()
  } else if (e.key === "Escape") {
    clear.click()
  } else if (e.key === ".") {
    dot.click()
  }
})
