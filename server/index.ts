import * as dotenv from "dotenv";
import express from "express";
import axios from "axios";

dotenv.config();

const { OPENWEATHER_API_KEY, PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("storybook-static"));

// This should be a route to a main overview, maybe the storybook?
app.get("/", (req, res) => res.send("hello world"));

app.get("/currentweather", async (req, res) => {
  const lat = req.query.lat ?? "53.216822";
  const lon = req.query.lon ?? "6.567153";
  const units = req.query.units ?? "metric";
  const lang = req.query.units ?? "nl";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${units}&lang=${lang}`;

  const { data } = await axios({
    url,
    responseType: "json",
  });

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
