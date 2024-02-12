const express = require("express")
const port = process.env.PORT || 5000

const app =express();
app.listen(port, (err)=> {

app.get("/",(req, res)=>{
    res.send('Hello World !!! ')
} )


    console.log("Serveur est en ligne");
} )