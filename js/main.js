console.log('here')

var readout = document.querySelector('#readout')
var digits = document.querySelectorAll('.digit')

// for each digit, do a function
digits.forEach(function(btn) {
    // add an event listener to each button
    btn.addEventListener('click',function() {
        // 'this' is the button being clicked...
        console.log(this.innerText)
        readout.innerText += this.innerText
    })
})

var operators = document.querySelectorAll(".operators")
operators.forEach(function(btn) {
    btn.addEventListener('click',function() {
        readout.innerText += this.innerText
    })
})