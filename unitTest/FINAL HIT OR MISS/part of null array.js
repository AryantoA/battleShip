movesState : []
shipState : []
function boardStateGen(){
    var tableSizes = 4
    for ( var i = 0 ; i < tableSizes ; i++){
        var tempAr =[]
        var shipAr =[]
        this.movesState.push(tempAr)
        this.shipState.push(shipAr)
        for ( var j = 0 ; j < tableSizes ; j++){
            var x = Math.random() < 0.5 ? 1 : 2;
            tempAr.push(null)
            shipAr.push(x)
    }
}
}

boardStateGen()
console.log(movesState)
console.log(shipState)