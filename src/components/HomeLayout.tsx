import React from "react";
import { Container, Grid } from "@mui/material";
import MyProfile from "./MyProfile";
import classes from "../styles/HomeLayout.module.css";
import NewDingDing from "./NewDingDing";
import DingDingList from "./DingDingList";

const HomeLayout = () => {
	return (
		<Container
			component='main'
			maxWidth={"lg"}
			className={classes.homeCntnr}
		>
			<Grid container spacing={2} justifyContent='center'>
				<Grid item xs={12} lg={8}>
					<NewDingDing />
					<DingDingList />
				</Grid>
				<Grid item xs={12} lg={4}>
					<MyProfile />
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomeLayout;
