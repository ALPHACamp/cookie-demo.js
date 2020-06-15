const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req)
  res.status(200).send('登入成功')
  const { email, password } = req.query
  console.log(email, password)
  if (email === 'ss@gmail.com' && password === '123456') {
    res.cookie('username', '001')
    res.status(200).send('登入成功')
    return
  }
  res.status(200).send('登入失敗')
})

app.listen(8888, () => console.log('Run on port 8888'))
