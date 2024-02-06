const { contextBridge, ipcRenderer } = require('electron')
const {getItems,add} = require("./db_functions")
const {getTable} = require("./pageInterations")

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
  getTable : getTable,
  add:add
}


)
