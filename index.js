const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const {app ,BrowserWindow , ipcMain} = electron ;

let mainWindow;
app.on('ready' , ()=> {
    console.log('server app started ... ');
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit',(e,path)=> {
    console.log('received path : ', path);
    ffmpeg.ffprobe(path, function(err, metadata) {
        mainWindow.webContents.send(
            'video:metadata',
            metadata.format.duration
        );
    });
});
