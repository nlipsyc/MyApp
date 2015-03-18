import React from 'react';

module.exports = React.createClass({
  getInitialState: function() {
    return {sideMenuState: false};
  },
  sideMenuToggle: function(event) {
    this.setState({sideMenuState: !this.state.sideMenuState});
  },
  render: function() {
    var state = this.state.sideMenuState;
    return (
      <div className = "side-menu"
      <div className ={'navbar__hamburger'} onClick={this.sideMenuToggle}>
        <span>Menu</span>
      </div>


    );
  }
});
