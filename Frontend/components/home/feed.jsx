import Post from "./post";

import { Typography, Divider, makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  divider: {
    height: 1,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: grey[600],
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h5" color="textSecondary">
        Community
      </Typography>

      <Divider classes={{ root: classes.divider }} />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </React.Fragment>
  );
};
export default Feed;
