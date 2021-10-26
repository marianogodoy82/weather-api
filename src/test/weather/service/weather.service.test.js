import {fetchCurrent} from "../../../modules/weather/service/weather.service.js";
import dotenv from "dotenv";
import chai from "chai"

const expect = chai.expect

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
});