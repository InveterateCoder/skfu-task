const express = require('express')

const app = express()

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(8000, () => console.log('server is running on port 8000'))