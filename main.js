const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron')

const { join } = require("path");
require("./db_functions.js")
const {pedidosWindow} = require("./windows.js")


// let result =db.select("*").from("teste")
// // console.log(result)
// result.then((rows)=>console.log(rows))


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      preload:join(__dirname,"preload.js"),
      sandbox: false,//uai ????
    }
  })
  
  win.loadFile('index.html')
  
}



app.whenReady().then(async () => {
  ipcMain.on("pedidos-Window",pedidosWindow);
  
  createWindow()

});


app.on("window-all-closed", () => {
  // Your Code
});





