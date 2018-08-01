import * as express from 'express';
import * as mysql from 'mysql';
import * as router from './route';

const app: express.Application = express();
const port = 3000;
const appVersion = require('../../package.json').version;

//express_config

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

const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT NOW()
)`;

connection.query(createUserTable, (err, results, fields) => {
    if (err) { throw err; }
    console.log('createdUserTable');
    //console.log(results);
});

// ############# TEMP DATA INSERT ##########################

//const insertUser = `
//INSERT INTO users SET ?
//`;
//const person = {
//username: 'noname01',
//password: 'yesname01',
//email: 'noname01@noname01.com'
//};

//connection.query(insertUser, person, (err, result) => {
//if (err) { throw err; }
////console.log(result);
//});

// ##########################################################

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`recipe.ofmine server v${appVersion}\n`);
});

app.get('/users', (req:express.Request, res: express.Response) => {
    const q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send('We have ' + results[0].count + ' users in our db');
    });
});

router.apply(app);

//connection.end();
app.listen(port, () => {
    console.log(`Listening on port:${port}/`);
});
