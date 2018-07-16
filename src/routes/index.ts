import {Application} from 'express';
import auth from './auth';

export default function apply(app:Application) {
    app.use('/auth', auth);
}
