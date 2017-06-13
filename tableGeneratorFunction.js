 function tableGenerator(){
//                var tableSize = Number(document.getElementById("demo").value)
     console.log("<table id=/'tablegenterator"+tableSize+"/'>")
     var tableSize = 4
                console.log(typeof tableSize)
                for ( var i = 0 ; i < tableSize ; i++) {
                    console.log("<tr row =" + i +">");
                    for ( var j = 0 ; j < tableSize ; j++){
                        console.log("<td column =" + j+ ">")
                        }
                   
                }
     console.log("</table>")
}
    
tableGenerator()