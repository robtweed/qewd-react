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

  component.handleChange = function(e) {
    // update display of field in input component:

    var fieldName = component.props.fieldname;
    var value = e.target.value;
    console.log(fieldName + ': ' + value);

    component.setState({
      value: value
    });

    // and then pass up to LoginModal parent component:

    controller.LoginModal.onLoginFieldChange({
      value: value,
      ref: fieldName
    });
  };

  component.validationState = function() {
    if (component.state.value.length === 0) return 'error';
  };

  return controller;
};
