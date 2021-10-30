import React from "react";
import { Container, Grid } from "@mui/material";
import DingDing from "./DingDing";
import MyProfile from "./MyProfile";
import classes from "../styles/HomeLayout.module.css";

const HomeLayout = () => {
  return (
    <Container component="main" maxWidth={"lg"} className={classes.homeCntnr}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} lg={8}>
          <DingDing />
          <DingDing />
          <DingDing />
          <DingDing />
        </Grid>
        <Grid item xs={12} lg={4}>
          <MyProfile/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeLayout;
 