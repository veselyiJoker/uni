import express from 'express';
import fileUpload from 'express-fileupload';
import { getFiles, partnersSliderDir } from './constants/constants.js';

import router from './router.js';

const PORT = 5000;
const DB_URL = '';

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))

app.use('/api', router)

async function startApp() { 
    try {
        app.listen(PORT, () => console.log('Сервер запущен'))

        const files = getFiles( partnersSliderDir.jpg, 'jpg' )

        console.log(files);

    } catch(e) {
        console.log(e)
    }
}

startApp()





