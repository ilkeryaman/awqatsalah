import express from 'express';
import errorHandler from '../../../handler/error-handler';
import SC from '../../enum/http-status-codes';
import authentication from '../../../security/authentication';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

const _email = process.env.EMAIL;
const _password = process.env.PASSWORD;

router.post('/Login', async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        errorHandler.sendError(res, SC.UNAUTHORIZED, {
            success: false,
            message: null
        });
    } else if (_email !== email || _password !== password) {
        errorHandler.sendError(res, SC.UNAUTHORIZED, {
            success: false,
            message: null
        });
    } else {
        res.status(SC.OK).jsonp({
            data: {
                access_token: authentication.generateAccessToken({ email }),
                refresh_token: authentication.generateRefreshToken({ email }),
            },
            success: true,
            message: null
        });
        next();
    }
});

router.get('/RefreshToken/:refreshtoken', async (req, res, next) => {
    const refreshToken = req.params.refreshtoken;
    const claims = JSON.parse(Buffer.from(refreshToken.split('.')[1], 'base64').toString());
    authentication.refreshToken(refreshToken, { email: claims.email }, (data) => {
        res.status(SC.OK).jsonp({
            data,
            success: data ? true : false,
            message: null
        });
    });
});

export default router;