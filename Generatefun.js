function* GenerateFun() {
    yield new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Promise Resolve ")
        },1000)
    })
}

const gen = GenerateFun()
const promise = gen.next().value
promise.then((result) => {
    console.log(result)
})
.catch((err) => console.log(err))



//Generating Fibonacci Sequence using ES6 generator functions

function* fibonacciGenerator() {
    let pervious = 0;
    let current = 1;

    while(true){
        yield current

        const next = pervious + current
        pervious = current
        current = next

    }

}

const fib = fibonacciGenerator()
for(let i = 0; i < 10; i ++){
   console.log( fib.next().value)
}

