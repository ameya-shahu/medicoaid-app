import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Divider, List, ListItemText } from '@material-ui/core';

function LinearProgressWithLabel(props) {
  let values = props.value;
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          values,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  bar: {
    height: '15px',
    borderRadius: '4px',
  },
}));

export default function LinearWithValueLabel(props) {
  var progressData = props.data.confidence * 100;
  const classes = useStyles();

  const themes = createMuiTheme({
    palette: {
      primary: {
        main: props.color,
      },
    }
  });

  console.log(props.color)
  return (
    <div className={classes.root}>
      <List>
        <Divider className='mt-2' />
        <ListItemText>{props.data.label}</ListItemText>
        <ThemeProvider theme={themes}>
          <LinearProgressWithLabel color='primary' className={classes.bar} value={progressData} />
        </ThemeProvider>
      </List>
    </div>
  );
}