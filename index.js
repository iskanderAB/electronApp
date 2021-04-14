const electron = require('electron');

const {app ,BrowserWindow } = electron ; 


app.on('ready' , ()=> {
    console.log('hello');
    const mainWindiw = new BrowserWindow({});
    mainWindiw.loadURL(`file://${__dirname}/index.html`);
});