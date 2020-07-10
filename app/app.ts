import express from 'express';

import { UsersRouter } from './routes/UsersRouter';
import { ShoppingListsRouter } from './routes/ShoppingListsRouter';
import { ItemsRouter } from './routes/ItemsRouter';

import {Server} from '../server';
export const app: express.Application = express();

import * as bodyparser from 'body-parser';
import * as useragent from 'express-useragent';

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(useragent.express());

app.get('/', (req, res) => {
    res.send({'Hello': 'World!'});
})


app.use('/api/users', UsersRouter);
app.use('/api/shoppinglists', ShoppingListsRouter);
app.use('/api/items', ItemsRouter);


const server = Server.getInstance(app);
server.startServer();
