/*
# Exercício 1

Crie duas funcões que recebem como parâmetro um objeto.
1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

2. A segunda deve retornar os valores do objeto como texto corrido.

3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros.
A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
Repita o processo para a funcão 2
*/



const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function funcao1(objeto1) {

  for(let i in objeto1) {

    objeto1[i] = objeto1[i].toUpperCase()
  }
        console.log(objeto1)

            return objeto1
    
}
            funcao1(objeto)


//2. A segunda deve retornar os valores do objeto como texto corrido.

function funcao2(obj) {

    obj = JSON.stringify(obj);

        console.log(obj);
}    
            funcao2(objeto);


// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros.
// A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.


function funcao3(objeto, funcao) {

    const funcaoCallback = funcao(objeto)

        console.log(funcaoCallback)
}
             funcao3(objeto , funcao1)