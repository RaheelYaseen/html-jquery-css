$(document).ready(function () {
   $("#eggs").click(function () {
       $(this).hide();
   });
    $("#image").dblclick(function () {
        $(this).hide();
    });
$(".registration").mouseenter(function () {
    alert("for registration click register yourself");
});
$(".a1").hover(function () {
   alert("You entered p1");
},
function () {
    alert("now u leave p1");});


$("#hide").click(function () {
    $("#p1").hide();
});
    $("#show").click(function () {
        $("#p1").show();
    });
$("#fade").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeOut("slow");
    $("#div3").fadeToggle(3000);


});
    $("#btn1").click(function(){
        $("p").append(" <b>on button1 click this will be written</b>.");
    });/*The append() method inserts specified content at
    the end of the selected elements.*/
    $("#btn2").click(function(){
        $("ul").prepend("<li>Appended Item</li>");
    /*To insert content at the beginning of
    the selected elements, use the prepend() method*/
    });
    $(".button").click(function(){
        $("#div4").remove();
    });
    
});
