import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mysql from 'mysql';
import * as routes from './routes';

const app: express.Application = express();
const port = process.env.PORT || 3000;
const appVersion = require('../../package.json').version;

const db = {
    database: 'dev',
    host: 'localhost',
    password: 'recipe-ofmine',
    port: 3306,
    user: 'root',
};

// DB Connection
const connection = mysql.createConnection({
    database: db.database,
    host : db.host,
    password: db.password,
    port: db.port,
    user: db.user,
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting database ... \n\n');
        throw err;
    }
    console.log('Connected');
});

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) {
        throw err;
    }
    console.log('The solution is: ', rows[0].solution);
});

app.get('/', (req: express.Request, res: express.Response) => {
    connection.query('SELECT * FROM dev', (error, rows, fields) => {
        if (error) {
            throw error;
        }
    });
    res.status(200).send(`recipe.ofmine server v${appVersion}\n`);
});

routes.apply(app);

app.listen(port, () => {
    console.log(`Listening on port:${port}/`);
});
