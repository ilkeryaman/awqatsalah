import express from 'express';
import consoleLogger from './src/middleware/logging/console-logger';
import { Color } from './src/resources/colors';
import routes from './src/routes';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();
app.use(express.json());
app.use('/', consoleLogger);
app.use('/api', routes);

app.listen(port, () => {
    console.log(`${Color.BRIGHT_MAGENTA}'prayer' is listening at ${Color.YELLOW}http://localhost:${port}`, Color.RESET);
});

export default app;
