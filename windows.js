const {BrowserWindow} = require('electron')
const { join } = require("path");

function pedidosWindow(arguments) {
    console.log(arguments.id)
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, "preload.js"),
            sandbox: false,//uai ????   
        },
        globals: {id: 17}
    })
    win.loadFile('pages/details/pedidos-details.html')
}

module.exports = {pedidosWindow}