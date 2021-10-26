import dotenv from "dotenv";
import {expect} from "chai"
import {fetchLocation} from "../../../modules/location/service/location.service.js";

describe('location.service', () => {
    describe('fetchLocation', () => {
        it('should return code 200', async () => {
            dotenv.config();
            const result = await fetchLocation();
            expect(result.status).to.equal("success")
        });
    });
});
