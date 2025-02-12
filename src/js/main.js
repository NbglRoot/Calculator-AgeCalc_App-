// set current user date
var currentDate = new Date();
document.querySelector("#userDate").textContent = "".concat(currentDate.getDate(), "/").concat(currentDate.getMonth() + 1, "/").concat(currentDate.getFullYear(), " ").concat(currentDate.getHours(), ":").concat(currentDate.getMinutes());
// calc inputs events
var calcScreen = document.querySelector("#calc__res");
var inputsCalc = document.querySelectorAll("input");
inputsCalc.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var target = e.target;
        if (calcScreen.innerText === "0" ||
            calcScreen.innerText === "Not Implemented") {
            calcScreen.innerText = "";
            calcScreen.innerText = target.value;
        }
        else {
            calcScreen.innerText += target.value;
        }
    });
});
// calc options
var options__calc = document.querySelectorAll(".option__calc");
options__calc.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        var target = e.target;
        switch (target.value) {
            case "%":
                calcScreen.innerText = "0";
                break;
            case "CE":
                calcScreen.innerText = "";
                break;
            case "C":
                calcScreen.innerText = "";
                break;
            case "↩":
                calcScreen.innerText = calcScreen.innerText.slice(0, -2);
                break;
            case "×":
            case "−":
            case "+":
            case "=":
                calcScreen.innerText = "Not Implemented";
                // mathOp();
                break;
            default:
                alert("Error of Aplication | 305 | Seek Medical Attention");
                break;
        }
    });
});
