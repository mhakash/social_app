import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: "100%",
    marginBottom: 10,
  },
  share: {
    marginLeft: "auto",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostForm = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <Card className={classes.root}>
      <CardHeader avatar={<Avatar className={classes.avatar}>R</Avatar>} title="আপনি" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <TextField
            name="postContent"
            inputRef={register}
            placeholder="আপনার গল্পটি শেয়ার করূন......"
            fullWidth
            multiline
            variant="outlined"
          />
        </CardContent>

        <CardActions>
          <Button type="submit" className={classes.share}>
            শেয়ার
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default PostForm;
