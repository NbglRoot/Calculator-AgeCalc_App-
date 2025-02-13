// set current user date
var currentDate = new Date();
var currentM;
if (currentDate.getMinutes() < 10) {
    currentM = "0" + currentDate.getMinutes();
}
else {
    currentM = currentDate.getMinutes();
}
document.querySelector("#userDate").textContent = "".concat(currentDate.getDate(), "/").concat(currentDate.getMonth() + 1, "/").concat(currentDate.getFullYear(), " | ").concat(currentDate.getHours(), ":").concat(currentM);
// calc inputs and options + screen display
var calcScreen = document.querySelector("#calc__res");
var calcInputs = document.querySelectorAll(".row > input");
var clearOptions = document.querySelectorAll(".clear__opt");
var inputShowResult = document.querySelector("#inputShowResult");
calcInputs.forEach(function (input) {
    input.addEventListener("click", function (e) {
        var target = e.target;
        toScreen(target.value);
    });
});
clearOptions.forEach(function (clear) {
    clear.addEventListener("click", function (e) {
        var target = e.target;
        clearCalc(target.value);
    });
});
inputShowResult.addEventListener("click", function (e) {
    showCalcDisplay();
});
function toScreen(input) {
    if (calcScreen.value === "0" || calcScreen.value === "Error") {
        calcScreen.value = input;
    }
    else {
        calcScreen.value += input;
    }
}
function clearCalc(input) {
    switch (input) {
        case "%":
            calcScreen.value = "0";
            break;
        case "CE":
            calcScreen.value = "";
            break;
        case "↩":
            calcScreen.value = calcScreen.value.slice(0, -2);
            break;
        default:
            break;
    }
}
function showCalcDisplay() {
    try {
        if (calcScreen.value != "") {
            console.log(eval(calcScreen.value));
            calcScreen.value = eval(calcScreen.value);
        }
    }
    catch (error) {
        calcScreen.value = "Error";
    }
}
