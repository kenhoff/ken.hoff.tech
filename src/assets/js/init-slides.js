$.deck(".slide", {
    hashPrefix: '',
})
hljs.initHighlightingOnLoad();
$(".location").text(window.location).prop("href", window.location)

$(document).bind("deck.change", function(event, from, to) {
    newURL = [window.location.href.split("#")[0], to].join("#")
    $(".location").text(newURL).prop("href", newURL)
})
