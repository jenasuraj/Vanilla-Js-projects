let inputField = document.getElementById("value");
let expression = '';

function calc(value) {
    expression =expression+value;
    inputField.value = expression;
}

function calculateResult() {
    try {
        inputField.value = eval(expression);
    } 
    catch (error) {
        inputField.value = "Error";
    }
    expression = '';

}
function cal()
{
    inputField.value = 0;
}