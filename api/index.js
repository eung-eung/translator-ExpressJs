import express from "express"
import { translate } from "@vitalets/google-translate-api"
import bodyParser from "body-parser"
const app = express()
const port = 3000

app.use(bodyParser.json())
app.get('/', async (req, res) => {

    res.send("Express")
})
app.post('/', async (req, res) => {
    const { text } = await translate(req.body.text, { to: 'en' });
    res.send(text)
})

app.listen(3000, () => {
    console.log(`app listening on port ${port}`)
})

