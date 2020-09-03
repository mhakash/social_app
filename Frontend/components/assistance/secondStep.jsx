import {
  Button,
  Typography,
  FormControl,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

const SecondStep = ({ time, type, setStep, setFormData }) => {
  const handleMeetingTypeChange = (event) => {
    setFormData("meetingType", event.target.value);
  };

  const handleMeetingTimeChange = (event) => {
    setFormData("meetingTime", event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h5">Step 2</Typography>

      <div style={{ marginTop: 10 }}>
        <Typography variant="body1">Please select a meeting type:</Typography>

        <FormControl>
          <RadioGroup value={type} onChange={handleMeetingTypeChange}>
            <Grid container>
              <Grid item>
                <FormControlLabel
                  value="text"
                  control={<Radio />}
                  label="Text Messaging"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="voice"
                  control={<Radio />}
                  label="Voice Call"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="video"
                  control={<Radio />}
                  label="Video Call"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        <Typography variant="body1">
          Please select your convenient time for the meeting:
        </Typography>

        <FormControl>
          <RadioGroup value={time} onChange={handleMeetingTimeChange}>
            <Grid container>
              <Grid item>
                <FormControlLabel
                  value="morning"
                  control={<Radio />}
                  label="10AM-12PM"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  value="afterNoon"
                  control={<Radio />}
                  label="2PM-4PM"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </div>

      <div style={{ position: "absolute", bottom: 10, right: 10 }}>
        <Button onClick={() => setStep(1)}>Back</Button>
        <Button onClick={() => setStep(3)}>Submit</Button>
      </div>
    </React.Fragment>
  );
};

export default SecondStep;
