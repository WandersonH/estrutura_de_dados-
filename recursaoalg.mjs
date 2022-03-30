function fatorialrec(n){
    if(n <=1){
        return 1
    }else{
        return n * fatorialrec(n-1)
    }
}
console.log(`Fatorial de  =  `,fatorialrec(10))

//https://www.ic.unicamp.br/~ripolito/peds/mc102z/material/extra02.pdf
//https://pt.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion