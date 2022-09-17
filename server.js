const express =require('express')
const LMY =require('./configuration/load-my-variable')
const DB =require('./configuration/database')
const app =express()
const PORT = process.env.PORT || 9999
app.listen(PORT, () => {
    console.log(`You Application has Launched from the Port 🚀 🚀 ${PORT}`);
})