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
    console.log(req.body);

    const { text } = await translate('Привет, мир! Как дела?', { to: 'en' });
    console.log(text);
    res.send(text)
})

app.listen(3000, () => {
    console.log(`app listening on port ${port}`)
})

module.exports = app;