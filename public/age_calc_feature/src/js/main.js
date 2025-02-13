var _a;
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
// age calc
var inputDate = document.querySelector("#inputDate");
inputDate.max = new Date().toISOString().split("T")[0]; // set range max to the input
var calcScreen = document.querySelector("#calc__res");
(_a = document.querySelector("#sentRequest")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    displayInfo(inputDate.value);
});
function displayInfo(inputDate) {
    var birthD = new Date(inputDate);
    var currentD = new Date();
    var bM = birthD.getMonth() + 1;
    var cM = currentD.getMonth() + 1;
    var calcY, calcM, calcD;
    calcY = currentD.getFullYear() - birthD.getFullYear();
    if (cM >= bM) {
        calcM = cM - bM;
    }
    else {
        calcY--;
        calcM = 12 + cM - bM;
    }
    if (currentD.getDate() >= birthD.getDate()) {
        calcD = currentD.getDate() - birthD.getDate();
    }
    else {
        calcM--;
        calcD =
            DaysMonth(birthD.getFullYear(), bM) +
                currentD.getDate() -
                birthD.getDate();
    }
    if (calcM < 0) {
        calcM = 11;
        calcY--;
    }
    calcScreen.value = "Tienes: ".concat(calcY, " A\u00F1os, ").concat(calcM, " meses y ").concat(calcD, " Dias.");
}
function DaysMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
