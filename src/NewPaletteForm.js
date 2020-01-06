import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import PaletteFormNav from "./PaletteFormNav";
// import ColorPickerForm from "./ColorPickerForm";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
// import DraggableColorList from "./DraggableColorList";
// import { arrayMove } from "react-sortable-hoc";
import styles from "./styles/NewPaletteFormStyles";
import seedColors from "./seedColors";
import { ChromePicker } from "react-color";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: 'teal',
      colors: ['purple', '#E15764']
      // colors: seedColors[0].colors
    }
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor() {
    this.setState({ colors: [...this.state.colors, this.state.currentColor] });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteFull = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        {/* <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        /> */}
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                color='secondary'
                onClick={this.clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant='contained'
                className={classes.button}
                color='primary'
                onClick={this.addRandomColor}
                // disabled={paletteFull}
              >
                Random Color
              </Button>
            </div>
            <ChromePicker
              color={this.state.currentColor}
              onChangeComplete={this.updateCurrentColor}
            />
            <Button
                variant='contained'
                // className={classes.button}
                color='default'
                style={{ backgroundColor: this.state.currentColor }}
                onClick={this.addNewColor}
                // disabled={paletteFull}
              >
                Add Color
              </Button>
            {/* <ColorPickerForm
              paletteFull={paletteFull}
              addNewColor={this.addNewColor}
              colors={colors}
            /> */}
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <ul>
            {this.state.colors.map(color => (
              <li style={{ backgroundColor: color }}>{color}</li>
            ))}
          </ul>
          {/* <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
            distance={20}
          /> */}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);