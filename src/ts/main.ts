// set current user date
const currentDate: Date = new Date();
let currentM;
if (currentDate.getMinutes() < 10) {
  currentM = "0" + currentDate.getMinutes();
} else {
  currentM = currentDate.getMinutes();
}
document.querySelector("#userDate")!.textContent = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()} | ${currentDate.getHours()}:${currentM}`;

// calc inputs and options + screen display
const calcScreen = document.querySelector("#calc__res") as HTMLInputElement;
const calcInputs = document.querySelectorAll(
  ".row > input"
) as NodeListOf<HTMLInputElement>;
const clearOptions = document.querySelectorAll(
  ".clear__opt"
) as NodeListOf<HTMLInputElement>;
const inputShowResult = document.querySelector(
  "#inputShowResult"
) as HTMLInputElement;

calcInputs.forEach((input: HTMLInputElement) => {
  input.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    toScreen(target.value);
  });
});
clearOptions.forEach((clear: HTMLInputElement) => {
  clear.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    clearCalc(target.value);
  });
});
inputShowResult.addEventListener("click", (e) => {
  showCalcDisplay();
});

function toScreen(input: string) {
  if (calcScreen.value === "0" || calcScreen.value === "Error") {
    calcScreen.value = input;
  } else {
    calcScreen.value += input;
  }
}

function clearCalc(input: string) {
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
  } catch (error) {
    calcScreen.value = "Error";
  }
}
