/*

 ----------------------------------------------------------------------------
 | qewd-react: React Client Modules for QEWD                                |
 |                                                                          |
 | Copyright (c) 2016-17 M/Gateway Developments Ltd,                        |
 | Reigate, Surrey UK.                                                      |
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

  17 January 2017

*/

module.exports = function (envObj, component, $, io) {

  // Here we do all the EWD-specific stuff

  envObj.on('ewd-registered', function() {
    component.setState({
      status: 'go'
    });
  });

  envObj.on('ewd-reregistered', function() {
    if (component.state.status === 'wait') {
      component.setState({
        status: 'go'
      });
    }
  });

  envObj.on('socketDisconnected', function() {
    if (component.state.status === 'wait') {
      component.setState({
        status: 'disconnected'
      });
    }
  });


  component.start = function(application) {
    envObj.start(application, $, io);
  };

  envObj.componentPaths = {};

  envObj.updateComponentPath = function(component) {
    // builds a React component hierarchy for the application
    var componentPath = component.props.componentPath;
    var path = componentPath.slice(0);
    path.push(component.constructor.displayName);
    var pathStr = JSON.stringify(path);
    if (!envObj[pathStr]) {
      console.log('Component path: ' + pathStr);
      envObj.send({
        type: 'updateComponentPath',
        params: {
          path: path
        },
        service: 'ewd-react-tools'
      });
      envObj[pathStr] = true;
    }
    return path;
  };

  return envObj;

};