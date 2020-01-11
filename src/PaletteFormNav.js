import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import classNames from "classnames";
import { CssBaseline, AppBar, Button, Toolbar, Typography, IconButton, withStyles } from "@material-ui/core";
// import PaletteTwoToneIcon from '@material-ui/icons/PaletteTwoTone';
import LaunchIcon from '@material-ui/icons/Launch';
import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: '',
      formShowing: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  hideForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const { classes, open, palettes, handleSubmit } = this.props;
    const { newPaletteName } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <LaunchIcon />
            </IconButton>
            <Typography
              variant='h6'
              color='inherit'
              noWrap
            >
              Create A Color Palette
            </Typography> 
          </Toolbar>
          <div className={classes.navBtns}>
            
            <Link to='/'>
              <Button variant='outlined' color='primary' className={classes.button}>GO BACK</Button>
            </Link>
            <Button variant='contained' color='secondary' onClick={this.showForm} className={classes.button}>
              Save
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />
        )}
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);