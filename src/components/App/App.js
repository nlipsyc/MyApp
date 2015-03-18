/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import './App.less';

import React from 'react';
import invariant from 'react/lib/invariant';
import NavigationMixin from './NavigationMixin';
import AppStore from '../../stores/AppStore';
import Navbar from '../Navbar';
import ContentPage from '../ContentPage';
import ReportPage from '../ReportPage';
import NotFoundPage from '../NotFoundPage';

export default React.createClass({

  mixins: [NavigationMixin],

  propTypes: {
    path: React.PropTypes.string.isRequired,
    onSetTitle: React.PropTypes.func.isRequired,
    onSetMeta: React.PropTypes.func.isRequired,
    onPageNotFound: React.PropTypes.func.isRequired
  },

  render() {
    var page = AppStore.getPage(this.props.path);
    invariant(page !== undefined, 'Failed to load page content.');
    this.props.onSetTitle(page.title);
    this.props.sideMenuToggle =

    if (page.type === 'notfound') {
      this.props.onPageNotFound();
      return React.createElement(NotFoundPage, page);
    }

       sideMenuToggle: function() {
      sideMenuState: !sideMenuState;
    }

    return (
      <div className="App">
        <Navbar />
        {
         <div className="Title">
            <h2>{page.title}</h2>
          </div>
        }
        <ReportPage className="report__container" {...page} />
        <div className="navbar-footer">
          <div className="container">
            //<p className="text-muted">
            //  <span>© KriaSoft</span>
            //  <span><a href="/">Home</a></span>
            //  <span><a href="/privacy">Privacy</a></span>
            //</p>
          </div>
        </div>
      </div>
    );
  }

});
