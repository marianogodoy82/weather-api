import {fetchCurrent,fetchForecast } from '../service/weather.service.js'
import {fetchLocation} from '../../location/service/location.service.js'

    async function  getCurrent(req, res) {
        if (req.params.city){
            const data = await fetchCurrent(req.params.city)
            res.json(data)
        }
        else{
            const location  = await fetchLocation();
            const weather=  await fetchCurrent(location.city);
            res.json({
                ...location,
                ...weather
            })
        }
    }

    async function  getForecast(req, res) {
        if (req.params.city){
            const data = await fetchForecast(req.params.city)
            res.json(data)
        }
        else{
            const location  = await fetchLocation();
            const weather=  await fetchForecast(location.city);
            res.json({
                ...location,
                ...weather
            })
        }
    }

export {getCurrent, getForecast}