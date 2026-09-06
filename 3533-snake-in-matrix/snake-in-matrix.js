/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let row =0
    let col=0
    for(let val of commands){
        if(val==="UP"){
            row --
        }else if (val ==="DOWN"){
            row ++
        }else if(val==="LEFT"){
            col --
        }else if(val==="RIGHT"){
            col++
        }
    }
    return (row*n)+col 
};