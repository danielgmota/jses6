const arr = [1,3,4,5,6];

//forma completa
const newArr1 = arr.map(function(item){
    return item * 2;
});

//forma curta com arrow
const newArr = arr.map(item => item * 2);

console.log(newArr);



//objeto obrigatoriamente em paretenses
const test = () => ({ nome: 'Daniel' });

console.log(teste());


//Definindo valores padrões
//const soma = (a,b) => a + b;  //NaN
const soma = (a=3,b=6) => a + b;

console.log(soma());
console.log(soma(1));
console.log(soma(2,4));