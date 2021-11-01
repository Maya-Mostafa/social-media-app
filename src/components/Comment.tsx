import { Fragment } from "react";
import { Avatar, Typography } from "@mui/material";

const Comment = () => {
	return (
		<Fragment>
			<Avatar
				alt='Remy Sharp'
				src='/static/images/avatar/1.jpg'
				sx={{ width: 56, height: 56 }}
			/>
			<h3>Mark Stephen</h3>
			<div>1:35 pm, 31 Oct 2021</div>
			<Typography variant='body2' color='text.secondary'>
				This impressive paella is a perfect party dish and a fun meal to
				cook together with your guests. Add 1 cup of frozen peas along
				with the mussels, if you like.
			</Typography>
		</Fragment>
	);
};

export default Comment;
