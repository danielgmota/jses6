//Exemplo de mutação
const usuario = {nome : 'Daniel'};

usuario.nome = 'Danilo';

console.log(usuario);

//Exemplo variavel de escopo
function teste(x){
    let y = 2;

    if (x > 5){
        console.log(x, y);
    }
}

teste(10);