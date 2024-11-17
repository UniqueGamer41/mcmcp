const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
  res.get(path.join(__dirname, '../public/index.html'))
})

module.exports = router