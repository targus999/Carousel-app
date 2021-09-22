import express from "express";
import fetch from "node-fetch";
global.fetch = fetch;
import URL from "url";
import cors from "cors";
import { createApi } from "unsplash-js";

var app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

const unsplash = createApi({
  accessKey: "84K-62bUCwMYWCe1BLmkIPSNne2ILre2e5L5h8GV-EA",
});

app.get("/", (req, res) => {
  // unsplash.search
  //   .getPhotos({
  //     query: "japan",
  //     page: 1,
  //     perPage: 10
  //   })
  //   .then((result) => {
  //     if (result.errors) {
  //       // handle error here
  //       console.log("error occurred: ", result.errors[0]);
  //     } else {
  //       // handle success here
  //       let photo = result.response;
  //       res.send(photo);
  //     }
  //   });
  console.log("API CALLED");
  res.send({"data":"WORKING"})
});

app.get("/:id", (req, res) => {
  // const id = req.params.id;
  // let Query = { query: id, page: 1, perPage: 10 };
  // unsplash.search
  //   .getPhotos(
  //     Query
  //   )
  //   .then((result) => {
  //     if (result.errors) {
  //       // handle error here
  //       console.log("error occurred: ", result.errors[0]);
  //     } else {
  //       // handle success here
  //       let photo = result.response;
  //       res.send(photo);
  //     }
  //   });
  console.log("API CALLED");
});
