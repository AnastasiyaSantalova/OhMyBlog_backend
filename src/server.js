import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';
import * as admin from 'firebase-admin';
import credentials from '../credentials.json';

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

let server;

const start = async () => {
    server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    routes.forEach(route => server.route(route));
    
    await db.connect();
    await server.start();
    
    console.log(`Server is listening on ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
    console.log('error:', err);
    process.exit(1);
})

process.on('SIGINT', async () => {
    console.log('Stopping server...');
    await server.stop({ timeout: 10000 });

    db.end();
    process.exit(0);
})

start();