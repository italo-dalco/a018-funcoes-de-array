/*
# Exercício 2

Crie um array de números que contenha 8 números.
Depois disso, utilize este array para criar duas funcões de array `map()`:

1. A primeira deve retornar um novo array contendo os números múltiplicados por 3,
Crie uma `const triplos`,e guarde o valor do array nesta const;
*/

const array = [1,2,3,4,5,6,7,8]

    const triplos = []

        const funcao1 = array.map((item, index, array) => {
        
            triplos.push(item * 3)

})

                console.log(triplos)



//2. A segunda deve retornar um novo array contendo os números divididos por 2.
//Crie uma `const metades`, e guarde o valor do array nesta const;

const metades = []

    const funcao2 = array.filter((item, index, array) => {

        if (item % 2 === 0) {
            metades.push(item)
        }
    })

    console.log(metades)
