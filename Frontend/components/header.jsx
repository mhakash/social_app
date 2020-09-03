import { useState } from "react";
import Link from "next/link";
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
} from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import LoginForm from "./home/loginForm";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container>
            <Grid item lg={1}></Grid>

            <Grid item lg={5}>
              <Link href="/">
                <Typography variant="h4" className={classes.title}>
                  <MuiLink href="#" color="inherit" underline="none">
                    Social Harrassment
                  </MuiLink>
                </Typography>
              </Link>
            </Grid>

            <Grid item lg={5}>
              <Box align="right">
                <Link href="/chat">
                  <Button align="right" color="inherit">
                    Chat
                  </Button>
                </Link>

                <Link href="/assistance">
                  <Button align="right" color="inherit">
                    Assistance
                  </Button>
                </Link>

                <Link href="/">
                  <Button align="right" color="inherit">
                    Home
                  </Button>
                </Link>

                <Link href="/about">
                  <Button align="right" color="inherit">
                    About
                  </Button>
                </Link>

                <Button align="right" color="inherit" onClick={handleClickOpen}>
                  Login
                </Button>
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
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Header;
