import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import classes from "../styles/DingDing.module.css";
import DeleteDingDing from "./DeleteDingDing";
import AddComment from "./AddComment";

const DingDing = () => {
  return (
    <Card sx={{ minWidth: 275 }} className={classes.ddCntnr}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <span className={classes.notifText}>0 likes</span>
        </IconButton>
        <AddComment />
        <DeleteDingDing/>
      </CardActions>
    </Card>
  );
};

export default DingDing;
