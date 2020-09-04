import PropTypes from "prop-types";

import Layout from "../components/Layout";
import AppointmentForm from "../components/assistance/appointmentForm";
import EnterMeeting from "../components/assistance/enterMeeting";

import { Grid, Typography, Divider, makeStyles, Paper, Tabs, Tab, Box, colors } from "@material-ui/core";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      align="left"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box style={{ padding: 20 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    height: "100%",
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: colors.grey[200],
  },

  container: {
    marginTop: 90,
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

const Assistance = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div>
        <Grid container>
          <Grid item lg={2}></Grid>

          <Grid item lg={8}>
            <div className={classes.container}>
              <Typography variant="h3">Assistance</Typography>

              <Divider classes={{ root: classes.divider }} />

              <Typography variant="body1">
                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                cup of frozen peas along with the mussels, if you like. This impressive paella is a perfect party dish
                and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if
                you like.
              </Typography>

              <Paper
                style={{
                  position: "relative",
                  height: 300,
                  marginTop: 20,
                  padding: 10,
                }}
              >
                <Grid container style={{ height: "100%" }}>
                  <Grid item lg={3}>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={value}
                      onChange={handleChange}
                      className={classes.tabs}
                    >
                      <Tab label="Book Appointment" {...a11yProps(0)} />
                      <Tab label="Start Appointment" {...a11yProps(1)} />
                    </Tabs>
                  </Grid>

                  <Grid item lg={9}>
                    <TabPanel value={value} index={0}>
                      <AppointmentForm />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <EnterMeeting />
                    </TabPanel>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>

          <Grid item lg={2}></Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Assistance;
