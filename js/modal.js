$(document).ready(function(){
  $(".video-icon").click(function() {
    $("#menu1").addClass("in active");
    $("#menu2").removeClass("in active");
    $(".video-tab").addClass("active");
  });
  $(".info-icon").click(function() {
    $("#menu2").addClass("in active");
    $("#menu1").removeClass("in active");
    $(".info-tab").addClass("active");
    $('video').trigger('pause');
  })
  $('body').on('hidden.bs.modal', '.modal', function () {
    $('video').trigger('pause');
 });
})