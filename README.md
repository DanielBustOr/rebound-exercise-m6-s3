# Ejercicio de Comprobación Modulo 6 sesión 3

## 1. EJERCICIO:

1. Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea porque la definición es al interior de una función, de un bloque o fuera de ellos.

2. Crear una función utilizando el formato tradicional con la palabra clave function, y luego volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración dentro de una variable. La función debe recibir, al menos, dos argumentos.

3. Crear una función similar a la del ejercicio, utilizando esta vez un objeto con características de algún animal, que contenga, al menos, cinco pares de llave - valor. Utilizar template literals para escribir un texto empleando los valores del objeto, y Destructuring para definir los valores del objeto dentro de la función.

4. Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread operator; actualizar dos campos, y añadir dos nuevos.

5. Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array.

## 2. Solución

### 1. Creación de Variables var, let y const
---

- A continuación, se presenta un ejemplo que ilustra el alcance de las variables declaradas con var, let, y const en JavaScript, así como algunos errores comunes que pueden surgir al usarlas:

    ```javascript
    const sumar = (a, b) => {
        let a = 5
        let b = 6
        if (true) {
            let a = 10; // este 'a' es diferente al 'a' en la función
            var b = 12; // este 'b' redeclara 'b' en la función 
            console.log(`Dentro del Bloque if`)
            console.log(`a: ${a}`); //10
            console.log(`b:  ${b}`); //12
            console.log(`Suma dentro del bloque:  ${a} + ${b}`); // 10 + 12 = 22
        }
        console.log(`Fuera del Bloque if:`);
        console.log(`a: ${a}`); //5, porque la variable 'a' dentro del if es independiente
        console.log(`b: ${b}`); //12, porque 'var' no tiene alcance de bloque
        console.log(`Suma fuera del Bloque: ${a + b}`); //5 + 12 = 17
    }

    ```
- Declaración de let: 
    - En la función sumar, las variables a y b se declaran usando let, lo que significa que tienen un alcance limitado al bloque en el que se declaran.
  
    - Dentro del bloque if, se declara una nueva variable a usando let. Esta variable es independiente de la a declarada fuera del if, y su alcance se limita al bloque if.

- Declaracion de var: 
  
  - Dentro del bloque if, la variable b se redeclara usando var. A diferencia de let, var no respeta el alcance de bloque, sino que se eleva al ámbito de función. Por lo tanto, cuando b se redeclara dentro del if, también afecta a la variable b declarada en la función sumar, fuera del if.
  
- Resultados en consola: 
    - Dentro del Bloque if:
  
        a: 10

         b: 12

    Suma dentro del bloque: 10 + 12 = 22

    - Fuera del Bloque if: 
  
        a: 5

        b: 12

        Suma fuera del Bloque: 5 + 12 = 17

- Declaración de Const: 
  
    ```Javascript 
    //Error en CONST
    const ufHoy = 37834.79
    const ufHoy = 37850
    console.log(ufHoy)
    ```
- const es una palabra clave en JavaScript que se utiliza para declarar variables que no deben ser reasignadas después de su inicialización. 
  
   
- En el ejemplo anterior, se intenta declarar una variable ufHoy usando const dos veces:
  - Primera declaración: `const ufHoy = 37834.79;`
  
    - Se asigna el valor `37834.79` a la variable `ufHoy`.
  
  - Segunda declaración: `const ufHoy = 37850`;
    - Aquí, el código intenta declarar nuevamente la variable `ufHoy` y asignarle un nuevo valor `37850`.
    - Sin embargo, como ufHoy fue declarada con const, no se permite redeclararla ni reasignarle un nuevo valor.
  
- Error: Intentar declarar una variable const con el mismo nombre en el mismo ámbito genera un Error de Sintaxis (SyntaxError). El error ocurre porque JavaScript no permite la redeclaración o reasignación de variables const.
  
-  Comportamiento del codigo:
   -  Si intentas ejecutar el código, obtendrás un error como este en la consola:
      
        `SyntaxError: Identifier 'ufHoy' has already been declared`


### 2. De función Tradicional a Función de tipo flecha
---
- Funcion Tradicional: En JavaScript, una función tradicional se define utilizando la palabra clave function. Este tipo de funciones pueden recibir uno o más argumentos y devolver un valor.

    Ejemplo de Función Tradicional:

    ```javascript 
    //funcion tradicional
    function sumar(a, b) {
        return a + b
    }
    ```
- Función de Flecha: Las funciones de flecha son una forma más concisa de escribir funciones en JavaScript. Se introdujeron en ES6 y son especialmente útiles para funciones pequeñas y de una sola línea.
  
  Reescribiendo la Función como una Función de Flecha: 

    ```javascript 
    //simplificamos nuestra función
    const sumar = (a, b) => a + b;

    ```
    - Declaración dentro de una variable (`const sumar`): En lugar de usar la palabra clave `function`, se asigna la función a una constante (`sumar`).
    - Parámetros (`(a, b)`): Los parámetros se colocan dentro de paréntesis, igual que en una función tradicional.
    - Operador de flecha (`=>`): Reemplaza la palabra clave `function` y el retorno explícito (`return`). Indica que la función toma los parámetros a la izquierda de la flecha y devuelve el valor calculado a la derecha.
    - Retorno implícito: Si la función es de una sola línea, no es necesario usar `return`. JavaScript entiende que el valor a la derecha de la flecha debe ser devuelto.
  
### 3. Destructuring y template literals.
---

- JavaScript ofrece varias características avanzadas que facilitan la manipulación de objetos y cadenas de texto, como el destructuring y los template literals.
-  Primero, definimos un objeto que representa un animal. Este objeto tiene cinco pares clave-valor que describen las características del animal:

    ```javascript
    const animal = {
        nombre: 'Búho Real',
        especie: 'Bubo bubo',
        colorPlumaje: 'Marron y Blanco con manchas',
        tamaño: 60, //tamaño en centimentros
        envergadura: 140, //Envergadura en centimetros
    }
    ```
- El destructuring nos permite extraer propiedades directamente de un objeto y asignarlas a variables, lo que simplifica el código y mejora su legibilidad.

- Creamos una función `describeAnimal` que recibe un objeto como argumento y realiza el destructuring de sus propiedades:

    ```javascript
    const describeAnimal = (animal) => {
        const { nombre, especie, colorPlumaje, tamaño, envergadura } = animal;

        const descripcion = `El ${nombre}, de la especie ${especie}, es un ave que destaca por su bello 
    plumaje color ${colorPlumaje}. Tiene un tamaño de alrededor de ${tamaño} cm y una envergadura de unos ${envergadura} cm.`;

        console.log(descripcion)
    };

    describeAnimal(animal);
    ```
- Destructuring: Extraemos las propiedades `nombre`, `especie`, `colorPlumaje`, `tamaño` y `envergadura` directamente desde el objeto animal.

- Utilizamos template literals para construir una cadena de texto que describa al animal. Los template literals permiten la interpolación de variables dentro de cadenas de texto, haciendo que la construcción de cadenas sea más fácil y legible:
  
    ```javascript
    const descripcion = `El ${nombre}, de la especie ${especie}, es un ave que destaca por su bello plumaje color ${colorPlumaje}. Tiene un tamaño de alrededor de ${tamaño} cm y una envergadura de unos ${envergadura} cm.`;
    ```
- Interpolación: Al utilizar `${}`, podemos insertar el valor de una variable dentro de una cadena de texto.
- Resultado:
  - Al ejecutar la función `describeAnimal`, se imprime en la consola la descripción detallada del animal, utilizando la información extraída mediante destructuring y formateada con template literals:
  
     `El Búho Real, de la especie Bubo bubo, es un ave que destaca por su bello plumaje color Marrón y Blanco con manchas. Tiene un tamaño de alrededor de 60 cm y una envergadura de unos 140 cm.
`
  
### 4. Operador Spread
---
- Creamos la constante `animalActualizado`, y a través de un spread operator realizamos una copia de nuestro objeto orignial con la expresión `...animal`, actualizamos los campos `nombre` y `especie`. finalmente añadimos los campos nuevos `dieta` y `habitat`. 
   
    ```javascript
    const animalActualizado = {
        ...animal, nombre: 'Búho Nival', especie: 'Bubo scandiacus',
        dieta: ['roedores', 'insectos', 'aves pequeñas'], habitat: 'Ártico y subártico'
    };
    ```

### 5. Metodo Object.values() y Ciclo for of.
---
- Para acceder a los valores de todas las propiedades de un objeto en JavaScript, podemos utilizar el método `Object.values()`. Este método toma un objeto como argumento y devuelve un array que contiene los valores de todas las propiedades enumerables del objeto.
  
    ```javascript 
    const arrayPropiedadesAnimal = Object.values(animalActualizado)
    ```
    - Object.values(animalActualizado): Extrae todos los valores de las propiedades del objeto animalActualizado y los almacena en un array llamado arrayPropiedadesAnimal.
  
- De esta manera, los valores de las propiedades del objeto animalActualizado se organizan en un array, lo que facilita su manipulación y recorrido.

- Una vez que tenemos un array con los valores de las propiedades, podemos recorrerlo utilizando el ciclo for...of. Este ciclo es especialmente útil cuando queremos iterar sobre los elementos de una colección, como un array, de forma sencilla y directa.
  
    ```javascript
    console.log('---------------Atributos -----------------------')
    for (const atributoAnimal of arrayPropiedadesAnimal) {
        console.log(atributoAnimal)
    }
    ```
    - `for...of`: Itera sobre cada elemento del array `arrayPropiedadesAnimal`, asignando temporalmente cada valor a la variable `atributoAnimal` en cada iteración.
    - Salida: Este ciclo imprimirá cada valor almacenado en el array `arrayPropiedadesAnimal` en la consola, mostrando los atributos del objeto `animalActualizado`.
  
- Diferencias entre for...of y el Ciclo for Tradicional
  
  - for...of: Introducido en ES6 (ECMAScript 2015), el ciclo for...of es ideal para recorrer arrays y otras colecciones iterables. No requiere el manejo manual de índices, lo que hace que el código sea más legible y menos propenso a errores.

  - Ciclo for Tradicional: Utiliza un contador y un índice para recorrer arrays. Aunque ofrece un control más fino sobre el proceso de iteración, el ciclo for tradicional puede ser más verboso y complejo.

