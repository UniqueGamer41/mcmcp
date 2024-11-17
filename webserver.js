const express = require("express")
const server = express()
const path = require('path')
const homepage = path.join(__dirname, "public")
const pagenotfound = path.join(__dirname, "../public/templates")
const command = path.join(__dirname, "command")

server.set('view engine', 'hbs');
server.use(express.static(homepage));

// server.get("/", (req, res) => {
// 	res.render('index')
// })
  

server.get("/status", (req, res) => {
	res.send("Bot is running")
})

server.get("/commands", (req, res) => {
	res.render('commands')
})

server.get("/dashboard", (req, res) => {
	res.render('Dashboard')
})

server.get("/test", (req, res) => {
  res.render('test')
})

server.get("/change_log", (req, res) => {
  res.render('update_log')
})

server.get("/UniqueGamer/discord_bot/updates/1.01", (req, res) => {
  res.render('update1')
})

server.get("/dashboard/user_servers", (req, res) => {
  res.render('user_servers')
})

server.get("/trial", (req, res) => {
  res.render('servers_page.hbs')
})

server.get("/mcmpc", (req, res) => {
	res.render('mcmpc.hbs')
})

server.get("/trial/about", (req, res) => {
  res.render('about.hbs')
})



server.get("*", (req, res) => {
  res.render("404.hbs")
})

function keep_alive() {
	server.listen(3000, () => {
		console.log("Server is ready.")
	})
}
module.exports = keep_alive