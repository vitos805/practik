

function myFunction() {

	var a = "100", b ="% Пора что-то менять!!! Часики тикают...";
  d = a + b;
document.getElementById("paragraph").innerHTML= d;
alert ("100%, Дружище!!!");
paragraph.style.color = "green";
}

var myVar = setInterval(function() {
  myTimer();
}, 1000);

window.onload = function() {
  setInterval(function() {
    // Seconds
    var seconds = new Date().getSeconds();
    document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;

    // Minutes
    var minutes = new Date().getMinutes();
    document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;

    // Hours
    var hours = new Date().getHours();
    document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
  }, 1000);
}
$(document).ready(function(){
  $("footer").mouseenter(function(){
    alert("Это дно, дружище!");
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
  });
});
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Финансовая грамотность");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Уверенность в себе</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Счастье и благополучие");
  });
});