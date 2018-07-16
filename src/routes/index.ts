import auth from './auth';

export default function apply(app) {
    app.use('/auth', auth);
}
