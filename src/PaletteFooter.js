import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
  const { paletteName, emoji, classes, showFullPalette } = props;
  return (
    <div className={classes.PaletteFooter}>
      {showFullPalette && (
        <Link to='/'>
          <Button
            variant='contained'
            color='secondary'
            size='small'
            className={classes.button}
            startIcon={<ArrowBackIcon />}
          >
            BACK
          </Button>
        </Link>
      )}

      <footer>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </div>
  );
}

export default withStyles(styles)(PaletteFooter);
