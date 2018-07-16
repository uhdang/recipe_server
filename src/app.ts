import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as routes from './routes';

// DB Connection
//import * as mysql from 'mysql';

const app: express.Application = express();
const port = process.env.PORT || 3000;
const appVersion = require('../../package.json').version;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('recipe.ofmine server v' + appVersion);
});

routes.apply(app);

app.listen(port, () => {
    console.log(`Listening on port:${port}/`);
});
