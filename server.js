import express from 'express'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
import {api} from './src/routes/api.js'
const createServer = async () => {
    app.use(bodyParser.json())

    await api(app);

    app.listen(port, () => {
        console.log(`App listening at http:localhostr:${port}`)
    })
};

export {createServer}