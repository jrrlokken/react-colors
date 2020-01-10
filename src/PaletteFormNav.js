import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import classNames from "classnames";
import { CssBaseline, AppBar, Button, Toolbar, Typography, IconButton, withStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none'
    }
  },
  button: {
    margin: '0 0.5rem',
  }
});


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
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A Palette
            </Typography> 
          </Toolbar>
          <div className={classes.navBtns}>
            
            <Link to='/'>
              <Button variant='contained' color='secondary' className={classes.button}>GO BACK</Button>
            </Link>
            <Button variant='outlined' color='primary' onClick={this.showForm} className={classes.button}>
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