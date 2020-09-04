import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: "100%",
    marginBottom: 10,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>স্ব</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="স্বাধীন"
        subheader="September ১৪, ২০১৬"
      />

      <CardContent>
        <Typography variant="body2" component="p">
          আমার সঙ্গে যখন ওই ভাষায় অনলাইন চ্যাট হতো, আমি পিডোফেলিয়া শব্দটির সঙ্গে পরিচিত ছিলাম না। এবং ভাবতাম উনি একমাত্র
          আমাকেই এসব বলছেন। এত বছর পর আমার যে সমস্ত বন্ধুবান্ধব এই ঘটনার কথা জানত, তারা আমায় মুখ খুলতে বলে। আমি পুলিশে
          অভিযোগ জানাব, বা আদালতে লড়ব, সে সব ভাবিইনি। সমাজে ওঁর যথেষ্ট প্রভাব প্রতিপত্তি রয়েছে। আইনি পথে লড়লে ওঁর কীই বা
          শাস্তি হবে? কিন্তু সোশ্যাল মিডিয়ায় এত মানুষ যে ওঁর এই দিকগুলো সম্পর্কে জানতে পারছেন, ওঁর এত বছর ধরে একটু একটু
          করে গড়ে তোলা ভাবমূর্তি ধ্বসে পড়ছে, এটাই সবচেয়ে বড় শাস্তি।
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
          </Typography>
          <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
