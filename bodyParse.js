const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())

app.use(async(ctx)=>{
    if (ctx.url === '/' && ctx.method === "GET") {
       
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <p>webSite</p>
                <input name="age" /> <br/>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    }else if(ctx.url === '/' && ctx.method === "POST"){
        let postData = ctx.request.body
        ctx.body = postData
    }else{
        ctx.body = '<h1>404!</h1>'
    }
 
})

app.listen(3000,()=>{
    console.log("[demo] server is starting at port 3000")
})