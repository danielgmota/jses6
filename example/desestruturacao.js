const usuario = {
    nome: 'Daniel',
    idade: 29,
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
};

const cidade = usuario.endereco.cidade; //forma longa

const {nome, endereco:{cidade}} = usuario; //forma rapida

console.log(nome);
console.log(cidade);

//Exemplo com funções
function mostrarInfos({ nome, idade}) {
    console.log(nome,idade);
}

