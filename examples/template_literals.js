//Template Literals 

const nome = 'Daniel';
const idade = 29;

//console.log('Meu nome é ' + nome + 'e tenho ' + idade + ' anos.');
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);


//Object Short Syntax
const usuario = {
    //nome: nome,
    nome, //não é necessario repetir quando for a mesma palavra
    empresa: 'DGM'
}