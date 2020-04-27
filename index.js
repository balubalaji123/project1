const express=require('express')
const app=express()
const path=require('path')
const bodyparser=require('body-parser')
app.use(express.static(path.join(__dirname,'dist/balaji1')))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.get('/',function(req,res){
    res.sendFile(__dirname+'/dist/balaji1/index.html')
})

app.get('/*',function(req,res){
    res.sendFile(__dirname+'/dist/balaji1/index.html')
})
app.listen(process.env.PORT || 3000)
