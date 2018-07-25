import {Application} from 'express';
import auth from './auth';
import user from './user';

export function apply(app:Application) {
    app.use('/auth', auth);
    app.use('/user', user);
}
