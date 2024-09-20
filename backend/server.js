const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    res.json(response.data);
  } catch (err) {
    res.send(500);
  }
});

app.get("/countries/:countryID", async (req, res) => {
  const { countryID } = req.params;
  try {
    const response = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryID}`
    );
    res.json(response.data);
  } catch (err) {
    res.send(500);
  }
});

app.get("/population", async (req, res) => {
  try {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/population"
    );
    res.json(response.data.data);
  } catch (err) {
    res.send(500);
  }
});

app.get("/flagImages", async (req, res) => {
  try {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );
    res.json(response.data.data);
  } catch (err) {
    res.send(500);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
