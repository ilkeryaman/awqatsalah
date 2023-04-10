import express from 'express';
import SC from '../../../enum/http-status-codes';
import countryService from '../../../../services/country-service';
import stateService from '../../../../services/state-service';
import cityService from '../../../../services/city-service';

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
    const countryId = parseInt(req.params.countryid);
    res.status(SC.OK).jsonp({
        data: stateService.getStatesByCountryId(countryId),
        success: true,
        message: null
    });
    next();
});

router.get('/Cities', async (req, res, next) => {
    res.status(SC.OK).jsonp({
        data: cityService.getCities(),
        success: true,
        message: null
    });
    next();
});

router.get('/Cities/:stateid', async (req, res, next) => {
    const stateId = parseInt(req.params.stateid);
    res.status(SC.OK).jsonp({
        data: cityService.getCitiesByStateId(stateId),
        success: true,
        message: null
    });
    next();
});

router.get('/CityDetail/:cityid', async (req, res, next) => {
    const cityId = parseInt(req.params.cityid);
    const cityDetail = cityService.getCityById(cityId);
    res.status(SC.OK).jsonp({
        data: {
            id: cityDetail.id,
            name: cityDetail.name,
            code: null,
            geographicQiblaAngle: "164",
            distanceToKaaba: "2312",
            qiblaAngle: "159",
            city: cityDetail.city,
            cityEn: null,
            country: cityDetail.country,
            countryEn: cityDetail.countryEn
        },
        success: true,
        message: null
    });
    next();
});

export default router;