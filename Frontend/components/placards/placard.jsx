import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 6px",
    transform: "scale(3)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Placard = ({ title }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader title={title} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {bull} well meaning and kindly. a benevolent smile...
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Placard;
