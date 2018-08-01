import * as mysql from 'mysql';

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

// ###############################################33

// TODO refactor this query to different directory with collection of schema query
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

// ##########################################3

module.exports = connection;
