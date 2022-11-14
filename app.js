const express = require("express");
const request = require("request");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  const country = req.params.country || "ar";
  const type = req.params.type || "business";
  const urlNews = `https://newsapi.org/v2/top-headlines?country=${country}&category=${type}&apiKey=e3b5b11d4944459fac8192812ab214c4&sortBy=publishedAt`;

  const options = {
    url: urlNews,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
    },
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
