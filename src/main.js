const { app, BrowserWindow,ipcMain} = require('electron')
const { join } = require("path");
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
  
  win.loadFile(join(__dirname, "index.html"))
  
}



app.whenReady().then(async () => {//direi um async
  //habilita o "front " chamar funcoes do back (especificamente banco de dados)
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





