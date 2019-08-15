$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    
    return is_ie; 
  }

  if (isIE()){
console.log('It is InternetExplorer');
$('body').addClass('ie')
}else{
    console.log('It is NOT InternetExplorer');
}

  $(".nav__list-left .nav__item").click(function () {
    if ($(this).attr("data-target")) {
      let data = $(this).attr("data-target");
      $(".menu__point").hide();
      $(".nav__item").removeClass("active_item");
      $(".overlay").show();
      $('[data-item="' + data + '"]').toggle();
      $(this).toggleClass("active_item");
    }
  });
  $("span.close, .overlay").click(function () {
    $(".menu__point").hide();
    $(".nav__item").removeClass("active_item");
    $(".overlay").hide();
  });

  $(".categories__block").click(function () {
    $(".categories__block")
      .addClass("categories__block-opacity")
      .removeClass("active__block");
    $(this).addClass("active__block");
    let data_target = $(this).attr("data-target");
    let data_class = $(this).attr("data-class");
    let data_new = $(this)
      .find("img")
      .attr("data-new");

    $(".tabs__opened")
      .removeClass("tabs__yellow tabs__red tabs__blue")
      .addClass(data_class);
    $(".categories__block img").each(function () {
      let data_old = $(this).attr("data-old");
      $(this).attr("src", data_old);
    });
    // $('.categories__choose').addClass('active');
    //
    $(this)
      .find("img")
      .attr("src", data_new);
    $(this).removeClass("categories__block-opacity");
    $(".category__opened, .nomination__opened").hide();
    $(".nomination__opened." + data_target).show();
  });
  $(".choose__block").click(function () {
    $(".choose__block")
      .removeClass("active__choose")
    $(this)
      .addClass("active__choose");
    $('.modal').slideDown(300);
    let data = $(this).attr("data-target");
    $(".choose__outer .block").hide();
    $('.block[data-target="' + data + '"]').show();
    let nomination_name = $('.categories__block.active__block span').text();
    $('.nomination__name').text(nomination_name);

  });
  $('.modal .close_modal, .to__category').click(function () {
    $('.modal').slideUp(300);

  })
  // nav click
  $(".tabs__nav h4").click(function () {
    $('.tabs__opened').removeClass('tabs__red tabs__blue tabs__yellow');
    let old_index = $('.new_opened').attr('data-count');
    $(".open").hide().removeClass('new_opened');
    let nav = $(this).attr("data-nav");

    let new_index = $(this).index();
    // console.log('old ' + old_index + ' ; new ' + new_index );
    console.log(old_index > new_index);
    $('.modal').hide();

    if (old_index > new_index) {
      $(".open." + $(this).attr("data-target")).show('slide', {
        direction: "left"
      }, 400).addClass('new_opened');
    } else {
      $(".open." + $(this).attr("data-target")).show('slide', {
        direction: "right"
      }, 400).addClass('new_opened');

    }
    $(".tabs__nav h4").show();
    $('.tabs__nav h4').removeClass('active_hfour')
    $(this).addClass('active_hfour')
    // $(this).hide();
    let delete_class = $(".tabs__nav-skew")
      .attr("class")
      .split(" ")[1];
    $(".tabs__nav-skew").removeClass(delete_class);
    $(".tabs__nav-skew").addClass(nav);
    $(".choose__block, .nomination__block").removeClass("active__choose");
    $(".categories__block")
      .removeClass("categories__block-opacity")
      .removeClass("active__block");
    let delete_class1 = $(".tabs__opened")
      .attr("class")
      .split(" ")[1];
    $(".categories__block img").each(function () {
      let data_old = $(this).attr("data-old");
      $(this).attr("src", data_old);
    });
    $(".category__opened, .nomination__opened").hide();
    $(".tabs__opened").removeClass(delete_class1);
  });
  // nav click end



  // slider nav click start
  $(".tabs__block").click(function () {
    let nav = $(this)
      .find("h4")
      .attr("data-nav");
    let target = $(this)
      .find("h4")
      .attr("data-target");
    $("#tabs").hide();
    $(".tabs__opened").show();
    $("." + target).show().addClass('new_opened');
    $('.tabs__nav h4').removeClass('active_hfour')
    $('.tabs__nav h4[data-nav="' + nav + '"]').addClass('active_hfour');
    console.log($('.tabs__nav h4[data-nav="' + nav + '"]'));
    $(".tabs__nav-skew").addClass(nav);
    console.log(nav);
  });
  $(".member-block").on("mouseover", function () {
    $(".member-block").addClass("block-opacity");
    $(this).removeClass("block-opacity");
  });

  $(".member-block").on("mouseleave", function () {
    $(".member-block").removeClass("block-opacity");
  });
  // slider nav click end




  // mobile

  $(".nav__item-menu").click(function () {
    if (
      $(".nav__list-mobile").hasClass("active_list") ||
      $("article#menu").hasClass("active_list")
    ) {
      $(".nav__list-mobile, article#menu").removeClass("active_list");
      $("nav").removeClass("nav__red");
      $(".main__social-block").removeClass("opacity");
      $(".nav__item-mobile").removeClass("small_item");
    } else {
      $(".nav__list-mobile").addClass("active_list");
    }
  });
  $("span.close_white").click(function () {
    $(".nav__list-mobile, article#menu, .tabs__opened").removeClass(
      "active_list"
    );
    $(".main__social-block").removeClass("opacity");
    $("nav").removeClass("nav__red");
    $(".nav__item-mobile").removeClass("small_item");
  });

  $(".nav__item-mobile.first__list").click(function () {
    if ($(this).attr("data-target")) {
      let data = $(this).attr("data-target");
      $(".nav__list-mobile").removeClass("active_list");
      $("article#menu").addClass("active_list");
      $(".menu__point").hide();
      $(".main__social-block").addClass("opacity");
      $(".nav__item-mobile").addClass("small_item");
      $('[data-item="' + data + '"]').toggle();
      console.log(data);
      $('article li[data-target="' + data + '"]')
        .removeClass("small_item")
        .hover();
      $("nav").addClass("nav__red");
    }
  });
  $("article .nav__item-mobile").click(function () {
    if ($(this).attr("data-target")) {
      let data = $(this).attr("data-target");
      $(".menu__point").hide();
      $(".nav__item-mobile").addClass("small_item");
      $('[data-item="' + data + '"]').toggle();
      $(this).removeClass("small_item");
      $("nav").addClass("nav__red");
    }
  });
  $(".tabs__list-mobile").click(function () {
    let data = $(this).attr("data-target");
    console.log(data);
    $(".open").hide();
    $(".open." + data + "").show();
    // $('.tabs__list-mobile').removeClass('active_list')
    $(".tabs__list-mobile")
      .addClass("small_item")
      .removeClass("active_list");
    $(this)
      .addClass("active_list")
      .removeClass("small_item");

    $(".tabs__opened").removeClass("tabs__red tabs__blue tabs__yellow");
    $(".categories__block").removeClass(
      "categories__block-opacity active__block"
    );
    $(".categories__block img").each(function () {
      let data_old = $(this).attr("data-old");
      $(this).attr("src", data_old);
    });
    $(".category__opened, .nomination__opened").hide();
    $(".choose__block").removeClass("hidden active__choose");
    $('.nomination__block').removeClass('hidden active__choose');
    $(".block").hide();
  });
  $("#tabs_section span.close_white").click(function () {
    $(".tabs__opened").removeClass("active_list");
  });

  $(".interactive__list").click(function () {
    $(".nav__list-mobile").removeClass("active_list");
    $(".tabs__opened").addClass("active_list");
    // console.log($(this).attr('data-target'))
    let data = $(this).attr("data-target");
    $('.tabs__list-mobile[data-target="' + data + '"]').click();
  });



  // category generate


  
 function scrollTo(elem) {

    $([document.documentElement, document.body]).animate({
        scrollTop: $(elem).offset()
    }, 0);
}

  $('.nomination__block').click(function () {
    let target = $(this).parent().attr('data-target');
    console.log(document.body.clientWidth	)




    $('.category__opened.' + target).show();
    $(".nomination__block")
      .removeClass("active__choose")
    // .addClass("hidden");
    $(this)
      .addClass("active__choose")
    // .removeClass("hidden");
    let windowWidth = document.body.clientWidth;
    if (windowWidth < 769) {
      console.log( $(this).parent().parent().parent().find('.choose__wrapper').attr('class'))
    
      
    $('.open').animate({ 
      scrollTop: $(this).parent().parent().parent().find('.choose__wrapper').offset().top // прокручиваем страницу к требуемому элементу
    }, 300 // скорость прокрутки
    );
    }
  })

  $('.categories__block, .tabs__nav h4').click(function () {
    $('.choose__block, .nomination__block').removeClass('active__choose');
   
  })
  $('.to__category, .close_modal, .tabs__nav h4, .tabs__list-mobile').click(function(){
    $('.modal-preview').removeClass('viewed');
    $('.modal-preview').hide();
    console.log('d')
  })
  $('.tabs__list-mobile').click(function(){
    $('.modal').hide();
  })
//   $('.modal__cards img').on('click', function () {
//     console.log($(this).html())



//     if ($(this).hasClass('full_img')) {
      
// $(this).removeClass('full_img');
// setTimeout(() => $('.modal__cards img').removeClass('hidden1'), 200);

//     } else {
//       $('.modal__cards img').addClass('hidden1');
//       $(this).removeClass('hidden1').addClass('full_img');
//     }
//   })

$('.modal__card-block').click(function(){
if ($('.modal-preview').hasClass('viewed')) {

}
else {
  let html = $(this).html();
  $('.modal-preview').addClass('viewed');
  $('.modal-preview').html(html);
  $('.modal-preview').slideToggle(300);
}


})
$('.modal-preview').click(function(){
  if ($(this).hasClass('viewed')) {
    $(this).removeClass('viewed');
    $(this).slideToggle(300);
    
  }
})


});
