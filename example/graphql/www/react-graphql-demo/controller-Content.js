/*

 ------------------------------------------------------------------------------------
 | Example module controller for ewd-xpress React.js applications                   |
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

module.exports = function (controller, component) {

  component.runCustomGraphQLQuery = function() {
    var message = {
      type: 'graphQLQuery',
      params: {
        query: component.state.queryText,
        schema: component.state.schema
      }
    };
    controller.send(message, function(messageObj) {
      if (!messageObj.message.error) {
        var resultObj = messageObj.message.result;
        var results;
        if (resultObj.data) {
          results = 'Results: ' + JSON.stringify(resultObj.data);
        }
        else {
          results = 'Error: ' + JSON.stringify(resultObj.errors);
        }
        component.setState({
          customQueryResults: results
        });
      }
    });
  };

  component.onQueryTextChange = function(e) {
    component.setState({
      queryText: e.target.value
    });
  };

  component.onSchemaChange = function(e) {
    component.setState({
      schema: e.target.value
    });
  };

  return controller;
};
