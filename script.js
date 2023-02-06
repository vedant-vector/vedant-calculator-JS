const buttonSelected = document.querySelectorAll(".clickBtn");
const inputDisplay = document.querySelector(".inputDisplay");
const equal = document.querySelector("#equalTo");
const clear = document.getElementById("clear");
const pie = document.getElementById("pie");
const euler = document.getElementById("euler");
const backSpace = document.getElementById("backSpace");
const square = document.getElementById("square");
const divideByX = document.getElementById("divideByX");
const modulus = document.getElementById("modulus");
const exp = document.getElementById("exp");
const mod = document.getElementById("mod");
const root = document.getElementById("root");
const factorial = document.getElementById("factorial");
const xToY = document.getElementById("xToY");
const tenToX = document.getElementById("tenToX");
const log = document.getElementById("log");
const ln = document.getElementById("ln");
const alternate = document.getElementById("alternate");

let sqr = 0;
let str = "";
let ans;
function cal() {}

for (let btn of buttonSelected) {
  btn.addEventListener("click", (e) => {
    const content = e.target.textContent;
    if (sqr == 1) {
      if (btn.matches(".printVal") !== true) {
        sqr = 0;
        ans = 1;
      } else {
        inputDisplay.value += content;
        str = str + content;
      }
    }
    if (ans == 1) {
      ans = Math.sqrt(str);
      //   inputDisplay.value = ans;
    }

    if (btn.textContent === "÷") {
      inputDisplay.value += "/";
    } else if (btn.textContent === "×") {
      inputDisplay.value += "*";
    } else if (btn.matches(".printVal") && sqr == 0) {
      inputDisplay.value += content;
    }
  });
}

function err() {
  inputDisplay.value = "ERROR";
}

equal.addEventListener("click", (e) => {
  try {
    //     let cnt =0;
    //     let str = "";
    //    for(let i =0;i<inputDisplay.value-1;i++){
    //     if(inputDisplay.value == "|"){
    //         str.append(inputDisplay[i+1])
    //     }
    //    }
    inputDisplay.value = ans;
    inputDisplay.value = eval(inputDisplay.value);
  } catch {
    inputDisplay.value = "ERROR ";
  }
});

clear.addEventListener("click", () => (inputDisplay.value = ""));
pie.addEventListener("click", () => (inputDisplay.value += Math.PI));
euler.addEventListener("click", () => (inputDisplay.value += Math.E));
backSpace.addEventListener(
  "click",
  () =>
    (inputDisplay.value = inputDisplay.value.slice(
      0,
      inputDisplay.value.length - 1
    ))
);

square.addEventListener("click", () => {
  try {
    let temp = eval(inputDisplay.value);
    inputDisplay.value = temp * temp;
  } catch {
    err();
  }
});

divideByX.addEventListener("click", () => {
  try {
    let temp = eval(inputDisplay.value);
    if (temp == 0) {
      inputDisplay.value = undefined;
    } else {
      inputDisplay.value = 1 / temp;
    }
  } catch {
    err();
  }
});

modulus.addEventListener("click", () => {
  try {
    let temp = eval(inputDisplay.value);
    inputDisplay.value = Math.abs(temp);
  } catch {
    err();
  }
});

exp.addEventListener("click", () => {
  try {
    let temp = eval(inputDisplay.value);
    inputDisplay.value = Math.exp(temp);
  } catch {
    err();
  }
});

mod.addEventListener("click", () => {
  inputDisplay.value += "%";
});

root.addEventListener("click", () => {
  inputDisplay.value += "2√";
  sqr++;
});
