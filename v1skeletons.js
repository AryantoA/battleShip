var nextPlayer = true;
var tableSize = Number(document.getElementById("demo").value)
var movesState = []
function boardStateGen(ta){
    for ( var i = 0 ; i < ta ; i++){
        movesState.push(null)
    }
}
boardState(4)
console.log(movesState)
    