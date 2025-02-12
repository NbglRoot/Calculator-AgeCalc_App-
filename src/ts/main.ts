// set current user date
const currentDate: Date = new Date();
document.querySelector("#userDate")!.textContent = `${currentDate.getDate()}/${
  currentDate.getMonth() + 1
}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

// calc inputs events
const calcScreen = document.querySelector("#calc__res") as HTMLParagraphElement;
const inputsCalc = document.querySelectorAll(
  "input"
) as NodeListOf<HTMLInputElement>;
inputsCalc.forEach((btn: HTMLInputElement) => {
  btn.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    if (
      calcScreen.innerText === "0" ||
      calcScreen.innerText === "Not Implemented"
    ) {
      calcScreen.innerText = "";
      calcScreen.innerText = target.value;
    } else {
      calcScreen.innerText += target.value;
    }
  });
});

// calc options
const options__calc = document.querySelectorAll(
  ".option__calc"
) as NodeListOf<HTMLInputElement>;
options__calc.forEach((btn: HTMLInputElement) => {
  btn.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    switch (target.value as string) {
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
