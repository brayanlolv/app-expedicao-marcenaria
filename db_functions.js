const { where } = require("sequelize")
const { contextBridge, ipcRenderer } = require('electron')
const knex = require("knex")
console.log("db function")

let db = require("knex")({
  client: "sqlite3",
  connection: "../myteste.db",
  useNullAsDefault: true
})

async function add(table,insertParam = {}){
  console.log("add")
  db(table).insert(insertParam).then(`adicionado à ${table}`).catch(err=>console.log("deu ruim, "+ err))
}

async function getCostumers({id = null, name = null,telefone = null,cpf=null,email=null} = {}){
  let whereParam = {}
  if(typeof(id)=="number" ){whereParam.id = id}
  else if(name){whereParam.nome = name}
  else if(cpf) whereParam.cpf = cpf
  else if(email) whereParam.email=email
  else if(telefone) whereParam.email=email
  const  result = await db.select("*").from("clientes").where(whereParam)
  console.log(result)
  return result

}

async function getItems({ id = null, name = null } = {}) {
  let whereParam = {}
  if(typeof(id)=="number" ){whereParam.id = id}
  else if(name){whereParam.nome = name}
  const  result = await db.select("*").from("items").where(whereParam)
  console.log(result)
  return result
}

getCostumers({cpf:"123456789"})
// add("items",{nome:"piton",descricao:"serve para por prateleiraS"})// ta funcionando

//  getItems()
module.exports = { getItems,add, getCostumers}





////////////////////////teste
// insert("items",{
//   nome:"puxador",
//   descricao:"serve para puxar"
// })
//insert("items")


//module.exports = db