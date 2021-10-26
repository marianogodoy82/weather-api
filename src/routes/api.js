import {getCurrent, getForecast} from '../modules/weather/controller/weather.controller.js'
import {getLocationByIp} from '../modules/location/controller/location.controller.js'


const api = async (app) => {
    app.get('/v1/location', getLocationByIp)
    app.get(`/v1/current`, getCurrent);
    app.get(`/v1/current/:city`, getCurrent);
    app.get(`/v1/forecast`, getForecast);
    app.get(`/v1/forecast/:city`, getForecast);
}

export {api}