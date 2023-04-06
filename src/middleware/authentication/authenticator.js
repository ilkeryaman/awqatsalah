import express from 'express';
import authentication from '../../security/authentication';
import { ignoreAuthFor } from './config';
import SC from '../../routes/enum/http-status-codes';
import errorHandler from '../../handler/error-handler';

const router = express.Router();

router.use((req, res, next) => {
    const path = req._parsedUrl.pathname;

    if (ignoreAuthFor.includes(path)) {
        next();
    } else {
        const { authorization } = req.headers;
        if (authorization) {
            try {
                const token = authorization.split(' ')[1];
                if (token) {
                    const info = authentication.authenticateToken(token);
                    if (info) {
                        if(info.email){
                            req.headers.email = parseInt(info.email);
                        }
                        next();
                    } else {
                        errorHandler.sendError(res, SC.UNAUTHORIZED, {
                            success: false,
                            message: null
                        });
                    }
                } else {
                    errorHandler.sendError(res, SC.UNAUTHORIZED, {
                        success: false,
                        message: null
                    });
                }
            } catch {
                errorHandler.sendError(res, SC.UNAUTHORIZED, {
                    success: false,
                    message: null
                });
            }

        } else {
            errorHandler.sendError(res, SC.UNAUTHORIZED, {
                success: false,
                message: null
            });
        }
    }
});

export default router;