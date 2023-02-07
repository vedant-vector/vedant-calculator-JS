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

const DEG = document.getElementById("DEG");

const MC = (document.getElementById("MC").disabled = true);
const MR = (document.getElementById("MR").disabled = true);

const mPlus = document.getElementById("mPlus");
const mMinus = document.getElementById("mMinus");
const MS = document.getElementById("MS");

const change = document.getElementById("change");

const functions = document.getElementById("functions");
const trigonometry = document.getElementById("trigonometry");

const decimal = document.getElementById("decimal");
const deci = 0;



const pi = Math.PI;

let sqr = 0;
let str = "";
let ans;
let flag = 0;
let cnt = 0;
let logVar = 0;
let logans;
let logstr = "";
let logFlag = 0;

let lnVar = 0;


let trigo = 0;
let trigostr = "";
let trigoans;
let trigoFlag = 0;
let trigoVal;

let globeVal;

let DRbtn = "DEG";

decimal.addEventListener("click",()=>{
  
})

for (let btn of buttonSelected) {
  btn.addEventListener("click", (e) => {
    const content = e.target.textContent;

    
    


    if (trigo == 1) {
      if (btn.matches(".printVal") !== true || btn.matches(".op") == true) {
        // if (content == e){

        // }
        trigo = 0;
        trigoans = 1;
      } else {
        inputDisplay.value += content;
        trigostr += content;
      }
    }
    if (trigoans == 1) {
      if (trigoVal == "sin") {
        trigoans = Math.sin((trigostr * pi) / 180);
        if (DRbtn == "RAD") {
          trigoans = Math.sin(trigostr);
        }
      } else if (trigoVal == "cos") {
        trigoans = Math.cos((trigostr * pi) / 180);
        if (DRbtn == "RAD") {
          trigoans = Math.cos(trigostr);
        }
      } else {
        trigoans = Math.tan((trigostr * pi) / 180);
        if (DRbtn == "RAD") {
          trigoans = Math.tan(trigostr);
        }
      }

      let temp = inputDisplay.value;
      console.log(temp);
      temp = inputDisplay.value.replace(trigoVal + trigostr, trigoans);
      console.log(temp);
      inputDisplay.value = temp;
      trigoFlag = 1;
      trigostr = "";
      trigoans = "";
    }

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

    if (content.includes("e")) {
      logVar = 0;
      globeVal = Math.log(Math.E);
      flag = 2;
    }
    if (content.includes("Π")){
      logVar = 0;
      globeVal = Math.log(Math.PI);
      flag = 2;
    }

    if (logVar == 1) {
      if (btn.matches(".printVal") !== true || btn.matches(".op") == true) {
        logVar = 0;
        logans = 1;
      } else {
        inputDisplay.value += content;
        logstr += content;
      }
    }
    if (logans == 1) {
      if (lnVar == 1) {
        logans = Math.log(logstr);
        let temp = inputDisplay.value;
        temp = inputDisplay.value.replace("ln" + logstr, logans);
        inputDisplay.value = temp;
        logFlag = 1;
        logstr = "";
        logans = "";
        lnVar = 0;
      } else {
        logans = Math.log10(logstr);
        let temp = inputDisplay.value;
        temp = inputDisplay.value.replace("log" + logstr, logans);
        inputDisplay.value = temp;
        logFlag = 1;
        logstr = "";
        logans = "";
      }
    }

    if (btn.textContent === "÷") {
      inputDisplay.value += "/";
    } else if (btn.textContent === "×") {
      inputDisplay.value += "*";
    } else if (
      btn.matches(".printVal") &&
      sqr == 0 &&
      logVar == 0 &&
      trigo == 0 
    ) {
      inputDisplay.value += content;
      // if(content == "."){
      //   if(inputDisplay.value.includes("..")){
      //     deci++;
      //   }
      //   else{
      //     inputDisplay.value += content;
      //     deci = 1;
      //   }
      // }



      if (inputDisplay.value.includes("+-")) {
        // console.log(show[show.length - 2]);
        let arr = inputDisplay.value.split("");
        let long = arr.length - 2;
        let last = arr[arr.length - 1];
        arr.splice(long, 2, last);
        let str = arr.join("");
        inputDisplay.value = str;
      }
      if (inputDisplay.value.includes("-+")) {
        // console.log(show[show.length - 2]);
        let arr = inputDisplay.value.split("");
        let long = arr.length - 2;
        let last = arr[arr.length - 1];
        arr.splice(long, 2, last);
        let str = arr.join("");
        inputDisplay.value = str;
      }
      if (inputDisplay.value.includes("--")) {
        // console.log(show[show.length - 2]);
        let arr = inputDisplay.value.split("");
        let long = arr.length - 2;
        let last = arr[arr.length - 1];
        arr.splice(long, 2, last);
        let str = arr.join("");
        inputDisplay.value = str;
      }
      if (inputDisplay.value.includes("++")) {
        // console.log(show[show.length - 2]);
        let arr = inputDisplay.value.split("");
        let long = arr.length - 2;
        let last = arr[arr.length - 1];
        arr.splice(long, 2, last);
        let str = arr.join("");
        inputDisplay.value = str;
      }

      //else if (btn.matches(".op") && cnt == 1) {
      //   cnt = 0;

      // } else {
      // }
      //
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
    } else if (flag == 2) {
      inputDisplay.value = globeVal;
      flag = 0;
    } else {
      inputDisplay.value = eval(inputDisplay.value);
    }
  } catch {
    inputDisplay.value = "ERROR ";
  }
});

clear.addEventListener("click", () => (inputDisplay.value = ""));
pie.addEventListener("click", () => (inputDisplay.value += Math.PI));
euler.addEventListener("click", () => {
  // if (logVar == 1 || lnVar == 1) {
  //   inputDisplay.value += "( + Math.E + )";
  // } else {
  //   inputDisplay.value += Math.E;
  // }
  inputDisplay.value += Math.E;
});
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
    if (square.innerHTML.includes("2")) {
      let temp = eval(inputDisplay.value);
      inputDisplay.value = temp * temp;
    } else {
      let temp = eval(inputDisplay.value);
      inputDisplay.value = temp * temp * temp;
    }
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
    if (tenToX.innerHTML.includes("x<sup>10")) {
      inputDisplay.value += "**10";
    } else {
      inputDisplay.value += "10**";
    }
  } catch {
    err();
  }
});

log.addEventListener("click", () => {
  try {
    inputDisplay.value += "log";
    logVar++;
  } catch {
    err();
  }
});

ln.addEventListener("click", () => {
  try {
    inputDisplay.value += "ln";
    logVar = 1;
    lnVar = 1;
  } catch {
    err();
  }
});

// sin.addEventListener("click",(e)=>{
//   try{
//     inputDisplay.value+= "e.target.textContent";
//   }catch{
//     err();
//   }
// })

let toggleCounter = 0;
change.addEventListener("click", () => {
  try {
    if (toggleCounter == 0) {
      square.innerHTML = "x<sup>3</sup>";
      tenToX.innerHTML = "x<sup>10</sup>";
      toggleCounter = 1;
    } else {
      square.innerHTML = "x<sup>2</sup>";
      tenToX.innerHTML = "10<sup>x</sup>";
      toggleCounter = 0;
    }
  } catch {
    err();
  }
});

alternate.addEventListener("click", () => {
  try {
    let str = inputDisplay.value;
    if (str[0] == "-") {
      inputDisplay.value = str.slice(1);
    } else {
      inputDisplay.value = "-" + inputDisplay.value;
    }
  } catch {
    err();
  }
});

mPlus.addEventListener("click", () => {
  document.getElementById("MC").disabled = false;
  document.getElementById("MR").disabled = false;
  let temp = eval(inputDisplay.value);
  let MS = localStorage.getItem("key");

  localStorage.setItem("key", Number(MS) + Number(temp));
  inputDisplay.value = "";
});
mMinus.addEventListener("click", () => {
  document.getElementById("MC").disabled = false;
  document.getElementById("MR").disabled = false;
  let temp = eval(inputDisplay.value);
  let MS = localStorage.getItem("key");

  localStorage.setItem("key", Number(MS) - Number(temp));
  inputDisplay.value = "";
});

MS.addEventListener("click", () => {
  document.getElementById("MC").disabled = false;
  document.getElementById("MR").disabled = false;
  let temp = inputDisplay.value;
  localStorage.setItem("key", Number(temp));
  inputDisplay.value = "";
});
document.getElementById("MR").addEventListener("click", () => {
  inputDisplay.value = localStorage.getItem("key");
});

document.getElementById("MC").addEventListener("click", () => {
  inputDisplay.value = localStorage.removeItem("key");
  inputDisplay.value = "";
  document.getElementById("MC").disabled = true;
  document.getElementById("MR").disabled = true;
});

functions.addEventListener("change", () => {
  let temp;
  if (document.querySelector(".fun").value == "floor") {
    temp = eval(inputDisplay.value);

    inputDisplay.value = Math.floor(temp);
    this.selectedIndex = 0;
  } else if (document.querySelector(".fun").value == "cell") {
    temp = eval(inputDisplay.value);
    inputDisplay.value = Math.ceil(temp);
  } else if (document.querySelector(".fun").value == "rand") {
    inputDisplay.value = Math.random();
  }
});

trigonometry.addEventListener("change", () => {
  let temp;
  if (document.querySelector(".trigo").value == "sin") {
    inputDisplay.value += "sin";
    trigo = 1;
    trigoVal = "sin";
  } else if (document.querySelector(".trigo").value == "cos") {
    inputDisplay.value += "cos";
    trigo = 1;
    trigoVal = "cos";
  } else if (document.querySelector(".trigo").value == "tan") {
    inputDisplay.value += "tan";
    trigo = 1;
    trigoVal = "tan";
  }
});

DEG.addEventListener("click", () => {
  if (DEG.innerHTML == "DEG") {
    DEG.innerHTML = "RAD";
    DRbtn = "RAD";
  } else {
    DEG.innerHTML = "DEG";
    DRbtn = "DEG";
  }
});
