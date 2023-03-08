import express from "express"
import axios from "axios"
import cors from "cors"
import "dotenv/config"
// import { MongoClient } from "mongodb"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.static(process.env.PUBLIC_DIR))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/recipes/:query', async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  )
  console.log(response.data.hits)
  res.json(response.data.hits)
})

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`)
})

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'recipebox'

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })
