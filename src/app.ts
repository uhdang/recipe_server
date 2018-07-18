import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from './routes';
import * as mysql from 'mysql';

const app: express.Application = express();
const port = process.env.PORT || 3000;
const appVersion = require('../../package.json').version;

const db = {
    host: 'localhost',
    user: 'root',
    password: 'recipe-ofmine',
    database: 'dev',
    port: 3306,
}

// DB Connection
const connection = mysql.createConnection({
    host : db.host,
    user: db.user,
    password: db.password, 
    database: db.database,
    port: db.port,
});

connection.connect(err => {
    if (err) {
        console.log('Error connecting database ... \n\n');
        throw err;
    }
    console.log('Connected');
});

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

app.get('/', (req: express.Request, res: express.Response) => {
    connection.query("SELECT * FROM dev", (error, rows, fields) => {
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
