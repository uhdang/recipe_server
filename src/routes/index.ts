import {Application} from 'express';
import auth from './auth';

export function apply(app:Application) {
    app.use('/auth', auth);
}
