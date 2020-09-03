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

const ExpertPlacard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader title="Talk with an Expert" />

      <CardContent>
        <Typography variant="body2" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions>
        <Link href="/assistance">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ExpertPlacard;
