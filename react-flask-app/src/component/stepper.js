import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Mediacard from './card';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['8th JUNE', '9th JUNE', '10th JUNE'];
}

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
       return 'today';
      case 1:
        return 'yesterday';      
      default:
        return 'daybeforeyesterday';
    }
  }
  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} active>
            <StepLabel>{label}</StepLabel>
            <StepContent>
                <Mediacard cardContent={props.data[getStepContent(index)]}/>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}