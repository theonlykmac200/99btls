const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send(`<h1> 99 Bottles of Champagne on the wall, 99 Bottles of Champagne... <a href= "/98">Take one down, Pass it around</a></h1>`)
})

app.get("/:btlsOfChampagneLeft", (req, res) => {
 let btls = req.params.btlsOfChampagneLeft
    if(btls > 0) {
        res.send(`<h1>${btls} bottles of Champagne on the wall!<h1><h1> ${btls} bottles of Champagne on the wall...${btls} bottles of Champagne...<a href= "/${btls -1}">Take one down, Pass it around</a></h1>`)
    }else {
        res.send(`<h1>No more bottles of Champange on the Wall, No More Bottles of Champagne...You're drunk as an skunk and I think its a good idea to <a href= "/">play again</a><h1>`)
    }
})


app.listen(3000, () => {
    console.log("Drink some water before bed")
})
