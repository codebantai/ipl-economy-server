const csv = require("csvtojson");
const fs = require("fs");
const topEconomicalBowlers = require("./topEconomicalBowler.js");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/economy.json";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then((matches) => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then((deliveries) => {
          //MATCHES PLAYED PER YEAR
          let result = topEconomicalBowlers(matches, deliveries);
          saveJson(result);
        });
    });
}

function saveJson(result) {
  
  const jsonString = JSON.stringify(result);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", (err) => {
    if (err) {
      console.error(err);
    }
  });
}
main();