/*

 ------------------------------------------------------------------------------------
 | Template MainPage module for QEWD React.js applications                          |
 |                                                                                  |
 | Copyright (c) 2016-17 M/Gateway Developments Ltd,                                |
 | Reigate, Surrey UK.                                                              |
 | All rights reserved.                                                             |
 |                                                                                  |
 | http://www.mgateway.com                                                          |
 | Email: rtweed@mgateway.com                                                       |
 |                                                                                  |
 |                                                                                  |
 | Licensed under the Apache License, Version 2.0 (the "License");                  |
 | you may not use this file except in compliance with the License.                 |
 | You may obtain a copy of the License at                                          |
 |                                                                                  |
 |     http://www.apache.org/licenses/LICENSE-2.0                                   |
 |                                                                                  |
 | Unless required by applicable law or agreed to in writing, software              |
 | distributed under the License is distributed on an "AS IS" BASIS,                |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.         |
 | See the License for the specific language governing permissions and              |
 |  limitations under the License.                                                  |
 ------------------------------------------------------------------------------------

  17 January 2017

*/

"use strict"

var React = require('react');
var ReactToastr = require('react-toastr');
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

// Now your application's next-level modules...

var Banner = require('./Banner');
var LoginModal = require('./LoginModal');
var Content = require('./Content');

// ============

var controller;
var title = 'GraphQL Demo App';

var MainPage = React.createClass({

  getInitialState: function() {
    return {
      status: 'initial'
    }
  },

  componentWillMount: function() {
    // load and augment the controller for this module...
    controller = require('./controller-MainPage')(this.props.controller, this);
  },

  componentDidMount: function() {
    //this.props.controller.toastr('warning', 'started!');
  },

  render: function() {

     console.log('this.showLoginModal = ' + this.showLoginModal);
     console.log('this.state.status = ' + this.state.status);

     return (
      <div>
        <Banner
          title = {title}
          controller = {controller}
        />

        <ToastContainer 
          ref="toastContainer"
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
          newestOnTop={true}
          autoDismiss={true}
          target="body"
        />

        <LoginModal
          controller = {controller}
          show = {this.showLoginModal}
        />

        <Content
          controller = {controller}
          status = {this.state.status}
        />

      </div>

    );
  }
});

module.exports = MainPage;
