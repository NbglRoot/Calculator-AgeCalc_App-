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

// age calc
const inputDate = document.querySelector("#inputDate") as HTMLInputElement;
inputDate.max = new Date().toISOString().split("T")[0]; // set range max to the input
const calcScreen = document.querySelector("#calc__res") as HTMLInputElement;
document.querySelector("#sentRequest")?.addEventListener("click", (e) => {
  displayInfo(inputDate.value);
});

function displayInfo(inputDate: string): void {
  const birthD: Date = new Date(inputDate);
  const currentD: Date = new Date();

  const bM = birthD.getMonth() + 1;
  const cM = currentD.getMonth() + 1;

  let calcY, calcM, calcD;
  calcY = currentD.getFullYear() - birthD.getFullYear();
  if (cM >= bM) {
    calcM = cM - bM;
  } else {
    calcY--;
    calcM = 12 + cM - bM;
  }
  if (currentD.getDate() >= birthD.getDate()) {
    calcD = currentD.getDate() - birthD.getDate();
  } else {
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
  calcScreen.value = `Tienes: ${calcY} Años, ${calcM} meses y ${calcD} Dias.`;
}
function DaysMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}
