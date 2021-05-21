import express from 'express.js'
import dotenv from 'dotenv.js'
import colors from 'colors.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/error.js'

import userRoutes from './routes/user.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV}  mode on port ${PORT}`.yellow
      .bold
  )
)
