//n can be any number >= 1

function growth(n){
    var ans = 15 * Math.log(n)/Math.log(20);
    return Math.floor(ans)
}