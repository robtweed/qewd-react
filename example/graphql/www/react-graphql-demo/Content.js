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

var ReactBootstrap = require('react-bootstrap');

var {
  Button,
  FormControl,
  FormGroup,
  ControlLabel
} = ReactBootstrap;

var Content = React.createClass({

  getInitialState: function() {
    return {
      status: 'initial',
      schema: 'myGQLSchema-es6',
      queryText: '{patient(id: "2") {id, name, town, country}}',
      customQueryResults: ''
    }
  },

  componentWillMount: function() {
    this.controller = require('./controller-Content')(this.props.controller, this);
  },

  componentDidMount: function() {
    //this.sendTestMessage('hello from browser!');
  },

  render: function() {

    if (this.props.status !== 'initial') {
      return (
        <div>
          Welcome to the GraphQL Demonstration App
          <div>&nbsp;</div>
          <FormGroup
            controlId='querySchema'
          >
            <ControlLabel>GraphQL Schema</ControlLabel>
            <FormControl
              type='text'
              value={this.state.schema}
              placeholder='Enter schema module name'
              onChange={this.onSchemaChange}
              style={{width: 300 + 'px'}}
            />
          </FormGroup>

          <FormGroup
            controlId='queryText'
          >
            <ControlLabel>GraphQL Query</ControlLabel>
            <FormControl
              type='text'
              value={this.state.queryText}
              placeholder='Enter a query'
              onChange={this.onQueryTextChange}
              style={{width: 800 + 'px'}}
            />
          </FormGroup>
          <div>
            <Button onClick={this.runCustomGraphQLQuery} bsStyle='success'>Run Your GraphQL Query</Button>
          </div>
          <div>&nbsp;</div>
          <div>
            &nbsp;{this.state.customQueryResults}
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
});

module.exports = Content;
