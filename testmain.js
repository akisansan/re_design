var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');

var force_quit = false;
var menu = Menu.buildFromTemplate([
{
    label: 'Sample',
    submenu: [
        {label: 'About App', selector: 'orderFrontStandardAboutPanel:'},
        {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: function() {
                //force_quit=true;
                app.quit();
            }
        }
    ]
}]);

app.on('window-all-closed', function(){
    console.log("window-all-closed");
    if(process.platform != 'darwin')
        app.quit();
});

// This is another place to handle events after all windows are closed
app.on('will-quit', function () {
    // This is a good place to add tests insuring the app is still
    // responsive and all windows are closed.
    console.log("will-quit");
    mainWindow = null;
});

app.on('ready', function(){

    Menu.setApplicationMenu(menu);

    mainWindow = new BrowserWindow({width:800, height:600});

    // Continue to handle mainWindow "close" event here
    mainWindow.on('close', function(e){
        console.log("close");
        if(!force_quit){
            e.preventDefault();
            mainWindow.hide();
        }
    });

    // You can use 'before-quit' instead of (or with) the close event
    app.on('before-quit', function (e) {
        // Handle menu-item or keyboard shortcut quit here
        console.log("before-quit");
        force_quit = true;
    });

    app.on('activate-with-no-open-windows', function(){
        mainWindow.show();
    });
});
