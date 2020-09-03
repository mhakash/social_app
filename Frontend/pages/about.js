import Layout from "../components/Layout";

import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  colors,
} from "@material-ui/core";

const server = "http://localhost:3001";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 60,
    padding: 30,
    backgroundColor: "white",
  },
  divider: {
    height: 1,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "black",
  },
}));

const About = ({ info }) => {
  const classes = useStyles();

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={2}></Grid>

          <Grid item lg={8}>
            <div className={classes.container}>
              <Typography variant="h3">About Tomato</Typography>

              <Divider classes={{ root: classes.divider }} />

              <Typography variant="body1">{JSON.stringify(info)}</Typography>

              <Typography variant="body1">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like. This impressive paella is a
                perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you
                like. This impressive paella is a perfect party dish and a fun
                meal to cook together with your guests. Add 1 cup of frozen peas
                along with the mussels, if you like. This impressive paella is a
                perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you
                like.
              </Typography>
            </div>
          </Grid>

          <Grid item lg={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch(server + "/api/GET");
  const data = await response.json();
  return { info: data };
};

export default About;
