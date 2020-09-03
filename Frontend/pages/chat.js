import { useState } from "react";

import { Paper, makeStyles, Grid, TextField, Button, Typography, colors } from "@material-ui/core/";

import Layout from "../components/Layout";
import { useEffect } from "react";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
//import useSWR from "swr";

const API_END = "http://localhost:5000";
let socket;

const fetcher = (url) => fetch(url).then((r) => r.json());

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingTop: 70,
    //padding: 30,
    height: "100vh",
    backgroundColor: colors.grey[50],
  },
  divider: {
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "black",
  },
  bottomBar: {
    height: "10vh",
    //marginTop: 10,
    //marginBottom: 10,
    backgroundColor: theme.palette.primary.main,
  },
}));

const Chat = () => {
  //const { data } = useSWR(`${API_END}/chat`);

  const [received, setReceived] = useState([]);

  const [sent, setSent] = useState([]);

  const classes = useStyles();

  const { register, handleSubmit, watch, errors } = useForm();

  useEffect(() => {
    socket = io(API_END);
    socket.emit("join", { name: "akash" });
    const data = fetch(`${API_END}/api/chat`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (message) => {
      console.log("receive", message);
      console.log("ara", received);
      setReceived([...received, message]);
    });
  }, [received]);

  const onSubmit = (data, e) => {
    console.log("send", data.input);
    socket.emit("message", data.input);
    setSent([...sent, data.input]);
    e.target.reset();
  };

  return (
    <Layout>
      <Grid container>
        <Grid item lg={4}></Grid>

        <Grid item lg={4}>
          <div className={classes.container}>
            <div style={{ padding: 10 }}>
              {sent.map((msg, index) => (
                <Typography key={index} variant="body1">
                  <b>{msg}</b>
                </Typography>
              ))}

              {received.map((msg, index) => (
                <Typography key={index} variant="body1">
                  {msg}
                </Typography>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Paper square elevation={5} style={{ padding: 20, backgroundColor: "white" }}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item lg={10}>
                    <TextField
                      autoComplete="off"
                      name="input"
                      margin="dense"
                      inputRef={register}
                      placeholder="........."
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={2}>
                    <Button type="submit" variant="contained" color="primary">
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Paper>

              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        </Grid>

        <Grid item lg={4}></Grid>
      </Grid>
    </Layout>
  );
};

export default Chat;
