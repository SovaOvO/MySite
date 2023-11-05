formulation = "Даны вещественные положительные числа a, b, c, d. Выясните, может ли прямоугольник со сторонами a, b уместиться внутри прямоугольника со сторонами c, d так, чтобы каждая сторона внутреннего прямоугольника была параллельна или перпендикулярна стороне внешнего прямоугольника."

a = 5; // сторона прямоугольника 1
b = 2; // сторона прямоугольника 1

c = 3; // сторона прямоугольника 2
d = 4; // сторона прямоугольника 2


a = parseFloat(document.getElementById("a").innerHTML)
b = parseFloat(document.getElementById("b").innerHTML)
c = parseFloat(document.getElementById("c").innerHTML)
d = parseFloat(document.getElementById("d").innerHTML)






if (a > b) {
    more = a;
}
else {
    more = b;
}



if (c < d) {
    less = c;
}
else {
    less = d;
}

if (more > less) {
result = "второй прямоугольник может поместиться внутри первого"
    document.getElementById("result").innerHTML = result;
}
else {
result = "второй прямоугольник не может поместиться внутри первого"
    document.getElementById("result").innerHTML = result;
}



console.log(formulation);
console.log("a, b, c, d:", a, b, c, d);
console.log(result);



