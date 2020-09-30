const express = require('express');
const app = express()
const port = (process.env.PORT || 3000)

app.set('PORT',port)

app.listen(app.get('PORT'),()=>{

    console.log('PORT Listen on',app.get('PORT'))
})