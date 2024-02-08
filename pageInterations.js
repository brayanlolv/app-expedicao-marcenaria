

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

module.exports = {getTable}


/////////////////////teste

// const resultArray = [
//     { id: 1, nome: '', descricao: null, 'img-url': null },
//     { id: 2, nome: 'corredica', descricao: 'teste', 'img-url': null },
//     { id: 3, nome: 'dorbadica', descricao: 'teste', 'img-url': null },
//     { id: 4, nome: 'parafuso', descricao: 'teste', 'img-url': null }
// ]

// let x
// getTable(x, resultArray, ["id", "nome"])


