$(window).on("load", function () {  
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
    $('#inputYourName1').focus();
  });

  $('#modalOrder').on('shown.bs.modal', function () {
    $('#inputYourName2').focus();
  });

  $('#modalCall').on('shown.bs.modal', function () {
    $('#inputYourName3').focus();
  });


  $('#open-menu').click(function (e) {

    e.preventDefault(); // отменяем стандартное поведение

    // изменение стиля в нашем случае можно сделать так
    // этот способ быстрее всего, но применять его лучше не надо
    // хотя если сильно важна производительность - пишите так
    //       document.getElementByID("menu").style.display = 'block';

    // или так
    $("#menu").css("display", "block");
    // или так
    //       $("#enterblock").show();
  });



  $('#close-menu').click(function (e) {
    e.preventDefault();
    $("#menu").css("display", "none");
  });


  //  $('.slider-for').slick({
  //    slidesToShow: 1,
  //    slidesToScroll: 1,
  //    arrows: false,
  //    fade: true,
  //    asNavFor: '.slider-nav'
  //  });
  //  $('.slider-nav').slick({
  //    slidesToShow: 3,
  //    slidesToScroll: 1,
  //    asNavFor: '.slider-for',
  //    dots: true,
  //    focusOnSelect: true
  //  });
  //
  //  $('a[data-slide]').click(function (e) {
  //    e.preventDefault();
  //    var slideno = $(this).data('slide');
  //    $('.slider-nav').slick('slickGoTo', slideno - 1);
  //  });


  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      },
    ]

  });

});
