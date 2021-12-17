/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var $output, WebinstatsPlugin;
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    WebinstatsPlugin = window.WebinstatsPlugin;
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    var wis_uid = localStorage.getItem('uid');
    console.log('wis_uid',wis_uid);
    var maps = {
        's':'1549',
        '_cburl':'//wis.webinstats.com/',
        'wistest':'cordova'
    };
    document.getElementById('wis-message').addEventListener('click',function(){
        console.log('create event');
        maps.event = 'SepeteEkle';
        WebinstatsPlugin.createEvent(maps);
        alert('clicked create event button');

    });
    document.getElementById('wis-message-remove').addEventListener('click',function(){
        console.log('remove event');
        maps.event = 'RemoveCart';
        WebinstatsPlugin.createEvent(maps);
        alert('clicked remove event button');

    });
    document.getElementById('wis-pageview').addEventListener('click',function(){

        WebinstatsPlugin._execute('pageview','//wis.webinstats.com',maps);
        alert('sent pageview');

    });
    WebinstatsPlugin.initWebinstats('1549','//wis.webinstats.com/');
    WebinstatsPlugin.onRemoteNotificationClick(function(payload){
        console.log('webinstats_log : payload --> ',JSON.stringify(payload));
    });

}
