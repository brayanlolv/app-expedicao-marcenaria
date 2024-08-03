const {app,BrowserWindow} = require('electron');
const path = require('path'); 

const { request } = require('http');
const { join } = require("path");
const url = require('url')

function pedidosWindow(arguments) {

  console.log("window")
  console.log(arguments.windowpath)



    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, "preload.js"),
            sandbox: false,//uai ????   
            additionalArguments: ["myvarvalue", "secondvarvalue", "--another=something"]
        }
    })
    // win.loadFile('pages/details/pedidos-details.html')
    win.loadURL(url.format({
        slashes: true,
        protocol: 'file:',
       // pathname: path.resolve(app.getAppPath(),"src/",arguments.windowpath),
       pathname:join(__dirname,arguments.windowpath),
        query: {
          test: 'test',
          id:arguments.id
        }
      }));
}

module.exports = {pedidosWindow}