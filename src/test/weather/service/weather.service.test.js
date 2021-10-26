import dotenv from "dotenv";
import {expect} from "chai"
import {fetchCurrent,fetchForecast} from "../../../modules/weather/service/weather.service.js";


describe('weather.service', () => {
    describe('fetchCurrent', () => {
        it('should return code 200', async () => {
            dotenv.config();
            const result = await fetchCurrent('London');
            expect(result.cod).to.equal(200)
        });
        it('should return code 404', async () => {
            dotenv.config();
            const result = await fetchCurrent('non-existent city');
            expect(result.cod).to.equal('404')
        });
        it('empty city should return code 400', async () => {
            dotenv.config();
            const result = await fetchCurrent();
            expect(result.cod).to.equal('400')
        });
    });

    describe('fetchForecast', () => {
        it('should return code 200', async () => {
            dotenv.config();
            const result = await fetchForecast('London');
            expect(result.cod).to.equal("200")
        });
        it('should return code 404', async () => {
            dotenv.config();
            const result = await fetchForecast('non-existent city');
            expect(result.cod).to.equal('404')
        });
        it('empty city should return code 400', async () => {
            dotenv.config();
            const result = await fetchForecast();
            expect(result.cod).to.equal('400')
        });
    });
});