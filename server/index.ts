import * as dotenv from 'dotenv'

dotenv.config()

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY
console.log(OPENWEATHER_API_KEY)