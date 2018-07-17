import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from './routes';
import * as mysql from 'mysql';

const app: express.Application = express();
const port = process.env.PORT || 3000;
const appVersion = require('../../package.json').version;

// DB Connection
//const connection = mysql.createConnection({
    //host : 'localhost',
    //user: 'root',
    //password: 'recipe-ofmine',
    //database: 'testdatabase',
//});

//connection.connect(err => {
    //if (err) {
        //console.log('Error connecting database ... \n\n');
    //}
//});

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`recipe.ofmine server v${appVersion}\n`);
});

routes.apply(app);

app.listen(port, () => {
    console.log(`Listening on port:${port}/`);
});
