import {createServer} from './server.js'
import dotenv from 'dotenv'

dotenv.config();
await createServer();