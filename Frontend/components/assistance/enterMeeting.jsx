import {
  Button,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const EnterMeeting = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      align="center"
      direction="column"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h6">
          Please enter your coupon code to start the meeting
        </Typography>
      </Grid>

      <Grid item>
        <TextField
          multiline
          margin="dense"
          variant="outlined"
          //onChange={handleDescriptionChange}
        />
      </Grid>

      <Grid item>
        <Button variant="contained" color="secondary">
          Enter
        </Button>
      </Grid>

      <Grid item>
        <Typography variant="body2">
          Don't have a coupon code? Book an Appoinment
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EnterMeeting;
