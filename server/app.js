const express = require("express")
const listRoutes = require("./routes/list")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", listRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
