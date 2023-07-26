
// off canavas menu
$(function () {
  'use strict'
  
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

$(function() {
  
  var siteSticky = function() {
    $(".js-sticky-header").sticky({topSpacing:0});
  };
  siteSticky();
});

//SLIDER
$(document).ready(function(){
  $('.slider-actualites').slick({
    dots: true,
    infinite: true,
    speed: 500,
    appendArrows:'.arrow-nav-actu',
    appendDots:'.dots-nav-actu',
    prevArrow: '<span class="fa-solid fa-chevron-left"></span>', 
    nextArrow: '<span class="fa-solid fa-chevron-right"></span>',
    accessibility:true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      
      {
        breakpoint: 646,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      
    ]
  });

  $('.slider-partenaires').slick({
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    focusOnSelect:true,
    appendArrows:'.arrow-nav-partenaires',
    appendDots:'.dots-nav-partenaires',
    prevArrow: '<span class="fa-solid fa-chevron-left"></span>', 
    nextArrow: '<span class="fa-solid fa-chevron-right"></span>',
    accessibility:true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      
      {
        breakpoint: 646,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      
    ]
  });
  //AOS
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate',
    useClassNames: false, 
    disableMutationObserver: false,
    debounceDelay: 50, 
    throttleDelay: 99,  
    
    offset: 120, 
    delay: 0,
    duration: 400, 
    easing: 'ease',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom',
  });
});

$("#choices").niceSelect();

var mixing = $('.etapes')
if(mixing){
  var mixer = mixitup(mixing,  {
    load: {
      filter: '.etape-1-1'
    },
    callbacks: {
      onMixEnd: function(state) {
        if(state.activeFilter.selector == ".etape-2"){
        }
      },
      onMixBusy: function(state) {
      }
    },
    "animation": {
      "duration": 250,
      "nudge": true,
      "reverseOut": true,
      "effects": "fade translateY(100px)"
    }
  })
}
$('.etapes').on('mixEnd', function(e, state){
});


function eval(){
  var key = document.getElementById("choices")
  var keylength = key.length;
  for(let i = 1; i < keylength; i++){
    let etapeInput = ".etape-3-"+ i + ' input';
    $(etapeInput).val('')
    if(key.options[key.selectedIndex].value == i){
      let etapeN = ".etape-3-"+ i;
      mixer.filter(etapeN);
    }
  }
}

function redirect(that){
  if ($(that).attr('value') == 'oui'){
    $('.etape-1-2 textarea').val('');
    if($("#choices").val() != ""){
      let etapeN = ".etape-3-"+ $("#choices").val()
      mixer.filter(etapeN);
    }
    else{
      mixer.filter('.etape-2')
    }
  }
  else if ($(that).attr('value') == 'non'){
    if($("#choices").val() != ""){
      let etapeInput = ".etape-3-"+ $("#choices").val() + " input";
      $(etapeInput).val('');
      $("#choices").val('');
      $("#choices").niceSelect('update')
    }
  }
}