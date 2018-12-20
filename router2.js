const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

let home = new Router()
home.get('/home',async(ctx)=>{
    ctx.body = "home home"
}).get('/todo',async(ctx)=>{
    ctx.body = "home todo"
})

let page = new Router()
page.get('/home',async(ctx)=>{
    ctx.body = "page home"
}).get('/todo',async(ctx)=>{
    ctx.body = "page todo"
})

let router = new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app
    .use(router.routes())
    .use(router.allowedMethods())
    
app.listen(3000,()=>{
    console.log('[demo] server is staring at port 3000')
})    

