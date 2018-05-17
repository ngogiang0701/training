// function beforeText() {
//     var txt1 = "<b>I </b>";                    // Create element with HTML
//     var txt2 = $("<i></i>").text("love ");     // Create with jQuery
//     var txt3 = document.createElement("b");    // Create with DOM
//     txt3.innerHTML = "jQuery!";
//     $("nav").before(txt1, txt2, txt3);    // Insert new elements before img
// }

$(document).ready(function(){

  var txt1 = "<b>I </b>";                    // Create element with HTML
    var txt2 = $("<i></i>").text("love ");     // Create with jQuery
    var txt3 = document.createElement("b");    // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("a.navbar-brand").before(txt1, txt2, txt3);    // Insert new elements before img

});