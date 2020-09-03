import Layout from "../components/Layout";
import SignupForm from "../components/home/signupform";

import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  colors,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 60,
    padding: 30,
    backgroundColor: "white",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={3}></Grid>

          <Grid item lg={6}>
            <div className={classes.container}>
              <SignupForm />
            </div>
          </Grid>

          <Grid item lg={3}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default About;
