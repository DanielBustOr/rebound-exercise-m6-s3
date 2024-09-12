//Creación de Variables VAR, LET Y CONST
//Error en  VAR Y EN LET
    // const sumar = (a, b) => {
    //     let a = 5
    //     let b = 6
    //     if (true) {
    //         let a = 10; // este 'a' es diferente al 'a' en la función
    //         var b = 12; // este 'b' redeclara 'b' en la función 
    //         console.log(`Dentro del Bloque if`)
    //         console.log(`a: ${a}`); //10
    //         console.log(`b:  ${b}`); //12
    //         console.log(`Suma dentro del bloque:  ${a} + ${b}`); // 10 + 12 = 22
    //     }
    //     console.log(`Fuera del Bloque if:`);
    //     console.log(`a: ${a}`); //5, porque la variable 'a' dentro del if es independiente
    //     console.log(`b: ${b}`); //12, porque 'var' no tiene alcance de bloque
    //     console.log(`Suma fuera del Bloque: ${a + b}`); //5 + 12 = 17
    // }

    // sumar();
    // console.log(a); //Error, 'a' no esta definido en este alcance global
    // console.log(b); //Error, 'b' no esta definido en este alcance global

//Error en CONST
    // const ufHoy = 37834.79
    // const ufHoy = 37850

    // console.log(ufHoy)

//de funcion Tradicional a función de Tipo Flecha
//funcion tradicional
function sumar(a, b) {
    return a + b
}

//funcion Flecha
const sumarFlecha = (a, b) => {
    return a + b;
}

//simplificamos nuestra función
const sumarFlechaSimplificado = (a, b) => a + b;

//Creación objeto con Caracteristicas de un Animal. 

const animal = {
    nombre: 'Búho Real',
    especie: 'Bubo bubo',
    colorPlumaje: 'Marron y Blanco con manchas',
    tamaño: 60, //tamaño en centimentros
    envergadura: 140, //Envergadura en centimetros
}

//Función destructuring y uso de template literals
console.log('-----------destructuring y template literals------------');
const describeAnimal = (animal) => {
    const { nombre, especie, colorPlumaje, tamaño, envergadura } = animal;

    const descripcion = `El ${nombre}, de la especie ${especie}, es un ave que destaca por su bello 
plumaje color ${colorPlumaje}. Tiene un tamaño de alrededor de ${tamaño} cm y una envergadura de unos ${envergadura} cm.`;

    console.log(descripcion)
};

describeAnimal(animal);

console.log('------Copia y Actualización objeto animal a través de spread-------')
const animalActualizado = {
    ...animal, nombre: 'Búho Nival', especie: 'Bubo scandiacus',
    dieta: ['roedores', 'insectos', 'aves pequeñas'], habitat: 'Ártico y subártico'
};

console.log(animalActualizado)

const arrayPropiedadesAnimal = Object.values(animalActualizado)

console.log('---------------Atributos -----------------------')
for (const atributoAnimal of arrayPropiedadesAnimal) {
    console.log(atributoAnimal)
}



