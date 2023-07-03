const express = require('express')
const app = express()
const cors = require('cors')
const apiRouter = require('./server/routes')
const errorHandler = require('./server/middlewares/errorHandler')
const PORT = process.env.PORT || 4000

// Swagger
var swaggerui = require('swagger-ui-express');
var swaggerJson = require('./server/routes/OpenApi.json')

// middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(errorHandler)

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use("/api", apiRouter)

app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerJson));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})