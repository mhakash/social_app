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
import TextField from "@material-ui/core/TextField";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

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

const Post = ({ post }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCommentSubmit = async (data, e) => {
    console.log(data, post._id);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", token: cookies["token"] },
      body: JSON.stringify({ comment: data.comment, _id: post._id }),
    };
    const res = await fetch("http://localhost:5000/api/posts/comment", requestOptions);
    const dataBack = await res.json();
    //const { error, name } = dataBack;
    console.log(dataBack);
    e.preventDefault();
    e.target.reset();
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
        title={post.author}
        subheader="September ১৪, ২০১৬"
      />

      <CardContent>
        <Typography variant="body2" component="p">
          {post.content}
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
          {post.comments
            ? post.comments.map((comment) => {
                return (
                  <li key={comment._id}>
                    {comment.author} {"->"} {comment.content}
                  </li>
                );
              })
            : null}
          <form onSubmit={handleSubmit(handleCommentSubmit)}>
            <TextField
              inputRef={register}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="comment"
              label="comment"
            />
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
