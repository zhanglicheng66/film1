const Koa = require('koa')

const app = new Koa()

app.use(async(ctx,next)=>{
  ctx.body='Hi Luke'
})

app.listen(2333)