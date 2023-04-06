import express from 'express';
import SC from '../../../enum/http-status-codes';
import countryService from '../../../../services/country-service';
import stateService from '../../../../services/state-service';

const router = express.Router();

router.get('/Countries', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: countryService.getCountries(),
        success: true,
        message: null
    });
    next();
});

router.get('/States', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: stateService.getStates(),
        success: true,
        message: null
    });
    next();
});

router.get('/States/:countryid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: stateService.getStates(),
        success: true,
        message: null
    });
    next();
});

router.get('/Cities', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: stateService.getStates(),
        success: true,
        message: null
    });
    next();
});

router.get('/Cities/:stateid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: stateService.getStates(),
        success: true,
        message: null
    });
    next();
});

router.get('/CityDetail/:cityid', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: {
            id: "17885",
            name: "DEVREKANİ",
            code: null,
            geographicQiblaAngle: "164",
            distanceToKaaba: "2312",
            qiblaAngle: "159",
            city: "KASTAMONU",
            cityEn: null,
            country: "TÜRKİYE",
            countryEn: "TÜRKİYE"
            },
            success: true,
            message: null
    });
    next();
});

export default router;