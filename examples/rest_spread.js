//REST 

const arr = [1,2,3,4];

const [a,b,...c] = arr;

console.log(a); //1
console.log(b); //2
console.log(c); //3,4

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,3,4));


//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];

console.log(arr3);



const usuario1 = {
    nome: 'Daniel',
    idade: 29,
    empresa: 'DGM',
};

const usuario2 = {...usuario1, empresa: 'Facebook'};

console.log(usuario2);


