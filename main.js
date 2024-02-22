const { app, BrowserWindow,ipcMain} = require('electron')
//gn gen out/Release-x86 --args="import(\"//electron/build/args/release.gn\") target_cpu=\"x86\""
//gn gen out/Release-x86 --args="import(\"//electron/build/args/release.gn\") target_cpu=\"x64\""
// let result =db.select("*").from("teste")
// // console.log(result)
// result.then((rows)=>console.log(rows))

function createWindow() {
  const { join } = require("path");
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
  ipcMain.on("pedidos-Window",(event,args)=>{
    console.log(args)
    const {pedidosWindow} = require("./windows.js")
    pedidosWindow(args)
  });
  
  createWindow()

});


app.on("window-all-closed", () => {
  // Your Code
});





