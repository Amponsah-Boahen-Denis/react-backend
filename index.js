 
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv =require('dotenv').config()

app.use(express.json())
 const port = process.env.PORT || 3000
 app.get("",(req,res)=>{
res.send('my first page')

 })

// mongoose.connect('mongodb+srv://Denis:1234@cluster0.w9cz4ir.mongodb.net/', 

// ()=>console.log('database connected'))
// .catch(err=> console.log(err))

// const item = new mongoose.Schema({
//    name:String
//  })
//  const ittem=mongoose.model('users', item)


// app.post('/api/items/', async (req,res)=>{
//    await ittem.Create({
//         name:req.body.item
//   })
// })


//  app.put('/api/items/:id', async (req,res)=>{
//    const edit = await ittem.findByIdAndUpdate(req.params.id, req.body, {new:true})
//    res.status(200).json(edit)
// })


// app.delete('/api/items/:id', async (req,res)=>{
//  await ittem.findByIdAndDelete(req.params.id, req.body, {new:true})
//   res.end()
// })




// app.get('/api/items', async (req,res)=>{
//   const result = await ittem.find()
//   res.status(2900).json(result)
// })



app.listen(port)