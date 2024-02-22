
const knex = require("knex")

let db = require("knex")({
  client: "sqlite3",
  connection: "./myteste.db",
  useNullAsDefault: true
})

//brayanlolv2



async function add(table, insertParam = {}) {
  console.log("add")
  db(table).insert(insertParam).then(`adicionado à ${table}`).catch(err => console.log("deu ruim, " + err))
}

async function getCostumers({ id = null, name = null, telefone = null, cpf = null, email = null } = {}) {
  let whereParam = {}
  if (typeof (id) == "number") { whereParam.id = id }
  else if (name) { whereParam.nome = name }
  else if (cpf) whereParam.cpf = cpf
  else if (email) whereParam.email = email
  else if (telefone) whereParam.email = email
  const result = await db.select("*").from("clientes").where(whereParam)
  // console.log(result)
  return result

}
//pedrof0199



async function getItemsSelect() {
  const result = await db.select("id","nome").from("items")
   console.log(result)
  return result
}

async function getItems({ id = null, name = null } = {}) {
  let whereParam = {}
  if (typeof (id) == "number") { whereParam.id = id }
  else if (name) { whereParam.nome = name }
  const result = await db.select("*").from("items").where(whereParam)
  // console.log(result)
  return result
}


async function getItems({ id = null, name = null } = {}) {
  let whereParam = {}
  if (typeof (id) == "number") { whereParam.id = id }
  else if (name) { whereParam.nome = name }
  const result = await db.select("*").from("items").where(whereParam)
  // console.log(result)
  return result
}

async function getPedidos({ id = null, codigo = null, cliente_id = null, } = {}, name) {
  let whereParam = {}
  if (id) whereParam.id = id
  else if (codigo) whereParam.codigo = codigo
  else if (cliente_id) whereParam.cliente_id = cliente_id
  const result = await db.select("*").from("pedidos").where(whereParam)

  if (!name) {
    // console.log(result)
    return result
  }
  console.log("bora")

  for(let i = 0;i < result.length;){
    await getCostumers({ id: result[i].cliente_id }).then((costumer) => {
      // console.log(costumer[0].nome)
      result[i].nome = costumer[0].nome
      // console.log(result[i])
      i++
    })
  }

  // result.map(async (row) => {
    //   console.log(row.cliente_id)
    

  // }) nao funcionou o async do jeito q precisava
  // console.log("result")
  // console.log(result)
  return result

}

async function getItems_pedidos(id,details = false){
  
  const result = await db.select("*").from("pedidos_itens").where({pedido_id:id})

  if(!details)return  result

  for(let i = 0;i < result.length;){
    await getItems({ id: result[i].item_id }).then((item) => {
      // console.log(item)
      result[i].nome = item[0].nome
      result[i].descricao = item[0].descricao
      result[i].img_url = item[0].img_url

      i++
    })
  }
  // console.log(result)
  return result

}


async function getItems_ambientes(id,details = false){
  
  const result = await db.select("*").from("ambientes_itens").where({pedido_id:id})

  if(!details)return  result

  for(let i = 0;i < result.length;){
    await getItems({ id: result[i].item_id }).then((item) => {
      // console.log(item)
      result[i].nome = item[0].nome
      result[i].descricao = item[0].descricao
      result[i].img_url = item[0].img_url

      i++
    })
  }
  // console.log(result)
  return result

}

async function getAmbientes(pedido_id){

  const result = await db.select("*").from("pedidos_ambiente").where({pedido_id:pedido_id})
  console.log(result)
  return result
} 

// getAmbientes(1)

// getPedidos({}, true)
module.exports = { getItems, add, getCostumers, getPedidos,getItems_pedidos,getItemsSelect, getAmbientes,getItems_ambientes }

//  let x = async()=>{
//  console.log(await getItems_pedidos(2,{nome:true})) 
// }
// x()



////////////////////////teste await
// insert("items",{
//   nome:"puxador",  
//   descricao:"serve para puxar"
// })
//insert("items")


//module.exports = db

// getCostumers({cpf:"123456789"})
// add("items",{nome:"piton",descricao:"serve para por prateleiraS"})// ta funcionando

//  getItems()