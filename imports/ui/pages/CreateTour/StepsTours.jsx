import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import Header from "../../components/Header/Header";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../styles/styles";
import { compose } from "redux";
import { TEXT } from "../../constants/Text";
import { THEME } from "../../constants/themes";
import { Container, CssBaseline } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "../../components/Forms/Forms";
import StepContent from "@material-ui/core/StepContent";

const validate = values => {
  const errors = {};
  const requiredFields = ["Title"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field} is required.`;
    }
  });
  return errors;
};
class HorizontalLinearStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errMsg: null,
      succMsg: null,
      activeStep: 0
    };
  }
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      classes,
      loggingIn,
      loggedIn
    } = this.props;
    const { errMsg, succMsg, activeStep } = this.state;
    if (loggingIn) {
      return TEXT.LOADING_TEXT;
    }
    if (!loggedIn) {
      return null;
    }

    const handleNext = () => {
      this.setState({ activeStep: ++this.state.activeStep });
    };

    const handleBack = () => {
      this.setState({ activeStep: --this.state.activeStep });
    };

    const stepsCompleted = (
      <div>
        <Typography className={classes.instructions}>
          All steps completed - you&apos;re finished
        </Typography>
      </div>
    );

    const stepOne = (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {errMsg ? <Alert severity="error">{errMsg}</Alert> : null}
          {succMsg ? <Alert severity="success">{succMsg}</Alert> : null}
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name={TEXT.TITLE}
            type="Title"
            variant="outlined"
            component={renderTextField}
            label={TEXT.TITLE}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name={TEXT.DESC}
            type="Password"
            variant="outlined"
            component={renderTextField}
            label={TEXT.DESC}
            multiline
            rows="4"
          />
        </Grid>
      </Grid>
    );
    const stepTwo = (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {errMsg ? <Alert severity="error">{errMsg}</Alert> : null}
          {succMsg ? <Alert severity="success">{succMsg}</Alert> : null}
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name={TEXT.TITLE}
            type="Title"
            variant="outlined"
            component={renderTextField}
            label={TEXT.TITLE}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name={TEXT.DESC}
            type="Password"
            variant="outlined"
            component={renderTextField}
            label={TEXT.DESC}
            multiline
            rows="4"
          />
        </Grid>
      </Grid>
    );
    const stepThree = (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {errMsg ? <Alert severity="error">{errMsg}</Alert> : null}
          {succMsg ? <Alert severity="success">{succMsg}</Alert> : null}
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name={TEXT.TITLE}
            type="Title"
            variant="outlined"
            component={renderTextField}
            label={TEXT.TITLE}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            name={TEXT.DESC}
            type="Password"
            variant="outlined"
            component={renderTextField}
            label={TEXT.DESC}
            multiline
            rows="4"
          />
        </Grid>
      </Grid>
    );

    const steps = [stepOne, stepTwo, stepThree];
    const stepButtons = (
      <div>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
        >
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    );
    return (
      <div className={classes.root}>
        <Header theme={THEME.BLACK} {...this.props} />
        <Container className={classes.content} component="main" maxWidth="sm">
          <CssBaseline />
          <div>
            <Stepper style={{background:'transparent'}} activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel>Step One</StepLabel>
                  <StepContent>
                    {step}
                    {stepButtons}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  reduxForm({
    form: "HorizontalLinearStepper",
    validate
  })
)(HorizontalLinearStepper);
