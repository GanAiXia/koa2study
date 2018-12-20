const Koa = require('koa')
const app = new Koa()

app.use(async(ctx)=>{
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'MyName','kingcando'
        )
        ctx.body = 'cookie is ok'
    }else{
        if (ctx.cookies.get('MyName')) {
            ctx.body = ctx.cookies.get('MyName')
        }else{
            ctx.body = 'cookies none'
        }
    }
})

app.listen(3000,()=>{
    console.log('server is staring')
})