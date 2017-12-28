$(document).ready(function(){
  //при нажатию на любую кнопку, имеющую класс .btn
  $(".consult").click(function() {
    //открыть модальное окно с id="modalConsult"
    $("#modalConsult").modal('show');
  });
  $(".order").click(function() {
    //открыть модальное окно с id="modalConsult"
    $("#modalOrder").modal('show');
  });
   $(".call").click(function() {
    //открыть модальное окно с id="modalConsult"
    $("#modalCall").modal('show');
  });
});