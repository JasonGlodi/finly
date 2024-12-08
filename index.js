const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/', (req,res)=>{
    res.send('Hello from Node.js')
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

app.get('*',(req,res)=>{
    res.status(404).send('Not found')
})