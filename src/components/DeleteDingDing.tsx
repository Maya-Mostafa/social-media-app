import { Fragment, useState } from "react"
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
    IconButton
} from "@mui/material";
import classes from "../styles/DeleteDingDing.module.css"

const DeleteDingDing = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<IconButton aria-label='share' className={classes.deleteDD} onClick={handleClickOpen}>
				<DeleteIcon />
			</IconButton>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{"Delete a Ding-Ding!"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Are you sure you want to delete this Ding-Ding?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Yes</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
}

export default DeleteDingDing
