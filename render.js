const startBtn = document.getElementById('startBtn');
const exitBtn = document.getElementById('exitBtn');
const minBtn = document.getElementById('minBtn');

startBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
})

document.addEventListener('DOMContentLoaded', ()=>{
    const {BrowserWindow} = require('@electron/remote');
    const currentWindow = BrowserWindow.getFocusedWindow(); 
    if(exitBtn){
        exitBtn.addEventListener('click' , function(){
            currentWindow.close();
        });
    }
});

document.addEventListener('click' , ()=>{
    const {BrowserWindow} = require('@electron/remote');
    const currentWindow = BrowserWindow.getFocusedWindow();
    if(minBtn){
        minBtn.addEventListener('click' , function(){
            currentWindow.minimize();
        });
    }
});