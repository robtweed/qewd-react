/*

 ----------------------------------------------------------------------------
 | qewd-react: React Client Modules for QEWD                                |
 |                                                                          |
 | Copyright (c) 2016-19 M/Gateway Developments Ltd,                        |
 | Redhill, Surrey UK.                                                      |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://www.mgateway.com                                                  |
 | Email: rtweed@mgateway.com                                               |
 |                                                                          |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  16 April 2019

*/

"use strict"

var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var ewdClient = require('ewd-client');
var ewdController = require('./controller');

module.exports = function(params) {

  var io;
  if (!params.no_sockets) io = require('socket.io-client');
  var $;
  if (!params.ajax) $ = require('jquery');

  var EWD = ewdClient.EWD;
  //console.log('cwd = ' + process.cwd());
  EWD.application = {
    name: params.applicationName || 'unknown',
    mode: params.mode || 'development',
    log: params.log || true
  };

  EWD.log = params.log || false;

  //console.log('EWD = ' + JSON.stringify(EWD));
  var MainPage = params.MainPage;

  var Top = createReactClass({

    getInitialState: function() {

      var status = 'wait';
      if (params.config.mode === 'local') status = 'ok'; 
      return {
        status: status,
      }
    },

    componentWillMount: function() {

      // set up EWD.js-specific context

      this.controller = ewdController(EWD, this, $, io);
    },


    componentDidMount: function() {
      if (params.config.mode === 'local') return;

      if (params.log) console.log('starting EWD');
      var startParams = {
        application: EWD.application.name,
        cookieName: params.cookieName,
        url: params.url,
        io: io,
        $: $,
        jwt: params.jwt
      };
      this.start(startParams);
    },

  render: function render() {

    var componentPath = ['app'];

    var renderComponent;
    if (this.state.status === 'wait') {
      renderComponent = React.createElement(
        'div',
        null,
        'Please wait...'
      );
    } else {
      renderComponent = React.createElement(MainPage, {
        controller: this.controller,
        componentPath: componentPath,
        status: this.state.status,
        config: params.config
      });
    }

    return renderComponent;
  }
});

ReactDOM.render(React.createElement(Top, null), document.getElementById('content'));
};

