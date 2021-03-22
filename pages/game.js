var counter = 0;
var x = setInterval(function() {
    counter +=1;
    document.getElementById("test").innerHTML = counter;
}, 1000);
