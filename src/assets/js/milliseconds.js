// do dumb javascript milliseconds shtick
var startDate = new Date("2013-12-05");
setInterval(function() {
    var millisecondsElapsed = Date.now() - startDate;
    document.getElementById("timeElapsedSSS").innerHTML = millisecondsElapsed;
    document.getElementById("timeElapsedHR").innerHTML = (
        millisecondsElapsed /
        (1000 * 60 * 60 * 24 * 365)
    ).toFixed(3);
}, 11);
// enable tooltips
$(function() {
    $('[data-toggle="tooltip"].availability').tooltip({
        delay: {
            hide: 4000
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
});
