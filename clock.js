function set_clock() {
    var d = new Date();
    function to2digit(i) { return i < 10 ? "0" + i : "" + i;}
    document.getElementById("clock").innerHTML = to2digit(d.getHours()) + ":" + to2digit(d.getMinutes()) + ":" + to2digit(d.getSeconds());
}
set_clock();
setInterval(set_clock, 500);