let contador = 0;
let alturasFeminino = [];
let alturasMasculino = [];

while (contador < 2) {
  let sexo = prompt("Qual o sexo?");
  let altura = prompt("Qual a altura?");
  if (sexo === 'feminino') {
    alturasFeminino.push(altura);
  } else {
    alturasMasculino.push(altura);
  }
  contador++;
}

console.log("Alturas femininas: " + alturasFeminino);
console.log("Alturas masculinas: " + alturasMasculino);

