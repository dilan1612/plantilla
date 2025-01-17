const express = require('express')

const path = require('path')

const app = express()

//setters
app.use(express.static(path.join(__dirname,'public')))

app.set('PORT',process.env.PORT || 3003 )
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//middleware
app.use(express.json())
//app.use(express.urlencoded({extends:true}))
app.use('/',require('./routes/index'))

app.listen(app.get('PORT'),()=>console.log(`Server ready at Port ${app.get('PORT')}`))