import {
	Avatar,
	Badge,
	Card,
	CardContent,
    CardHeader,
	Typography,
	IconButton,
    styled
} from "@mui/material";
import classes from "../styles/MyProfile.module.css";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditProfile from "./EditProfile";


const MyProfile = () => {

    const Input = styled('input')({
        display: 'none',
    });

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardHeader action={<EditProfile />} />
			<CardContent className={classes.MyProfileCard}>
				<Badge
					overlap='circular'
					anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
					badgeContent={
						<label htmlFor='icon-button-file'>
							<Input
								accept='image/*'
								id='icon-button-file'
								type='file'
							/>
							<IconButton
								color='primary'
								aria-label='upload picture'
								component='span'
							>
								<PhotoCamera />
							</IconButton>
						</label>
					}
				>
					<Avatar
						alt='Travis Howard'
						src='/static/images/avatar/2.jpg'
						sx={{ width: 100, height: 100 }}
					/>
				</Badge>
				<Typography
					variant='body2'
					color='text.secondary'
					className={classes.myProfileInfo}
				>
					<span className={classes.myProfileDetails}>
						<span>My Name</span>
						<span>Joining Date</span>
						<span>Location</span>
						<span>Status</span>
					</span>
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MyProfile;
