//n can be any number >= 1
function growth(nClick){
    grow = calculate(nClick);
    return '{"name": "tree'+ grow + '", "src": "image/img' + grow + '.svg"}';
}

function calculate(n){
    var ans = 4 * Math.log(n)/Math.log(2);
    return Math.floor(ans)
}

