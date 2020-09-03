import Layout from "../components/Layout";
import Feed from "../components/home/feed";
import Placard from "../components/placards/placard";
import PostForm from "../components/home/postForm";
import ExpertPlacard from "../components/placards/expertPlacard";

import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  sideNav: {
    width: "25%",
    height: "100%",
    position: "fixed",
    //zIndex: 1,
    //left: 0,
    //backgroundColor: "#eee",
    paddingTop: 60,
    overflowY: "auto",
  },

  feed: {
    paddingTop: 80,
    marginLeft: 2,
    marginRight: 2,
  },
});

const Index = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container>
        <Grid item lg={1}></Grid>

        <Grid item lg={3}>
          <div className={classes.sideNav}>
            <ExpertPlacard />
          </div>
        </Grid>

        <Grid item lg={4}>
          <div className={classes.feed}>
            <PostForm />

            <Feed />
          </div>
        </Grid>

        <Grid item lg={3}>
          <div className={classes.sideNav}>
            <Placard title="Did you know?" />
            <Placard title="FAQ" />
            <Placard title="Know the Law" />
          </div>
        </Grid>

        <Grid item lg={1}></Grid>
      </Grid>
    </Layout>
  );
};

export default Index;
