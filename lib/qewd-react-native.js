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

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import './userAgent';
import io from 'socket.io-client/socket.io';
import {EWD} from 'ewd-client';
import ewdController from './controller';
 
module.exports = function(params) {

    var MainPage = params.mainPage;
    var application = params.application;
    if (params.log === true) EWD.log = true;
	EWD.application = {
	  name: application
	};

	class reactApp extends Component {

	  constructor(props) {
		super(props);
		this.state = {
		  status: 'wait'
		};
	  }
  
	  componentWillMount() {
		this.controller = ewdController(EWD, this);
	  }
  
	  componentDidMount() {
		if (EWD.log) console.log('starting EWD');
		this.start({
		  application: application,
		  io: io,
		  url: params.url
		});
	  }

	  render() {

		console.log('status = ' + this.state.status);
	
		if (this.state.status === 'wait') {
		  return (
			<View style={styles.container}>
			  <Text style={styles.welcome}>
				Please wait..
			  </Text>
			</View>
		  );
		}
		else {
		  return (
			<MainPage
			  controller = {this.controller}
			/>
		  );
		}
	  }
	}

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

	AppRegistry.registerComponent(application, () => reactApp);

};

