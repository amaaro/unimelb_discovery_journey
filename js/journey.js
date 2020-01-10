$(document).ready(function(){
    $( "#item-menu1" ).hover(
        function() {
          $( this ).addClass('glow1').children('.menu-name1').show();
        }, function() {
          $( this ).removeClass( 'glow1' ).children('.menu-name1').hide();
        }
    );
    $( "#item-menu2" ).hover(
        function() {
          $( this ).addClass('glow2').children('.menu-name2').show();
        }, function() {
          $( this ).removeClass( 'glow2' ).children('.menu-name2').hide();
        }
    );
    $( "#item-menu3" ).hover(
        function() {
          $( this ).addClass('glow3').children('.menu-name3').show();
        }, function() {
          $( this ).removeClass( 'glow3' ).children('.menu-name3').hide();
        }
    );
    $( "#item-menu4" ).hover(
        function() {
          $( this ).addClass('glow4').children('.menu-name4').show();
        }, function() {
          $( this ).removeClass( 'glow4' ).children('.menu-name4').hide();
        }
    );
    $( "item-#menu5" ).hover(
        function() {
          $( this ).addClass('glow5').children('.menu-name5').show();
        }, function() {
          $( this ).removeClass( 'glow5' ).children('.menu-name5').hide();
        }
    );
    $( "#item-menu6" ).hover(
        function() {
          $( this ).addClass('glow6').children('.menu-name6').show();
        }, function() {
          $( this ).removeClass( 'glow6' ).children('.menu-name6').hide();
        }
    );
    $( "#item-menu7" ).hover(
        function() {
          $( this ).addClass('glow7').children('.menu-name7').show();
        }, function() {
          $( this ).removeClass( 'glow7' ).children('.menu-name7').hide();
        }
    );
    $( "#item-menu8" ).hover(
        function() {
          $( this ).addClass('glow8').children('.menu-name8').show();
        }, function() {
          $( this ).removeClass( 'glow8' ).children('.menu-name8').hide();
        }
    );
});