//$(document).ready(function(){
//  //при нажатию на любую кнопку, имеющую класс .btn
//  $(".consult").click(function() {
//    //открыть модальное окно с id="modalConsult"
//    $("#modalConsult").modal('show');
//  });
//  $(".order").click(function() {
//    //открыть модальное окно с id="modalConsult"
//    $("#modalOrder").modal('show');
//  });
//   $(".call").click(function() {
//    //открыть модальное окно с id="modalConsult"
//    $("#modalCall").modal('show');
//  });
//  
//});
$(window).on("load", function () {
  //$(window).load(function() {
  $(".consult").click(function () {
    $("#modalConsult").modal('show');
  });

  $(".order").click(function () {
    $("#modalOrder").modal('show');
  });

  $(".call").click(function () {
    $("#modalCall").modal('show');
  });

  $('#modalConsult').on('shown.bs.modal', function () {
    $('#inputName1').focus();
  });

  $('#modalOrder').on('shown.bs.modal', function () {
    $('#inputName2').focus();
  });

  $('#modalCall').on('shown.bs.modal', function () {
    $('#inputName3').focus();
  });

//  $('#open-menu').click(function () {
//    $("#menu").css("display", "block;");
//  });

  
   $('#open-menu').click(function( e ) {
       /*
           вместо $("selector").click( observer ) можно использовать синтаксис вида
                  $("selector").on( 'click', observer );
       */
       e.preventDefault(); // отменяем стандартное поведение

       // изменение стиля в нашем случае можно сделать так
       // этот способ быстрее всего, но применять его лучше не надо
       // хотя если сильно важна производительность - пишите так
//       document.getElementByID("menu").style.display = 'block';

       // или так
       $("#menu").css("display","block");
       // или так
//       $("#enterblock").show();
   });
  
  
    
   $('#close-menu').click(function( e ) {
       e.preventDefault();
       $("#menu").css("display","none");
   });
  

});
