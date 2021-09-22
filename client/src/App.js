import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../src/components/Header";
import Grid from "@material-ui/core/Grid";
import Slides from "./components/Slides";
import Category from "./components/Category";
import { useState, useEffect } from "react";
import axios from "axios";

import Files from "./components/Files";
import Images from "./components/Images";

const App = () => {
  componentDidMount=()=>{
    this.getdata();
  }  
   getdata = () => {
    axios
      .get("http://localhost:5000/")
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch(() => {
        console.log("data not received");
      });
  };

  // const [data, setData] = useState({})
  // useEffect(function () {
  //     const url = 'http://localhost:5000/ducati';
  //     fetch(url, {
  //        method: 'GET',
  //        headers: {
  //            'Content-Type': 'application/json;charset=utf-8'
  //        }
  //     }).then(res => {
  //        // fetch success
  //        setData(res.data)
  //        // pass an object receive from server into setData function
  //     });
  //     console.log(data)
  //     // At the first time render, console.log here will undefined
  //     // The second time, you will got the data
  // }, []);

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <div
          style={{
            height: "10%",
            marginTop: "5%",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid xs={3}>
              <Grid
                container
                spacing={10}
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Category />
                </Grid>
                <hr />
                <Grid item>
                  <Files />
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={9}>
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid>
                  <Slides />;
                </Grid>
                <Grid>
                  <Images />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    </div>
  );
};

export default App;
