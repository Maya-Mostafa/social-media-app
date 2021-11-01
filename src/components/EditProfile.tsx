import { Fragment, useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
	TextField,
    IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const EditProfile = () => {
    const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<IconButton aria-label='settings' onClick={handleClickOpen}>
				<MoreVertIcon />
			</IconButton>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{"Edit my profile"}
				</DialogTitle>
				<DialogContent>
					{/* <DialogContentText id='alert-dialog-description'>
						Profile Information
					</DialogContentText> */}
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Location'
						type='text'
						fullWidth
						variant='standard'
					/>
                    <TextField
						autoFocus
						margin='dense'
						id='name'
						label='Status'
						type='text'
						fullWidth
						variant='standard'
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Save</Button>
				</DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default EditProfile
