const express = require('express')

const app = express()

// app.get('/',(req,res)=>{
//   res.send('Hi Luke')
// })
const Koa = require('koa')

const app = new Koa()

const logger = require('koa-logger')
const convert = require('koa-convert')
const tab = (n)=> {
  return new Array(n).join('&nbsp;')
}
const mid1 =  ()=> {
  return (req,res,next)=>{
    req.body=`<h3>${tab(8)}111</h3>`
    next()
    req.body+=`<h3>${tab(8)}111</h3>`
  }


}



const mid2 =  ()=> {
  return (req,res,next)=>{
    res.body+=`<h3>${tab(8)}222</h3>`
    next()
    res.body+=`<h3>${tab(8)}222</h3>`
  }


}

const mid3 =  ()=> {
  return (req,res,next)=>{
    res.body+=`<h3>${tab(8)}333</h3>`
     next()
    res.body+=`<h3>${tab(8)}333</h3>`
  }


}

// app.use(convert(logger()))

app.use(mid1())
app.use(mid2())
app.use(mid3())
app.get('/', (req,res,next)=> {
  res.send(`${res.body}<p style="color:#f60">${tab(12)}koa 核心</p>`
})


app.listen(2334)