import { Fragment, useState } from 'react'
import CommentIcon from "@mui/icons-material/Comment";
import classes from "../styles/AddComment.module.css"
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
import SendIcon from '@mui/icons-material/Send';
import Comments from './Comments';
import DingDingItem from './DingDingItem';

const AddComment = () => {

    const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    return (
		<Fragment>
			<IconButton aria-label='share' onClick={handleClickOpen}>
				<CommentIcon />
				<span className={classes.notifText}>3 comments</span>
			</IconButton>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>
					{"Add Comment"}
				</DialogTitle>
				<DialogContent>
					{/* <DialogContentText id='alert-dialog-description'>
						Check these comments!
					</DialogContentText> */}
					<DingDingItem />
					<form className='mui-form--inline'>
						<TextField
							autoFocus
							id='name'
							label='Comment'
							type='text'
							variant='standard'
						/>
						<IconButton
							color='primary'
							aria-label='add to shopping cart'
						>
							<SendIcon />
						</IconButton>
					</form>
					<Comments />
				</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
		</Fragment>
	);
}

export default AddComment
