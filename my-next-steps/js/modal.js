$(document).ready(function(){
    $(".video-icon").click(function() {
      $("#menu1").addClass("in active");
      $("#menu2").removeClass("in active");
      $("#menu3").removeClass("in active");
      $(".video-tab").addClass("active");

      $(".info-tab").removeClass("active");
    });

    $(".info-icon").click(function() {
      $("#menu2").addClass("in active");
      $("#menu1").removeClass("in active");
      $(".video-tab").removeClass("active");
      $(".info-tab").addClass("active");
    });
  
    $('body').on('hidden.bs.modal', '.modal', function () {
      $('video').trigger('pause');
   });
    $(".video-tab").click(function(){
        $('#vid2').trigger('pause');
    });
    $(".video-tab2").click(function(){
        $('#vid1').trigger('pause');
    });
    $(".info-tab").click(function(){
        $('#vid1').trigger('pause');
        $('#vid2').trigger('pause');
    });
  });