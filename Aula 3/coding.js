var quantidademulheres = 0;
var quantidadehomens = 0;
var totalalturahomens = 0;
var mediaAlturaHomens = "Nenhum homem informardo.";
var menorAltura = 0;
var maiorAltura = 0;


for (var i=0; i<2; i = i+1) {

    var sexo = prompt("informe o sexo ");
    var altura =parseFloat(prompt("informe o Altura ") ); 

    if (i==0) {
        menorAltura = altura;
        maiorAltura = altura;
    } else {
        if (altura > maiorAltura)
        maiorAltura = altura
        if (altura < menorAltura)
        menorAltura = altura
    }


    if (sexo.toUpperCase() =="F") {
        quantidademulheres++; 
    } else if (sexo.toUpperCase() == "M") {
        quantidadehomens++;
        totalalturahomens = totalalturahomens + altura
       
    }
}


console.log ("A maior altura é ", +maiorAltura+ " e a menor altura é ", menorAltura.toFixed);
console.log ("A quantidade de mulheres é de", quantidademulheres);
console.log ("A quantidade de homes é de:", quantidadehomens);
console.log ("A média da altura dos Homens é:", mediah);