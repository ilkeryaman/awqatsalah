import cityData from '../resources/data/city';
import stateData from '../resources/data/state';
import countryData from '../resources/data/country';

const getCities = (rawData = false) => {
    return rawData ? cityData : cityData.map(cityMap);
}

const getCitiesByStateId = (stateId) => {
    return getCities(true).filter(c => c.stateId === stateId).map(cityMap);
}

const getCityById = (cityId) => {
    let cityDetail = {};
    const cities = getCities(true).filter(c => c.id === cityId);
    if (cities && cities.length > 0) {
        cityDetail = { ...cityDetail, id: cities[0].id.toString(), name: cities[0].name }
        const states = stateData.filter(s => s.id === cities[0].stateId);
        if (states && states.length > 0) {
            cityDetail.city = states[0].name;
            const countries = countryData.filter(c => c.id == states[0].countryId);
            if (countries && countries.length > 0) {
                cityDetail.country = countries[0].name;
                cityDetail.countryEn = countries[0].name;
            }
        }
    }
    return cityDetail;
}

const cityMap = (city) => {
    return { ...city, stateId: undefined };
}

export default {
    getCities,
    getCitiesByStateId,
    getCityById
}