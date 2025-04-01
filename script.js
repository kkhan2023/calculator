// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
// add
// subtract
// multiply
// divide

const calculator = document.querySelector("#calculator")
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

let number1 = ""
let operator = ""
let number2 = ""
let decimal = ""

zero.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + "0" // Build number1 if operator isn't set
  } else {
    number2 = (number2 || "") + "0" // Build number2 if operator is set
  }
  updateDisplay()
})

one.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + "1" // Build number1 if operator isn't set
  } else {
    number2 = (number2 || "") + "1" // Build number2 if operator is set
  }
  updateDisplay()
})

two.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 2
  } else {
    number2 = (number2 || "") + 2
  }
  updateDisplay()
})

three.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 3
  } else {
    number2 = (number2 || "") + 3
  }
  updateDisplay()
})

four.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 4
  } else {
    number2 = (number2 || "") + 4
  }
  updateDisplay()
})

five.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 5
  } else {
    number2 = (number2 || "") + 5
  }
  updateDisplay()
})

six.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 6
  } else {
    number2 = (number2 || "") + 6
  }
  updateDisplay()
})

seven.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 7
  } else {
    number2 = (number2 || "") + 7
  }
  updateDisplay()
})

eight.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 8
  } else {
    number2 = (number2 || "") + 8
  }
  updateDisplay()
})

nine.addEventListener("click", (e) => {
  if (!operator) {
    number1 = (number1 || "") + 9
  } else {
    number2 = (number2 || "") + 9
  }
  updateDisplay()
})

dot.addEventListener("click", (e) => {})

addOperand.addEventListener("click", (e) => {
  if (!operator && number1) {
    operator = "+"
    updateDisplay()
  }
})

subtractOperand.addEventListener("click", (e) => {
  if (!operator && number1) {
    operator = "-"
    updateDisplay()
  }
})

multiplyOperand.addEventListener("click", (e) => {
  if (!operator && number1) {
    operator = "*"
    updateDisplay()
  }
})

divideOperand.addEventListener("click", (e) => {
  if (!operator && number1) {
    operator = "/"
    updateDisplay()
  }
})

equalsOperand.addEventListener("click", (e) => {
  if (number1 && operator && number2) {
    const result = operation(Number(number1), operator, Number(number2))
    clearDisplay()
    displayNumbers.textContent = result

    number1 = result.toString()
    number2 = ""
    operator = ""
  }
})

clear.addEventListener("click", () => {
  clearDisplay()
})

del.addEventListener("click", () => {
  deleteNumber()
})

function clearDisplay() {
  displayNumbers.textContent = `${(number1 = "")} ${(operator =
    "")} ${(number2 = "")}`
}

function deleteNumber() {
  if (number2) {
    number2 = number2.slice(0, -1)
  } else if (operator) {
    operator = operator.slice(0, -1)
  } else if (number1) {
    number1 = number1.slice(0, -1)
  }
  updateDisplay()
}

function updateDisplay() {
  displayNumbers.textContent = `${number1 || ""} ${operator || ""} ${
    number2 || ""
  }`
}

const add = (val1, val2) => {
  return val1 + val2
}

const subtract = (val1, val2) => {
  return val1 - val2
}

const multiply = (val1, val2) => {
  return val1 * val2
}

const divide = (val1, val2) => {
  return val1 / val2
}

const operation = (val1, operator, val2) => {
  if (operator === "+") {
    return add(val1, val2)
  } else if (operator === "-") {
    return subtract(val1, val2)
  } else if (operator === "*") {
    return multiply(val1, val2)
  } else if (operator === "/") {
    return divide(val1, val2)
  }
}
