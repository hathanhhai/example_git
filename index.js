const express = require('express')
const app = express()
const port = 8031
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  return res.send("nodejs")
})
app.get('/color', (req, res) => {
    res.send([
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "gold",
      value: "#000"
    }
  ])
  res.send("32323")
  console.log("333")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})