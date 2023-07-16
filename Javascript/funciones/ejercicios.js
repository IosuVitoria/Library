// Primer ejercicio. Escribe una función llamada esPar que tome un número como parámetro y devuelva true si es par, o false si es impar.

function esPar(n){
    if(n%2 === 0){
        return true;
    }else{
        return false;
    }
};

console.log("Esto es la resolución del ejercicio 1");
console.log(esPar(45));
console.log(esPar(18));


//Segundo ejercicio. Escribe una función llamada invertirCadena que tome una cadena como parámetro y devuelva la cadena invertida.

function invertirCadena(cadena){
    let nuevaCadena = "";
    for(let i = cadena.length-1; i >= 0; i--){
        nuevaCadena += cadena[i];
    }
    return nuevaCadena;
}
let cadena="Frase de prueba";
console.log("Esto es la resolución del ejercicio 2");
console.log(invertirCadena(cadena));

//Tercer ejercicio. Escribe una función llamada esPalindromo que tome una cadena como parámetro y devuelva true si es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), o false si no lo es.

function esPalindromo(palabra){
    
}