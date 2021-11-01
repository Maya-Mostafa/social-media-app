import { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
	TextField,
} from "@mui/material";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import classes from "../styles/NewDingDing.module.css";

const NewDingDing = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant='contained'
				startIcon={<AddAlarmIcon />}
				color='secondary'
				className={classes.addDingDingBtn}
				onClick={handleClickOpen}
			>
				Post a Ding-Ding
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{"Post a Ding-Ding!"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Let Google help apps determine location. This means
						sending anonymous location data to Google, even when no
						apps are running.
					</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Post'
						type='text'
						fullWidth
						variant='standard'
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Ding-Ding</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default NewDingDing;
