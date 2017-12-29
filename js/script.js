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
  
//  $('#inputName4').focus();


});
