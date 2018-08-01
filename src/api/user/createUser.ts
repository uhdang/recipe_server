import {Request, Response} from 'express';
const connection = require('../../db');

export const createUser = (req:Request|any, res:Response) => {
    // CREATEUSER
    console.log('bodyparser check');
    console.log(req.body);
    const { username, password, email } = req.body;
    const person = {
        username,
        password,
        email
    };

    const q = 'INSERT INTO users SET ?';

    connection.query(q, person, (err:Error, result:any) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.status(200).send('Thanks for joining our wait list!');

    });

};

// ############# TEMP DATA INSERT ##############

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
