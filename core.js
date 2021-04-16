const electron = require('electron');
const {ipcRenderer} = electron ;
document.querySelector('form').addEventListener('submit',(e)=> {
    e.preventDefault();
    if(document.querySelector('input').files[0]){
        const { path } = document.querySelector('input').files[0] ;
        ipcRenderer.send('video:submit',path);
        console.log("submitted ... ");
    }
    else {
        console.log("select a video first ! ");
    }
    ipcRenderer.on('video:metadata',(e,duration)=> {
        document.querySelector('h3').innerHTML = ` duration : ${duration}`;

    })

});
