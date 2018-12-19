const Koa = require('koa')

const app = new Koa()

app.use(async(ctx) =>{
    ctx.body = 'Hello Koa2'
})

function getSomething() {
    return 'something'
}

async function testAsync() {
    return 'Hello async'
}

async function test() {
    const v1 = await getSomething()
    const v2 = await testAsync()
    console.log(v1,v2)
}

test()
// const result = testAsync()
// console.log(result)

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')