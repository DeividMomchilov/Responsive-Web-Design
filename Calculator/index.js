const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clear(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error!";
    }
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

// Keyboard support
window.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || ["+","-","*","/",".","(",")"].includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
        event.preventDefault();
    } else if (key === "Backspace") {
        backspace();
        event.preventDefault();
    } else if (key.toLowerCase() === "c") {
        clear();
        event.preventDefault();
    }
});