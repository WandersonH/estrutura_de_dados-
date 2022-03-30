/*
Função Recursiva
uma função recursiva é uma função que chama a si mesma até 
encontrar uma intruçãoi de parar.Essa tecnica é chamda de recursao.
sem uso de for ou while
 */

//fatorial: o fatorial de um numero inteiro e positivo "n", representado por "n!" é obtido a  partir de uma multiplicação de todos seus antecessores até o numero um
//fatorial de 0 = 1
//fatorial de 1 = 1

function fatorial(n){
    let res= 1
    for(let i = n ; i > 1 ; i-- ){
        res = res * i
    }
    return res
    
}

console.log(`Fatorial de ${i} =  `,fatorial(10))

