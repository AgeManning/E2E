import React from "react";
import { connect } from 'react-redux';
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/Custom/CustomInput.jsx";
import Button from "components/Custom/Button.jsx";

import headerLinksStyle from "assets/jss/components/headerLinksStyle";

class HeaderLinks extends React.Component {

  state = {
    notificationOpen: false,
    accountOpen: false
  };

  handleNotificationClick = () => {
      this.setState({ notificationOpen: !this.state.notificationOpen });
  };

  handleAccountClick = () => {
      this.setState({ accountOpen: !this.state.accountOpen });
  };

  handleNotificationClose = () => {
      this.setState({ notificationOpen : false });
      this.setState({ accountOpen : false });
  };

  handleAccountClose = () => {
      this.setState({ accountOpen : false });
  };

  render() {
    const { classes, accounts } = this.props;
    const { notificationOpen, accountOpen } = this.state;

    
    return (
      <div>
        <Manager className={classes.manager}>
          <Target>
            <Button
              color={window.innerWidth > 959 ? "transparent" : "white"}
              justIcon={window.innerWidth > 959}
              simple={!(window.innerWidth > 959)}
              aria-label="Notifications"
              aria-owns={notificationOpen ? "menu-list" : null}
              aria-haspopup="true"
              onClick={this.handleNotificationClick}
              className={classes.buttonLink}
            >
              <Notifications className={classes.icons} />
              <span className={classes.notifications}>5</span>
              <Hidden mdUp>
                <p onClick={this.handleNotificationClick} className={classes.linkText}>
                  Notifications
                </p>
              </Hidden>
            </Button>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={notificationOpen}
            className={
              classNames({ [classes.popperClose]: !notificationOpen }) +
              " " +
              classes.pooperResponsive
            }
          >
            <ClickAwayListener onClickAway={this.handleNotificationClose}>
              <Grow
                in={notificationOpen}
                id="menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handleNotificationClose}
                      className={classes.dropdownItem}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleNotificationClose}
                      className={classes.dropdownItem}
                    >
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleNotificationClose}
                      className={classes.dropdownItem}
                    >
                      You're now friend with Andrew
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleNotificationClose}
                      className={classes.dropdownItem}
                    >
                      Another Notification
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleNotificationClose}
                      className={classes.dropdownItem}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
        <Manager className={classes.manager}>
          <Target>
            <Button
              color={window.innerWidth > 959 ? "transparent" : "white"}
              justIcon={window.innerWidth > 959}
              simple={!(window.innerWidth > 959)}
              aria-label="Person"
              className={classes.buttonLink}
              onClick={this.handleAccountClick}
            >
              <Person className={classes.icons} />
              <Hidden mdUp>
                <p className={classes.linkText}>Profile</p>
              </Hidden>
            </Button>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={accountOpen}
            className={
              classNames({ [classes.popperClose]: !accountOpen }) +
              " " +
              classes.pooperResponsive
            }
          >
            <ClickAwayListener onClickAway={this.handleAccountClose}>
              <Grow
                in={accountOpen}
                id="menu-list-2"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    { accounts.status === "PENDING" && 
                      <p> Loading put Spinner here </p> }
                    { accounts.status === "FAILURE" && 
                      <p> Couldnt get accounts </p> }
                    { accounts.status === "UNKNOWN" &&
                      <p> No Accounts Loaded Yet </p> }
                    { accounts.status === "SUCCESS" && accounts.value.length > 0 &&
                      accounts.value.map((value, key) => {
                        return (
                          <MenuItem
                            key={key}
                            onClick={this.handleAccountClose}
                            className={classes.dropdownItem}
                          >
                          Account: {key},{value}
                          </MenuItem>
                        )})
                   }
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }
}

const headerLinks = withStyles(headerLinksStyle)(HeaderLinks);

// add redux state





const mapStateToProps = state => {
  return {
    accounts: state.web3.accounts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // do nothing
    }
}

export default HeaderLinks = connect(
  mapStateToProps,
  mapDispatchToProps)(headerLinks)

