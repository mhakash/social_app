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
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useState } from "react";

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
  const [cookies, setCookie, removeCookie] = useCookies();
  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit } = useForm();
  const END = "http://localhost:5000/api";

  useEffect(() => {
    const token = cookies["token"];
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      };
      const res = await fetch("http://localhost:5000/api/users/me", requestOptions);
      const data = await res.json();
      const { error, name } = data;
      if (name) setLoggedIn(true);
      else setLoggedIn(false);
    };
    if (token) fetchData();
    else setLoggedIn(false);
  }, [cookies["token"]]);

  const onSubmit = async (data, e) => {
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", token: cookies["token"] },
      body: JSON.stringify({ post: data.postContent }),
    };
    const res = await fetch("http://localhost:5000/api/posts/add", requestOptions);
    const resData = await res.json();
    console.log(resData);
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
            disabled={!loggedIn}
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
