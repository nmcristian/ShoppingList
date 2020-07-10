import * as express from 'express';
import * as http from 'http';

import { sequelize } from './config/Database';


export class Server {

    port: number = 3000;
    private server: http.Server = null;
    private static instance: Server;
    public constructor(app: express.Application) {
        this.server = http.createServer(app)
    }

    static getInstance(app): Server {
        if (!Server.instance) {
            return new Server(app);
        }
        return Server.instance;
    }

    public startServer(): void {
        const port = 3000;

        sequelize
            .authenticate()
            .then(() => {
                if(this.server.address() == null) {
                    console.log('starting server');
                    this.server.listen(port, () => {
                        console.log(`server running on ${port}`);
                        console.log(`successfully connected to the database`);
                    })
                }

            })
            .catch(err => {
                console.error('unable to connect to the database: server start up failed', err);
            })

    }

    public closeServer(): Promise<void> {

        return new Promise((resolve, reject)=> {
            try {
                this.server.close( () => {
                    console.log('server closed');
                    resolve();
                });
            } catch(err) {
                reject(err);
            }
        })
    }
}
