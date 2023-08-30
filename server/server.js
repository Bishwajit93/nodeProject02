import express from "express";
import dotenv from "dotenv"
import query from './db.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 4000

// ----- MIDDLEWARE ----- //
app.use(express.json())

// ----- ROUTING ----- //

// GET all restaurnats
app.get("/api/v1/restaurants", async(req, res) => {
    const allRestaurants = await query(`SELECT * FROM restaurants`)
    res.status(200).json(allRestaurants)
})


// GET one specific restaurnat
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params)
})


// Create a restaurant
app.post("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.body)
})


// Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
})


// Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status("200").json({status:"Deleted Succesfully"})
})


app.listen(port, (req, res) => {
    console.log(`The server is listening to the port ${port}`)
})