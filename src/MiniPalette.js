import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal'
  },
  secondary: {
    backgroundColor: 'pink',
    '& h1': {
      color: 'white',
      '& span': {
        backgroundColor: 'yellow'
      }
    }
  }
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1>MiniPalette</h1>
      <section className={classes.secondary}>
        <h1>MiniPalette<span>asdfasdf</span></h1>
        <span>asdfasdf</span>
      </section>
    </div>
  );  
}

export default withStyles(styles)(MiniPalette);
