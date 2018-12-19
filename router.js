const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

router.get('/',function (ctx,next) {
    ctx.body = "Hello koa-route"
})
.get('/todo',(ctx,next)=>{
    ctx.body = "todo page"
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('[demo] server is staring at port 3000')
})