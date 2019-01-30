import React, { Component } from 'react';
import { compose } from 'redux';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedWindowList from './WindowList';
import ConnectedWorkspaceSettings from './WorkspaceSettings';
import ConnectedWorkspaceExport from './WorkspaceExport';

/**
 */
export class WorkspaceMenu extends Component {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);
    this.state = {
      windowListAnchorEl: null,
      settingsAnchorEl: null,
      exportAnchorEl: null,
    };
    this.handleWindowListClick = this.handleWindowListClick.bind(this);
    this.handleWindowListClose = this.handleWindowListClose.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handleSettingsClose = this.handleSettingsClose.bind(this);
    this.handleExportClick = this.handleExportClick.bind(this);
    this.handleExportClose = this.handleExportClose.bind(this);
  }

  /**
   * @private
   */
  handleWindowListClick(event) {
    this.setState({
      windowListAnchorEl: event.currentTarget,
    });
  }

  /**
   * @private
   */
  handleWindowListClose() {
    this.setState({
      windowListAnchorEl: null,
    });
  }

  /**
   * @private
   */
  handleSettingsClick(event) {
    this.setState({
      settingsAnchorEl: event.currentTarget,
    });
  }

  /**
   * @private
   */
  handleSettingsClose() {
    this.setState({
      settingsAnchorEl: null,
    });
  }

  /**
   * @private
   */
  handleExportClick(event) {
    this.setState({
      exportAnchorEl: event.currentTarget,
    });
  }

  /**
   * @private
   */
  handleExportClose() {
    this.setState({
      exportAnchorEl: null,
    });
  }


  /**
   * render
   * @return
   */
  render() {
    const { handleClose, anchorEl } = this.props;
    const { windowListAnchorEl, settingsAnchorEl, exportAnchorEl } = this.state;

    return (
      <>
        <Menu id="workspace-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            aria-haspopup="true"
            onClick={(e) => { this.handleWindowListClick(e); handleClose(e); }}
            aria-owns={windowListAnchorEl ? 'window-list-menu' : undefined}
          >
            <ListItemIcon>
              <ViewHeadlineIcon />
            </ListItemIcon>
            <Typography varient="inherit">List all open windows</Typography>
          </MenuItem>
          <Divider />
          <MenuItem
            aria-haspopup="true"
            onClick={(e) => { this.handleSettingsClick(e); handleClose(e); }}
            aria-owns={settingsAnchorEl ? 'workspace-settings' : undefined}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <Typography varient="inherit">Settings</Typography>
          </MenuItem>
          <MenuItem
            aria-haspopup="true"
            onClick={(e) => { this.handleExportClick(e); handleClose(e); }}
            aria-owns={exportAnchorEl ? 'workspace-export' : undefined}
          >
            <ListItemIcon>
              <SaveAltIcon />
            </ListItemIcon>
            <Typography varient="inherit">Download/export workspace</Typography>
          </MenuItem>
        </Menu>
        <ConnectedWindowList
          anchorEl={windowListAnchorEl}
          open={Boolean(windowListAnchorEl)}
          handleClose={this.handleWindowListClose}
        />
        <ConnectedWorkspaceSettings
          open={Boolean(settingsAnchorEl)}
          handleClose={this.handleSettingsClose}
        />
        <ConnectedWorkspaceExport
          open={Boolean(exportAnchorEl)}
          handleClose={this.handleExportClose}
        />
      </>
    );
  }
}

WorkspaceMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

WorkspaceMenu.defaultProps = {
  anchorEl: null,
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
const mapDispatchToProps = {};

/**
 * @private
 */
const styles = theme => ({
});


const enhance = compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
  // further HOC go here
);

export default enhance(WorkspaceMenu);
