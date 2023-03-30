// Declaração de Função - Mostra algo que pode ser usado na memória a qualquer momento.

// No caso você declara uma variável, que pode ser usada a qualquer momento. 

/*
function somar (num1 , num2 ){

    var total = num1+num2;
    return total;

}

var resultado = somar(1,5);
console.log(resultado);

function boasVindas (usuario, funcao) {
    console.log("-------------SISTEMA TAL-----------------");
    console.log("REGISTO LOG");
    console.log("USUÁRIO: FULANDO DE TAL");
    console.log("Novo usuário foi adicionado");
}

var reul = boasVindas();
*/

 /* FUNCITON EXPRESSION - Porque não usa os moldes de declaração.

*/

var multiplicar = function (n1,n2) {
    return (n1 * n2);
}

var resultado = multiplicar(6,8);
console.log(resultado);

// Efeito A