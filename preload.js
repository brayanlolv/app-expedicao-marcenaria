const { contextBridge, ipcRenderer } = require('electron')
const {getItems,add, getCostumers, getPedidos,getItems_pedidos} = require("./db_functions")
const {getTable} = require("./pageInterations")
const {pedidosWindow} = require("./windows")

window.addEventListener('DOMContentLoaded', async () => {
  function replaceText (selector, text){
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

contextBridge.exposeInMainWorld('db',{

  getItems:getItems,
  getCostumers:getCostumers,
  getTable : getTable,
  add:add,
  getPedidos:getPedidos,
  pedidosWindow:(arguments)=>{
    console.log("preload")
    console.log(arguments)
    ipcRenderer.send("pedidos-Window",arguments)},
    getItems_pedidos:getItems_pedidos
  }


)

