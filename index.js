const { google } = require("googleapis");
const customSearch = google.customsearch("v1");

async function apiSample() {
  const result = await customSearch.cse.list({
    cx: "b1118d07ec9169368",
    q: "猫",
    auth: "AIzaSyAQBHSGIMsFKeGIOC33B-UbFKhaQK5Ytog",
    searchType: "image",
    safe: "high",
    num: 10, // max:10
    start: 1,
  });
  console.log("result: ", result.data.items);
}

apiSample();
