 function tableGenerator(){
    var tableSize = Number(document.getElementById("demo").value)
    console.log("<table id='tablegenerator"+tableSize+"'>")

    var myTableDiv = document.getElementById("myDynamicTable");

    var table = document.createElement('TABLE');
    table.align="center"
    table.border='1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for ( var i = 0 ; i < tableSize ; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
            for ( var j = 0 ; j < tableSize ; j++){
                var td = document.createElement('TD');
                td.id ="row"+i+"column"+j 
                td.addEventListener("click",moves(this))
                td.appendChild(document.createTextNode("Cell " + i + "," + j));
                tr.appendChild(td);
            }

        }
        myTableDiv.appendChild(table);
    }
