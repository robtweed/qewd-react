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

  component.password = '';
  component.username = '';

  controller.LoginModal = {
    onLoginFieldChange: function(inputObj) {
      console.log('onFieldChange - ' + inputObj.ref + '; ' + inputObj.value);
      component[inputObj.ref] = inputObj.value;
    }
  };

  component.handleKeyDown = function(e) {
    // enter key pressed
    if (e.charCode === 13) {
      component.handleLogin();
    }
  };

  component.handleLogin = function() {

    console.log('handleLogin: component.username = ' + component.username);

    if (component.username === '') {
      controller.displayError('You must enter a username');
      return;
    }

    if (component.password === '') {
      controller.displayError('You must enter a password');
      return;
    }

    // send login message
    //   response handler subscription is in parent component (MainPage)

    controller.send({
      type: 'login',
      params: {
        username: component.username,
        password: component.password
      }
    });
  };

  return controller;
};
