const port = 3000

const api = require('./api/index') 
const express = require('express')
const cors    = require('cors')
const morgan  = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended:true}))

app.use('/', api)

app.listen(process.env.PORT || port,()=>console.log(`oline into port ${port}`))