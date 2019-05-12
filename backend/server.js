import express from 'express'
import { data } from './data' // Imitates database

const app = express()
const PORT = 8000

app.get('/ping', (req, res) => {
  res.send("pong")
})

app.get('/api/users/:userId', (req, res) => {
  const r = data.filter(d => { return d.id.toString() === req.params.userId.toString() })
  if (r.length > 0)
    res.send({ status: 'ok', data: r[0] })
  else
    res.send({ status: 'error', data: `could not find a user with ID ${req.params.userId} ` })
})

app.get('/api/users', (req, res) => {
  res.send({ status: 'ok', data: data })
})

app.listen(PORT, () => {
  console.log(`Listetning on port ${PORT}`)
})
