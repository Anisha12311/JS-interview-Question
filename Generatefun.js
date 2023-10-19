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