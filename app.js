import express from 'express';
import consoleLogger from './src/middleware/logging/console-logger';
import { Color } from './src/resources/colors';
import routes from './src/routes';
import { sslEnabled } from './src/services/ssl-service';
import loggingService from './src/services/logging-service';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const serverListener = () => {
    console.log(`${Color.BRIGHT_MAGENTA}'prayer' is listening at ${Color.YELLOW}${sslEnabled ? 'https' : 'http'}://localhost:${port}${Color.BRIGHT_MAGENTA}:`, Color.RESET);
    loggingService.printRouteList(app._router);
}

const port = process.env.SERVER_PORT;
const app = express();
app.use(express.json());
app.use('/', consoleLogger);
app.use('/', routes);

if (sslEnabled) {
    https.createServer(
        {
            key: fs.readFileSync('./cert/key.pem'),
            cert: fs.readFileSync('./cert/cert.pem'),
        },
        app
    ).listen(port, serverListener);
} else {
    app.listen(port, serverListener);
}

export default app;
