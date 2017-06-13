//adding the onclick and  function to let the board able to click on it
function tableGenerator(){
        var tableSize = Number(document.getElementById("demo").value)
        //this is only for checking
        console.log("<table id='tablegenerator"+tableSize+"'>")

        var myTableDiv = document.getElementById("myDynamicTable");
     
        var table = document.createElement('TABLE');
        table.align="center"
        table.border='1';
   
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
        tableBody.id= "table1"
       
        for ( var i = 0 ; i < tableSize ; i++) {
            var tr = document.createElement('TR');
            tr.setAttribute("row",i)
            tableBody.appendChild(tr);
            
                for ( var j = 0 ; j < tableSize ; j++){
                    var td = document.createElement('TD');
                    td.setAttribute("column",j);
                    td.id ="row"+i+"column"+j 
// adding click on it  
//                    td.addEventListener("click", moves(box))
                    td.setAttribute('onclick', 'hitOrMiss(this)' )
                    td.appendChild(document.createTextNode("Cell " + i + "," + j));
                    tr.appendChild(td);
                }

            }
            myTableDiv.appendChild(table);
        }




var nextPlayer = true;

var movesState = []
var shipState = []
function boardStateGen(){
    var tableSizes = Number(document.getElementById("demo").value)
  

    for ( var i = 0 ; i < tableSizes ; i++){
            tempAr =[]
            shipAr =[]
            var x = Math.random() < 0.5 ? 1 : 2;
            movesState.push(tempAr)
            shipState.push(shipAr)
            tempAr.push(null)
            shipAr.push(x)
            
    }
    console.log("hello")
}


function genTable(){
    tableGenerator();
    boardStateGen()
}

function hitOrMiss(boxes){
    var row= boxes.parentElement.getAttribute('row');
    var column = boxes.getAttribute('column');
    if(movesState[row][column] == null) {
        console.log(shipState[row][column])
        if(shipState[row][column] == 1) {
                
				movesState[row][column] = 'x';
               populateBoard(movesState)
                //box.innerHTML = "X";
        } else {
				movesState[row][column] = 'missed';
                
                
                //box.innerHTML = "O";
            populateBoard(movesState)
			}
    } else {
			alert('grow up. you can\'t do that')
    };
}

function populateBoard(boardNow){
    var tableSizes = Number(document.getElementById("demo").value)
    // changes done here with .children removed.
    var board = document.getElementById('table1').children;
	var row;
	var column;
	for(var i = 0; i < tableSizes; i++) {
		row = board[i].children;
		for(var j = 0; j < tableSizes; j++) {
			column = row[j];
			column.innerHTML= boardNow[i][j];
            console.log(boardNow)
		};
	};
};

