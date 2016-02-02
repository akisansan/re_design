/*'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();
var mainWindow = null;
var willAppQuit = false;

app.on('closed', function() {
  if (process.platform != 'win32')
  console.log("close");
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('close', function(event){
    // Minimize or hide the window for close button.
    if(!willAppQuit){ // avoid [Ctrl|Cmd]+Q
      event.preventDefault();
      switch (process.platform){
        case 'win32':
        console.log(willAppQuit);
        willAppQuit = true;
          mainWindow.minimize();
          //mainWindow.hide();
          break;
        case 'darwin':
        console.log("OK");
          //mainWindow.hide();
          break;
        default:
      }
    }
  });
});

app.on('before-quit', function(){
  willAppQuit = true;
});


*/




'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
		if (process.platform != 'darwin')
			app.quit();
	});

app.on('ready', function() {
		mainWindow = new BrowserWindow({width: 1800, height: 1200});
		mainWindow.loadUrl('file://' + __dirname + '/index.html');
		mainWindow.on('closed', function() {
				mainWindow = null;
			});
	});
