import stateData from '../resources/data/state';

const getStates = (rawData = false) => {
    return rawData ? stateData : stateData.map(stateMap);
}

const getStatesByCountryId = (countryId) => {
    return getStates(true).filter(s => s.countryId === countryId).map(stateMap);
}

const stateMap = (state) => {
    return { ...state, countryId: undefined };
}

export default {
    getStates,
    getStatesByCountryId
}