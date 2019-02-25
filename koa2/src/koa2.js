const Koa = require('koa')

const app = new Koa()

const logger = require('koa-logger')
const convert = require('koa-convert')
const tab = (n)=> {
  return new Array(n).join('&nbsp;')
}
const mid1 =  ()=> {
  return async(ctx,next)=>{
    ctx.body=`<h3>${tab(8)}111</h3>`
    await next()
    ctx.body+=`<h3>${tab(8)}111</h3>`
  }


}



const mid2 =  ()=> {
  return async(ctx,next)=>{
    ctx.body+=`<h3>${tab(8)}222</h3>`
    await next()
    ctx.body+=`<h3>${tab(8)}222</h3>`
  }


}

const mid3 =  ()=> {
  return async(ctx,next)=>{
    ctx.body+=`<h3>${tab(8)}333</h3>`
    await next()
    ctx.body+=`<h3>${tab(8)}333</h3>`
  }


}

// app.use(convert(logger()))
app.use(logger())
app.use(mid1())
app.use(mid2())
app.use(mid3())
app.use(async (ctx,next)=> {
  ctx.body+=`<p style="color:#f60">${tab(12)}koa 核心</p>`
})

app.listen(2333)