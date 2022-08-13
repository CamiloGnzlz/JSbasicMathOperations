alert("Seleccione operacion a realizar :");
operation = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División")

//Bloque de Operaciones
const sumar = (n1,n2) => {
    return parseInt(n1) + parseInt(n2);
}
const restar = (n1,n2) => {
    return parseInt(n1) - parseInt(n2);
}
const multiplicar = (n1,n2) => {
    return parseInt(n1) * parseInt(n2);
}
const dividir = (n1,n2) => {
    return parseInt(n1) / parseInt(n2);
}
//Bloque de Selección de acuerdo a lo ingresado por el usuario
if (operation == 1) {
    let n1 = (prompt("Ingrese el primer número :"));
    let n2 = (prompt("Ingrese el segundo número :"));
    resultado = sumar(n1,n2);
    alert("El resultado es : "+ resultado)
}
else if (operation == 2) {
    let n1 = (prompt("Ingrese el primer número :"));
    let n2 = (prompt("Ingrese el segundo número :"));
    resultado = restar(n1,n2);
    alert("El resultado es : " + resultado)
}
else if (operation == 3) {
    let n1 = (prompt("Ingrese el primer número :"));
    let n2 = (prompt("Ingrese el segundo número :"));
    resultado = multiplicar(n1,n2);
    alert("El resultado es : " + resultado)
}
else if (operation == 4) {
    let n1 = (prompt("Ingrese el primer número :"));
    let n2 = (prompt("Ingrese el segundo número :"));
    resultado = dividir(n1,n2);
    alert("El resultado es : " + resultado)
}
else {
    alert("Ingrese una opcion valida, Intente nuevamente")  
}
