import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from './styles/ColorBoxStyles';
import { withStyles } from '@material-ui/styles';


class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 2500);
    });
  }
  render() {
    const { name, background, moreUrl, showFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className={classes.colorBox}>
          <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>COPIED!</h1>
            {/* <p>{name}</p> */}
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>
                {name}
              </span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard> 
    );
  }
}

export default withStyles(styles)(ColorBox);