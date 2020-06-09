// 5 fatorial = 5! = 5 * 4 * 3 * 2 * 1

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c --) { // ele começa no número (n) e enquanto ele for maior do que 1 ele vai perdendo 1 
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

