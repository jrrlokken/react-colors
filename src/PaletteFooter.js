import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <div className={classes.PaletteFooter}>
      <Link to="/">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
        >
          GO BACK
        </Button>
      </Link>
      <footer>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </footer>
    </div>
  );
}

export default withStyles(styles)(PaletteFooter);
