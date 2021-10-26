import fetch from 'node-fetch'

async function fetchCurrent(city) {
        const URI = `${process.env.openWeatherEndpoint}/weather?q=${city}&appid=${process.env.openWeatherApiKey}&units=metric`;
        try{
            const response = await fetch(URI);
            return await response.json();
        } catch (e){
            throw new Error(e);
        }
    }

    async function fetchForecast(city) {
        const URI = `${process.env.openWeatherEndpoint}/forecast?q=${city}&appid=${process.env.openWeatherApiKey}&units=metric`;

        try{
            const response = await fetch(URI);
            return await response.json();
        } catch (e){
            throw new Error(e);
        }
    }

export { fetchCurrent, fetchForecast}
