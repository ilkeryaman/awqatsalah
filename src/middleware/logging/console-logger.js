import moment from 'moment';
import express from 'express';
import { Color } from '../../resources/colors';

const router = express.Router();

router.use((req, res, next) => {
    const requestDate = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
    console.log(Color.GREEN, `[${req.method}]`,
        Color.CYAN, `${req.headers.host}${req.originalUrl}`,
        Color.YELLOW, `${requestDate}`,
        Color.RESET);
    next()
});

export default router;