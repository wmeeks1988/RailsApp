// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?
'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+
'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(document). ready(function(){

$(".message-box").css("border", "2px solid red");
$(".message-box").on("keyup", function(){
    //console.log("keyup happened"); //
    var charCount=$('.message-box').val().length;//setting the variable charCount
     console.log(charCount);
     $('#char-count').html(charCount);
      if (charCount > 50){
        $('#char-count').css('color',"red");
      } else {
        $('char-count').css('color', "black");
      }
    });// end keyup function
  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function(){
     var href= $.attr(this, 'href');
     $root.animate({
         scrollTop: $(href).offset().top
       }, 500, function() {
         window.location.hash = href;
       });
       return false;
     });
     //Tooltips
     $(function () {
        $('[data-toggle="tooltip"]').tooltip();
     });
     // Submit button
     $('#button-text').on('click', function() {
       var comment = $('.message-box').val();
       if ($(".message-box").val() === "") {
       $("#text-area").css("border", "1px solid red");
     } else {
         $('#visible-comment').html(comment);
         $('.message-box').hide();
       }
     });
     // work section
     for(var i=0; i < works.length; ++i){
       $("#work").append("\
       <div class='col-sm-6 col-md-3'>\
        <a href='"+works[i].url +"' class='work-img'>\
          <img class='img-responsive' src='"+works[i].pic +"'>\
           <span class='info'><p class='proj-title'>Title:</p>"+works[i].title +"</span>\
        </a>\
        </div>\
      ");
      $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });
      var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
     };
   })
   var map;
   function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 40.571368, lng: -111.935824},
       zoom: 8
     });
   }
