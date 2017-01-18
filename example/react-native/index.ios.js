/*

 ------------------------------------------------------------------------------------
 | Template index.ios.js for QEWD React Native applications                         |
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

import ewdReactNative from 'qewd-react/lib/qewd-react-native';

import MainPage from './MainPage';

console.log(1111);
ewdReactNative({
  application: 'myQEWDApp', 
  url: 'http://192.168.1.180:8080/',  // change the IP address/port appropriately! 
  mainPage: MainPage,
  log: true
});

