import {fetchLocation} from '../service/location.service.js'

async function getLocationByIp(req, res) {
    const data = await fetchLocation()
    return res.json(data)
}

export {getLocationByIp}