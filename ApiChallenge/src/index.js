const app = require('./app')
const cors = require('cors')

app.use(cors())

async function main () {
  await app.listen(3000)
}

main()
