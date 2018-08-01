import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as router from './route';

const app: express.Application = express();
const port = 3000;
const appVersion = require('../../package.json').version;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`recipe.ofmine server v${appVersion}\n`);
});

router.apply(app);

//connection.end();
app.listen(port, () => {
    console.log(`Listening on port:${port}/`);
});
