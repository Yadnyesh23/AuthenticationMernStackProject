import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5000

const app = express()

function startServer(){
    app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
})
}

startServer()

