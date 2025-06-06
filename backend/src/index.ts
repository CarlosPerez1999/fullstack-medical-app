import express from 'express'
import cors from 'cors'
import {routes} from './routes'

const app = express()

app.use(express.json())
app.use(cors())

routes.forEach(({path, route}) => {
  app.use(path, route);
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})