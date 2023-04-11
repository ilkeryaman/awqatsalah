import express from 'express';
import SC from '../../../enum/http-status-codes';
import prayerTimeService from '../../../../services/prayer-time-service';

const router = express.Router();

router.get('/Daily/:cityid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: prayerTimeService.generateResponseArray(),
        success: true,
        message: null
    });
    next();
});

router.get('/Weekly/:cityid', async (req, res, next) => {
    const startDateOfWeek = prayerTimeService.getStartDateOfWeek();
    res.status(SC.OK).jsonp({
        data: prayerTimeService.generateResponseArray(startDateOfWeek.day, 7 + 1 + startDateOfWeek.margin),
        success: true,
        message: null
    });
    next();
});

router.get('/Monthly/:cityid', async (req, res, next) => {
    const startDateOfWeek = prayerTimeService.getStartDateOfWeek();
    res.status(SC.OK).jsonp({
        data: prayerTimeService.generateResponseArray(startDateOfWeek.day, 30 + 1 + startDateOfWeek.margin),
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