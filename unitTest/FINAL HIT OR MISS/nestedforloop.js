var movesState = []
var shipState = []
function boardStateGen(){
    var tableSizes = Number(document.getElementById("demo").value)
  

    for ( var i = 0 ; i < tableSizes ; i++){
            var tempAr =[]
            var shipAr =[]
            movesState.push(tempAr)
            shipState.push(shipAr)
            for ( var j = 0 ; j < tableSizes ; j++){
            var x = Math.random() < 0.5 ? 1 : 2;
            
            tempAr.push(null)
            shipAr.push(x)
            
    }
    console.log("hello")
}