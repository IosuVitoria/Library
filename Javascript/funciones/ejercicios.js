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
    let invert = palabra.split("");
    invert.reverse();
    console.log(invert);
    let invertUnido = invert.join("");
    console.log(invertUnido)
    if(invertUnido === palabra){
        console.log("Es palíndromo");
    }else{
        console.log("No es un palíndromo");
    }
}

console.log("Esto es la resolución del ejercicio 3");
console.log(esPalindromo("cadena"));
console.log(esPalindromo("oso"));


// Ejercicio 4: Enunciado: Escribe una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial. (El factorial de un número es el producto de todos los enteros positivos desde 1 hasta ese número).

function calcularFactorial(n){
    let resultado = 1;
    for(let i = n; i>=1; i--){
        if(i===1){
            return resultado
        }else{
            resultado*=i;
        } 
    }
}
console.log("Esto es la resolución del ejercicio 4");
console.log(calcularFactorial(6));

// Ejercicio 5:
// Enunciado: Escribe una función llamada repetirCadena que tome una cadena y un número como parámetros, y devuelva una nueva cadena que contenga la cadena repetida el número de veces especificado.

function repetirCadena(string,v){
    let mensaje = "";
    for(let i = v; i>=1; i--){
        mensaje += string;
        if(i === 1){
            return mensaje;
        }
    }
}

console.log("Esto es la resolución del ejercicio 5");
console.log(repetirCadena("hola",5));

// Ejercicio 6:
// Enunciado: Escribe una función llamada calcularPromedio que tome un arreglo de números como parámetro y devuelva el promedio de esos números.

function calcularPromedio(array){
    let sum = 0;
    let long = (array.length)-1
    for(let i = 0; i<=long; i++){
        sum += array[i];
        // console.log(sum);
        if(i === long){
            // console.log("aquí entro");
            return sum/long
        }
    }
}

let prueba = [1,2,3,4,5,6,7,8,9,10];
console.log("Esto es la resolución del ejercicio 6");
console.log(calcularPromedio(prueba));


// Ejercicio 7:
// Enunciado: Escribe una función llamada contarPalabras que tome una cadena como parámetro y devuelva el número de palabras que contiene.

function contarPalabras(string){
    let mensaje = string.split(" ");
    console.log(mensaje + " así es separado");
    let contador = 0;
    for(let i = 0; i <= mensaje.length-1; i++){
        contador +=1;
        if(i === mensaje.length-1){
            return contador
        }
    }
}

let string = "Esto es la resolución del ejercicio siete";
console.log("Esto es la resolución del ejercicio siete");
console.log(contarPalabras(string));

// Ejercicio 8:
// Enunciado: Escribe una función llamada filtrarPares que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que solo contenga los números pares.

function filtrarPares(arrayNumeros){
    const arrayFiltrado = arrayNumeros.filter(number => number % 2 === 0);
    return arrayFiltrado;
}

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Esto es la resolución del ejercicio 8");
console.log( filtrarPares(arrayNumeros));