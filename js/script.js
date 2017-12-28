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
    //открыть модальное окно с id="modalConsult"
    $("#modalConsult").modal('show');
  });
  $(".order").click(function () {
    //открыть модальное окно с id="modalConsult"
    $("#modalOrder").modal('show');
  });
  $(".call").click(function () {
    //открыть модальное окно с id="modalConsult"
    $("#modalCall").modal('show');
  });

  //  $("#flexiselDemo1").flexisel();




  $("#flexiselDemo2").flexisel({
    visibleItems: 4,
    itemsToScroll: 3,
    animationSpeed: 200,
    infinite: true,
    navigationTargetSelector: null,
    autoPlay: {
      enable: false,
      interval: 5000,
      pauseOnHover: true
    },
    responsiveBreakpoints: {
      portrait: {
        changePoint: 480,
        visibleItems: 1,
        itemsToScroll: 1
      },
      landscape: {
        changePoint: 640,
        visibleItems: 2,
        itemsToScroll: 2
      },
      tablet: {
        changePoint: 768,
        visibleItems: 3,
        itemsToScroll: 3
      }
    },
    loaded: function (object) {
      console.log('Slider loaded...');
    },
    before: function (object) {
      console.log('Before transition...');
    },
    after: function (object) {
      console.log('After transition...');
    },
    resize: function (object) {
      console.log('After resize...');
    }
  });
});
