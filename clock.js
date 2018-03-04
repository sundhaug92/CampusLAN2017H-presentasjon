var clock_mode = "";
function set_clock() {
    var d = new Date();
    function to2digit(i) { return i < 10 ? "0" + i : "" + i;}
    document.getElementById("clock").innerHTML = to2digit(d.getHours()) + ":" + to2digit(d.getMinutes()) + ":" + to2digit(d.getSeconds());
    if (d > 6 && d < 22) {
        if (clock_mode!="night")console.log("Clock: Night-mode");
        document.getElementById("clock").style.backgroundColor = "#0000007f";
        clock_mode = "night";
    }
    else {
        if(clock_mode!="day")console.log("Clock: Day-mode");
        document.getElementById("clock").style.backgroundColor = "#000000ff";
        clock_mode = "day";
    }
}
set_clock();
setInterval(set_clock, 500);