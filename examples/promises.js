const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

/* javascript puro sem ES6
minhaPromisse()
    .then(response => {
        console.log(response);
    })
    .catch(err => {

    });
*/

async function executaPromisse() {
    /*const response = await minhaPromisse();
    console.log(response);*/

    console.log(await minhaPromisse());
}

executaPromisse();


/////////// usando arrow function


const executaPromise = async () => {
    console.log(await minhaPromisse());
};

executaPromise();