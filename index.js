
const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
  ans={
    "name": "ramesh",
    "key": 24
  }
  res.send(ans);
})

app.post('/post', (req, res) => {
  let counter=req.headers.counter;
  let sum=0;
  for(let i=0;i<=counter;i++)
    sum+=i;

  let answer ='Hi Im from hello world ' + counter;
  res.send(answer)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})