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

const MC = document.getElementById("MC").disabled=true;
const MR = document.getElementById("MR").disabled=true;

const mPlus = document.getElementById("mPlus")
const mMinus = document.getElementById("mMinus")
const MS = document.getElementById("MS")



let sqr = 0;
let str = "";
let ans;
let flag = 0;

function cal() {}

for (let btn of buttonSelected) {
  btn.addEventListener("click", (e) => {
    const content = e.target.textContent;
    if (sqr == 1) {
      if (btn.matches(".printVal") !== true || btn.matches(".op") == true) {
        sqr = 0;
        ans = 1;
      } else {
        inputDisplay.value += content;
        str = content;
      }
    }
    if (ans == 1) {
      ans = Math.sqrt(str);
      let temp = inputDisplay.value;
      console.log(temp);
      temp = inputDisplay.value.replace("2√" + str, ans);
      console.log(temp);
      inputDisplay.value = temp;
      flag = 1;
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
    if (flag == 1) {
      inputDisplay.value = eval(inputDisplay.value);
    } else {
      inputDisplay.value = eval(inputDisplay.value);
    }
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

factorial.addEventListener("click", () => {
  try {
    let temp = eval(inputDisplay.value);
    if (temp < 0) {
      err();
    } else if (temp === 0) {
      inputDisplay.value = "1";
    } else {
      let fact = 1;
      for (i = 1; i <= temp; i++) {
        fact *= i;
      }
      inputDisplay.value = fact;
    }
  } catch {
    err();
  }
});

xToY.addEventListener("click", () => {});

tenToX.addEventListener("click", () => {
  try {
    inputDisplay.value += "10**";
  } catch {
    err();
  }
});

log.addEventListener("click", () => {
  try {
    inputDisplay.value += "log";
  } catch {
    err();
  }
});


mPlus.addEventListener("click",()=>{
  document.getElementById("MC").disabled = false;
  document.getElementById("MR").disabled = false;
})
mMinus.addEventListener("click",()=>{
  document.getElementById("MC").disabled = false;
  document.getElementById("MR").disabled = false;
})


// sin.addEventListener("click",(e)=>{
//   try{
//     inputDisplay.value+= "e.target.textContent";
//   }catch{
//     err();
//   }
// })