// do dumb javascript milliseconds shtick
setInterval(function() {
    var millisecondsElements = document.getElementsByClassName("milliseconds-now")
    for (var millisecondElement of millisecondsElements) {
        millisecondElement.innerHTML = new Date().valueOf();
    }
    var msLocale = document.getElementsByClassName("locale-now")
    for (var msLocale of msLocale) {
        msLocale.innerHTML = new Date().toLocaleString();
    }
    document.get
}, 11);
console.log("init")
