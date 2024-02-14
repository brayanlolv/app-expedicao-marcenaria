

function getTable( resultArray, columnsArray) {

    console.log("get table")

    let th = columnsArray.map((columnName) => `<th>${columnName}</th>`).join("")//fazer isso para os outros
    th = ` <tr> ${th} </tr> `
    let content = resultArray.map(row => {
        let tr = ""
        for (let i = 0; i < columnsArray.length; i++) {
            let data = row[columnsArray[i]]
            // console.log(data)
            tr += `<td> ${data}  </td>`
        }

        return `<tr class="tr" >${tr}</tr>`
    }).join("")
    //console.log(th+content)
    // tbody.innerHTML = th+content
    return(th+content)
}


 function getselect(resultArray,keys){

    console.log("get select")
    let result = resultArray.map((element)=>{
        return `<option values="${element.id}"> ${element.nome} </option>`
    }).join("")

    console.log(result)
    return result

}


module.exports = {getTable,getselect}


/////////////////////teste

// let teste = [
//     { id: 1, nome: '' },
//     { id: 9, nome: 'bora' },
//     { id: 2, nome: 'corredica' },
//     { id: 3, nome: 'dorbadica' },
//     { id: 7, nome: 'dsadsad' },
//     { id: 4, nome: 'parafuso' },
//     { id: 6, nome: 'piton' },
//     { id: 5, nome: 'puxador' },
//     { id: 8, nome: 'teste' }
//   ]
  

// getselect(teste,["id","nome"])

// const resultArray = [
//     { id: 1, nome: '', descricao: null, 'img-url': null },
//     { id: 2, nome: 'corredica', descricao: 'teste', 'img-url': null },
//     { id: 3, nome: 'dorbadica', descricao: 'teste', 'img-url': null },
//     { id: 4, nome: 'parafuso', descricao: 'teste', 'img-url': null }
// ]

// let x
// getTable(x, resultArray, ["id", "nome"])


