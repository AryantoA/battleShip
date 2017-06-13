// adding the click x into the row and coloum
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
       
        for ( var i = 0 ; i < tableSize ; i++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
                for ( var j = 0 ; j < tableSize ; j++){
                    var td = document.createElement('TD');
                    td.id ="row"+i+"column"+j 
// adding click on it  
//                    td.addEventListener("click", moves(box))
                    td.setAttribute('onclick', 'moves(this)' )
                    td.appendChild(document.createTextNode("Cell " + i + "," + j));
                    tr.appendChild(td);
                }

            }
            myTableDiv.appendChild(table);
        }




var playerState = true;

var movesState = []
var shipState = []
function boardStateGen(){
    var tableSizes = Number(document.getElementById("demo").value)
  
    var tempAr =[]
    var shipAr =[]
    for ( var i = 0 ; i < tableSizes ; i++){
            var x = Math.floor((Math.random() * 2) + 1)
            movesState.push(tempAr)
            shipState.push(shipAr)
            tempAr.push(null)
            shipAr.push(x)
            
    }
    console.log("hello")
}


function genTable(){
    tableGenerator();
    boardStateGen();
}

//function moves(box){
//    if (nextPlayer) {
//		box.innerHTML = "X";
//		nextPlayer =!nextPlayer;
//		
//	}else {
//		box.innerHTML = "O";
//		nextPlayer =!nextPlayer;
//	}
//}

function hitOrMiss(boxes){
    var row= boxes.parentElement.getAttribute('row');
    var column = boxes.getAttribute('column');
    if(this.movesState[row][column] == null) {	
			if(shipStates == 1) {
				//this.movesState[row][column] = 'x';
                box.innerHTML = "X";
			} else {
				//this.movesState[row][column] = 'o';
                box.innerHTML = "O";
			}
    } else {
			alert('grow up. you can\'t do that')
		};
	},
}
