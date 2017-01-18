/*

 ------------------------------------------------------------------------------------
 | Template MainPage component for QEWD React Native applications                   |
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

  18 January 2017

*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import controllerModule from './controller-MainPage';

var controller;

export default class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'initial'
    };
  }
  
  componentWillMount() {
    controller = controllerModule(this.props.controller, this);
  }

  componentDidMount() {
    this.testSend();
  }

  render() {

      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            myQEWDApp has started!!!
          </Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

