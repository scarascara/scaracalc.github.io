const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function percentage(input) {    
    display.value /= 100;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function bracket(input) {
    if (input === "(") {
        display.value += "(";
    } else if (input === ")") {
        display.value += ")";
    }
}

function sin(){
    display.value= display.value * (Math.PI/180)
    display.value= Math.sin(display.value);
}

function cos(){
    display.value= display.value * (Math.PI/180)
    display.value= Math.cos(display.value);
}

function tan(){
    display.value= display.value * (Math.PI/180)
    display.value= Math.tan(display.value);
}

function square(){
    display.value *= display.value;
}
