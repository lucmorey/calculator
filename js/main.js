var readout = document.querySelector('#readout')
var digits = document.querySelectorAll('digit')
var operators = document.querySelectorAll(".operators")
var equalsBtn = document.querySelector("#equals")
var clearBtn = document.querySelector("#clear")
var firstNumber = ''
var secondNumber = ''
var operator = ''
function evaluate (operation, firstNumber, secondNumber) {
switch(operation) {
    case '+':
        return firstNumber + secondNumber
    case '-':
        return firstNumber - secondNumber
    case '*':
        return firstNumber * secondNumber
    case '/':
        return firstNumber / secondNumber
    }
}

// for each digit, do a function
digits.forEach(function(btn) {
	// add an event listener to each button
	btn.addEventListener('click', function() {
        // 'this' is the button being clicked...
        readout.innerText+=this.innerText

	})
})

// a separate forEach for the operators
operators.forEach(function(btn) {
	btn.addEventListener('click', function() {
        if(firstNumber) {
		secondNumber = Number(readout.innerText)
		readout.innerText = evaluate(operator,firstNumber,secondNumber)
		// change this to store variables that you will eventually use when you click =
    }
    firstNumber = Number(readout.innerText)
    operator = this.innerText
    readout.innerText =''
})
})

equalsBtn.addEventListener('click', function() {
	secondNumber = Number(readout.innerText)
	readout.innerText = evaluate(operator, firstNumber, secondNumber)
})
clearBtn.addEventListener('click',function(){
firstNumber = ''
secondNumber = ''
operation = ''
readout.innerText = ''

})
