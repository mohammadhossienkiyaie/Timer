const { app, BrowserWindow } = require('electron');
const path = require('path');

const remote = require('@electron/remote/main');
remote.initialize();

let mainWindow;
function createWindow() {
    if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.focus();
        return;
    }
    mainWindow = new BrowserWindow({
        width: 300,
        height: 500,
        frame: false,
        resizable: false,
        maximizable: false,
        icon: path.join('img', 'eggPic-icon.ico'),
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    remote.enable(mainWindow.webContents);
    mainWindow.loadFile('fistPage.html');

    mainWindow.webContent.openDevtools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();
})