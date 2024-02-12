const {BrowserWindow} = require('electron')
const { join } = require("path");

function pedidosWindow(arguments) {
 
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, "preload.js"),
            sandbox: false,//uai ????
        },
        // globals: {id: 17}
    })
    console.log(arguments)
     win.loadURL(`pages/details/pedidos-details.html?id=${arguments}&teste=teste`)
    // win.loadFile('pages/details/pedidos-details.html?',)
      
}

module.exports = {pedidosWindow}