import React from "react";
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
import { Field, reduxForm } from "redux-form";
import { TEXT } from "../../constants/Text";
import { THEME } from "../../constants/themes";
import { Container, CssBaseline } from "@material-ui/core";

function getSteps() {
  return ["Tour title", "Tour photos", "Tour cover"];
}

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

    const steps = getSteps();

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
    const stepOne = <div>Step one</div>;
    const stepTwo = <div>Step Two</div>;
    const stepThree = <div>Step one</div>;
    const stepper = (
      <Stepper orientation="vertical" activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
    return (
      <div className={classes.root}>
        <Header theme={THEME.BLACK} {...this.props} />
        <Container className={classes.content} component="main" maxWidth="sm">
          <CssBaseline />
          <div>
            {stepper}
            <div>
              {activeStep === steps.length ? (
                stepsCompleted
              ) : (
                <div>
                  {activeStep == 0 ? stepOne : null}
                  {activeStep == 1 ? stepTwo : null}
                  {activeStep == 2 ? stepThree : null}
                  {stepButtons}
                </div>
              )}
            </div>
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
  withStyles(styles)
  // reduxForm({
  //   form: "HorizontalLinearStepper",
  //   validate
  // })
)(HorizontalLinearStepper);
