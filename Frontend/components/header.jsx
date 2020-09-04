import { useState } from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  Grid,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  colors,
} from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import LoginForm from "./home/loginForm";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [currentUser, setCurrentUser] = React.useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    const token = cookies["token"];
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      };
      const res = await fetch("http://localhost:5000/api/users/me", requestOptions);
      const data = await res.json();
      const { error, name } = data;
      if (name) setCurrentUser(name);
    };
    if (token) fetchData();
  }, [cookies["token"]]);

  const handleClose = async () => {
    setOpen(false);
  };

  const handleLogout = () => {
    //console.log(cookies["token"]);
    removeCookie("token");
    setCurrentUser(null);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" style={{ backgroundColor: colors.teal[500] }}>
        <Toolbar>
          <Grid container alignItems="center" style={{ marginTop: 20, marginBottom: 20 }}>
            <Grid item lg={1}></Grid>

            <Grid item lg={5}>
              <Link href="/">
                <Typography variant="h3" className={classes.title}>
                  <MuiLink href="#" color="inherit" underline="none">
                    প্রতিরোধ
                  </MuiLink>
                </Typography>
              </Link>
            </Grid>

            <Grid item lg={5}>
              <Box align="right">
                <Link href="/assistance">
                  <Button align="right" color="inherit">
                    সহায়তা
                  </Button>
                </Link>

                <Link href="/">
                  <Button align="right" color="inherit">
                    হোম
                  </Button>
                </Link>

                <Link href="/about">
                  <Button align="right" color="inherit">
                    অ্যাবাউট
                  </Button>
                </Link>
                {!currentUser ? (
                  <Button align="right" color="inherit" onClick={handleClickOpen}>
                    লগইন
                  </Button>
                ) : (
                  <Button align="right" color="inherit" onClick={handleLogout}>
                    লগআউট
                  </Button>
                )}
              </Box>
            </Grid>

            <Grid item lg={1}></Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <LoginForm handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Header;

/*  <Link href="/chat">
                  <Button align="right" color="inherit">
                    Chat
                  </Button>
                </Link> */
