import * as dotenv from "dotenv";
import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import axios from "axios";
import { InMemoryDB } from "./inmemory-db";

dotenv.config();

const { OPENWEATHER_API_KEY, PORT } = process.env;

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:6006", "http://192.168.178.20:6006", "http://127.0.0.1:5500", "http://192.168.178.20:8080", "http://localhost:8080"],
  })
);

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("dist"));
app.use(express.static("storybook-static"));
app.use("/playwright-report", express.static("playwright-report"));

// This should be a route to a main overview, maybe the storybook?
app.get("/tester", (req, res) => res.send("hello world"));

async function getGeoLocation(req: Request, res: Response, next: NextFunction) {
  const location = <string>req.query.location ?? "Groningen";
  const key = location.toLowerCase();

  if (InMemoryDB.has(key)) {
    next();
    return;
  }

  const { data } = await axios({
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${OPENWEATHER_API_KEY}`,
    responseType: "json",
  });

  const { name, lat, lon } = data[0];

  InMemoryDB.set(key, { name, lat, lon });

  next();
}

async function getWeatherData(req: Request, res: Response, next: NextFunction) {
  const { units = "metric", lang = "nl" } = req.query; //default values
  const location = <string>req.query.location ?? "Groningen";
  const key = location.toLowerCase();

  if(InMemoryDB.get(key).data){
    next();
    return;

  } else {
    const { lat, lon } = InMemoryDB.get(key);
  
    // TODO: catch 400 and 401 (wrong api key)
    const { data } = await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${units}&lang=${lang}`,
      responseType: "json",
    });

    InMemoryDB.set(key, {
      ...InMemoryDB.get(key),
      data
    })
  }

  next()
}

app.get("/currentweather", getGeoLocation, getWeatherData, async (req, res) => {
  const location = <string>req.query.location ?? "Groningen";
  const key = location.toLowerCase();
  const { data } = InMemoryDB.get(key)
  // console.log(data)

  res.send(data)
  
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
