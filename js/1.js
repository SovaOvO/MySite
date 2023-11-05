function verify() {
    console.log("a, b, c, d")
    let a = parseInt(elementA.innerText);
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    let d = parseInt(elementD.innerText);
    console.log(a, b, c, d)


    if (a > b) {
        more = a;
    } else {
        more = b;
    }


    if (c < d) {
        less = c;
    } else {
        less = d;
    }

    if (more > less) {
        result = "второй прямоугольник может поместиться внутри первого"
        document.getElementById("result").innerHTML = result;
    } else {
        result = "второй прямоугольник не может поместиться внутри первого"
        document.getElementById("result").innerHTML = result;
    }
}

    const elementA = document.getElementById("a");
    const elementB = document.getElementById("b");
    const elementC = document.getElementById("c");
    const elementD = document.getElementById("d");

    const elementVerify = document.getElementById("verify");
    elementVerify.addEventListener('click', verify);