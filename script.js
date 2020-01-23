$(".top-left").click(function(){
   $(".clickBox").text("Thank you for clicking on me!");
   $(".top-left").css("background-color", "green");
});

$(".top-right").dblclick(function(){
   $(".dblclick").text("You double clicked on me!!!");
   $(".top-right").css("background-color","red");
});
$(".bottom-left").hover(function(){
   $(".hover").text("You hovered over me!");
   $(".bottom-left").css("background-color", "pink");
});
$(".bottom-right").mouseenter(function(){
   $(".mouseenter").text("wow!");
   $(".bottom-right").css("background-color", "yellow");
});
$(".otherBox").mouseleave(function(){
   $(".mouseleave").text("omg!");
   $(".otherBox").css("background-color", "blue");
});
