
function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = addZero (m);
    s = addZero (s);
    timer=" AM"
    if(h>12){
        h-=12;
        timer=" PM"
    }


    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + timer;
    var t = setTimeout(startTime, 500);
}

function addZero (n){
    if (n<10) {n = "0" +n}; 
    return n ;

    
}

