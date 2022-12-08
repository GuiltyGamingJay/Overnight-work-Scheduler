
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var twelveAm = $("#12am");
var oneAm = $("#01am");
var twoAm = $("#02am");
var threeAm = $("#03am");
var fourAm = $("#04am");
var fiveAm = $("#05am");
var sixAm = $("#06am");
var sevenAm = $("#07am");
var eightAm = $("#08am");
var nineAm = $("#09am");
var TenAm = $("#10am");

var hour = moment().hours();
var userInput;
var hourSpan;




var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("12:00 am"));
 twelveAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("01:00 am"))
  oneAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("02:00 am"))
  twoAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("03:00 am"))
  threeAm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("04:00 am"))
  fourAm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("05:00 am"))
  fiveAm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("06:00 am"))
  sixAm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("07:00 am"))
  sevenAm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("08:00 am"))
  eightAm.val(init5);
  
  var init6 = JSON.parse(localStorage.getItem("09:00 am"))
 nineAm.val(init6);
  
  var init7 = JSON.parse(localStorage.getItem("10:00 am"))
  TenAm.val(init7);
} 

function background () {
      
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
;
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()


  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  // Button for clear the day
  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});