import {Request, Response} from 'express';
const connection = require('../../db');

export const getUsers = (req:Request, res:Response) => {
    // GETUSER
    const q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, (err:Error, results:any) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send('We have ' + results[0].count + ' users in our db');
    });
};
