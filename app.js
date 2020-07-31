const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/services", (req, res) => {
  res.render("services")
})

app.get("/about", (req, res) => {
  res.render("about")
})

app.get("/promotions", (req, res) => {
  res.render("promotions")
})

app.get("/contact", (req, res) => {
  res.render("contact")
})
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
})
