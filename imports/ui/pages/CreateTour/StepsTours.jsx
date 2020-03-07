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

const customStyle = theme => ({
  ...styles(theme)
});

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
      activeStep: 0,
      tourId : null
    };
  }
  componentDidMount() {
    if (!this.props.loggingIn && !this.props.loggedIn) {
      return this.props.history.push(ROUTES.SIGN_IN);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.loggingIn && !nextProps.loggedIn) {
      nextProps.history.push(ROUTES.SIGN_IN);
      return false;
    }
    return true;
  }

  stepOneSubmit(e) {
    this.incrementStep();
    return;
  }

  handleNext = e => {
    const { activeStep } = this.state;
    switch (activeStep) {
      case 0:
        this.stepOneSubmit(e);
        break;
      case 1:
        break;
      case 2:
        break;
      default:
        debugger;
    }
  };

   incrementStep = () => {
    this.setState({ activeStep: ++this.state.activeStep });
  };
   decrementStep = () => {
    this.setState({ activeStep: --this.state.activeStep });
  };

   handleBack = () => {
    this.decrementStep();
  };

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      classes,
      loggingIn,
      loggedIn,
      handleBack,
      handleNext
    } = this.props;
    const { errMsg, succMsg, activeStep } = this.state;
    if (loggingIn) {
      return TEXT.LOADING_TEXT;
    }
    if (!loggedIn) {
      return null;
    }



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

    const steps = [
      { title: "Tour Title", content: stepOne },
      { title: "Tour Images", content: stepTwo },
      { title: "Tour Cover", content: stepThree }
    ];

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
          type="submit"
          disabled={pristine || submitting}
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
            <form
              className={classes.form}
              onSubmit={handleSubmit(this.handleNext)}
            >
              <Stepper
                style={{ background: "transparent" }}
                activeStep={activeStep}
                orientation="vertical"
              >
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{step.title}</StepLabel>
                    <StepContent>
                      {step.content}
                      {stepButtons}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && stepsCompleted}
            </form>
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
  withStyles(customStyle),
  reduxForm({
    form: "HorizontalLinearStepper",
    validate
  })
)(HorizontalLinearStepper);
