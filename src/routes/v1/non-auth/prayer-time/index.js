import express from 'express';
import SC from '../../../enum/http-status-codes';
import prayerTimeService from '../../../../services/prayer-time-service';

const router = express.Router();

router.get('/Daily/:cityid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: prayerTimeService.generateResponseArray(1),
        success: true,
        message: null
    });
    next();
});

router.get('/Weekly/:cityid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: prayerTimeService.generateResponseArray(7),
        success: true,
        message: null
    });
    next();
});

router.get('/Monthly/:cityid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: prayerTimeService.generateResponseArray(30),
        success: true,
        message: null
    });
    next();
});

router.get('/Eid/:cityid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: prayerTimeService.generateEidTime(),
        success: true,
        message: null
    });
    next();
});


export default router;