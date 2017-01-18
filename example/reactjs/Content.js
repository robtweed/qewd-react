/*

 ------------------------------------------------------------------------------------
 | Template Content module for QEWD React.js applications                           |
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

var Content = React.createClass({

  getInitialState: function() {
    return {
      status: 'initial'
    }
  },

  componentWillMount: function() {
    // add your Content module-specific augmentation of the controller here...
    this.controller = require('./controller-Content')(this.props.controller, this);
  },

  componentDidMount: function() {
    this.sendTestMessage('hello from browser!');
  },

  render: function() {

    //var componentPath = this.controller.updateComponentPath(this);

      return (
        <div>
          Main content goes here.  Replace this with your app's content-handling modules
        </div>
      );

  }
});

module.exports = Content;
