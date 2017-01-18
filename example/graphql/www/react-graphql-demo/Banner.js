/*

 ------------------------------------------------------------------------------------
 | Template Banner module for QEWD React.js applications                            |
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
var ReactBootstrap = require('react-bootstrap');
var {
  Nav,
  Navbar,
  NavItem
} = ReactBootstrap;

var Banner = React.createClass({

  render: function() {

    //this.props.controller.updateComponentPath(this);

    return (
      <div>
        <Navbar inverse >
          <Navbar.Brand>
            {this.props.title}
          </Navbar.Brand>
          <Nav pullRight >
            <NavItem>Main</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

module.exports = Banner;


