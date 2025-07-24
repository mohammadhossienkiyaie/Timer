const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
function createWindow() {
    if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.focus();
        return;
    }
    mainWindow = new BrowserWindow({
        width: 350 ,
        height: 450 ,
        webPreferences :{
            nodeIntegration : true , 
            contextIsolation : false ,
        }
    });
    mainWindow.loadFile('fistPage.html');
    
    // mainWindow.webContent.openDevtools();

    mainWindow.on('closed' , () =>{
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();
})