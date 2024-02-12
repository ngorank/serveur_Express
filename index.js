const express = require("express")
const mysql = require("mysql")
const port = process.env.PORT || 5000
const app =express();

 app.get("/", (req, res)=>{

    
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
});

connection.connect((err)=>{
    if(err){
        console.error("Erreur à la connexion à la base de données:" + err.stack)
        return;
    }
    console.log("Connexion réussie")   
})

connection.query("SELECT * FROM etudiants", (err , rows, fields)=>{
    if(err) throw err; 
    res.json(rows)
})
connection.end();
 })

app.listen(port, (err)=> {
    console.log("Serveur est en ligne ");
} )