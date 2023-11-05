function verify() {
    console.log("a, b, c, d")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    let d = parseInt(elementD.innerText);
    console.log(a, b, c, d)

    let low, high
    if (a || b < c || d) {
        low = a || b;
        high = c || d;
    }
    else {
        low = c || d;
        high = a || d;
    }

    if (c || d >= low && c || d <= high) {
        result = " Не уместится"
        document.getElementById("result").innerText =  result;
    } else {
        result = " Уместится"
        document.getElementById("result").innerText =  result;
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementD = document.getElementById("d");


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);