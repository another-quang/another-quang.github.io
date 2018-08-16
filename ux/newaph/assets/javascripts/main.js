$(document).foundation();

$(document).ready(function(){
  //Toggle Sidenav
  $('.sidenav__heading').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next('.sidenav__list').removeClass('active');
    } else {
      $(this).addClass('active').next('.sidenav__list').addClass('active');
    }
  });

  $('.sidenav__item--has-dropdown').on('click', '.sidenav__dropdown__toggle', function(e) {
    e.preventDefault();
    var parent = $(this).parent();
    if (parent.hasClass('active')) {
      parent.removeClass('active');
      $(this).html('<i class="fa fa-fw fa-caret-down"></i>');
    } else {
      parent.addClass('active');
      $(this).html('<i class="fa fa-fw fa-caret-up"></i>');
    }
  });

  // Toggle forms
  $('.toggle-form-button').on('click', function(e){
    e.preventDefault();
    $(this).closest('.row').find('.toggle-form').toggleClass('active');
  });

  // Secondary nav dropdown
  /*
  var nav_secondary_dropdown = $('.nav-secondary').find('.has-dropdown');
  nav_secondary_dropdown.on('mouseenter', function() {
    $(this).addClass('focused').find('.dropdown').addClass('focused');
  }).on('mouseleave', function() {
    $(this).removeClass('focused').find('.dropdown').removeClass('focused');
  });

  // Keyboard
  nav_secondary_dropdown.find('> a').on('focus', function() {
    nav_secondary_dropdown.removeClass('focused').find('.dropdown').removeClass('focused');
    $(this).parent().addClass('focused').find('.dropdown').addClass('focused').find('a').last().on('blur', function() {
      nav_secondary_dropdown.removeClass('focused').find('.dropdown').removeClass('focused');
    });
  });

  // Touch
  nav_secondary_dropdown.find('> a').on('click', function(e){
    e.preventDefault();
    var parent_el = $(this).parent();
    if ( parent_el.hasClass('focused') ) {
      parent_el.removeClass('focused').find('.dropdown').removeClass('focused');
    } else {
      parent_el.addClass('focused').find('.dropdown').addClass('focused');
    }
  });
  */

  // Calendar view more
  /*
  $('.toggle-has-more').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active').closest('.grid-topic-calendar').find('.has-more').toggleClass('expanded');
    $(this).text( $(this).text() === 'View more' ? 'View less' : 'View more' );
  });
  */

  //Back to top
  $('#back-to-top').click(function(e) {
      e.preventDefault();
      $('body,html').animate({ scrollTop: 0 }, 400);
  });

  //Count-up
  var counters = [];
  var index = 0;
  $('.count-up').each(function() {
    var id = 'counter' + index;
    var value = parseInt($(this).find('.hidden-for-small-up').text().replace(' ',''));
    $(this).attr('id', id);
    var counter = new countUp(id, 0, value, 0, 2);
    counters.push(counter);
    index = index + 1;
  });

  $.each( counters, function(index, item) {
    setTimeout( function(){
      item.start();
    }, index*500);
  });

  //SVG charts
  /*
  var aspect = 400 / 450,
  chart = $(".d3-chart").find("svg");

  function resizeChart(el) {
    var targetWidth = el.parent().width();
    el.attr("width", targetWidth);
    el.attr("height", targetWidth / aspect);
  }

  if (chart.length) {
    $(window).on("resize", function() {
      resizeChart(chart);
    });
    resizeChart(chart);
  }
  */

  // Search Toggle
  var $navTopContainer = $('.nav-top-links-container');
  if ($navTopContainer.length) {
    var $searchToggle = $navTopContainer.find('.js-search-toggle');
    var searchInput = document.getElementById('nav-top-search-input');
    $searchToggle.on('click', function(e) {
      e.preventDefault();
      if ($navTopContainer.hasClass('active')) {
        $navTopContainer.removeClass('active');
      } else {
        $navTopContainer.addClass('active');
        window.setTimeout(function(){
          searchInput.focus();
        }, 500);
      }
    });
  }

  // Off-canvas
  var $canvasToggle = $('.js-canvas__close');
  var $canvas = $('.off-canvas-wrap');
  if ($canvasToggle.length) {
    $canvasToggle.on('click', function(e) {
      e.preventDefault();
      $canvas.removeClass('move-left');
    });
  }

  // Slider
  var slider = $('.js-slider');
  if (slider.length) {
    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });
  }

  var sliderFor = $('.js-slider-for');
  if (sliderFor.length) {
    sliderFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-slider-nav'
    });
  }

  var sliderNav = $('.js-slider-nav');
  if (sliderNav.length) {
    sliderNav.slick({
      infinite: true,
      slidesToShow: 5,
      centerMode: true,
      asNavFor: '.js-slider-for',
      focusOnSelect: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }]
    });
  }

  // Expandable List
  var expandableList = $('.expandable-list');
  if (expandableList.length) {
    expandableList.each(function(index) {
      var listToggle = $(this).find('.has-expandable');
      listToggle.on('click', '> a', function(e) {
        e.preventDefault();
        var parent = $(this).parent();
        if (parent.hasClass('active')) {
          parent.removeClass('active').find('.expandable').slideUp();
        } else {
          parent.addClass('active').find('.expandable').slideDown();
        }
        // listToggle.removeClass('active').find('.expandable').slideUp();
        // $(this).parent().addClass('active').find('.expandable').slideDown();
      });
    })
  }

  // Simple Tabs
  var simpleTabs = $('.simple-tabs');
  if (simpleTabs.length) {
    simpleTabs.each(function(index) {
      var tabTitles = $(this).find('.simple-tabs__title');
      tabTitles.on('click', 'a', function(e) {
        e.preventDefault();
        var targetContent = $($(this).attr('href'));
        targetContent.addClass('active').siblings().removeClass('active');
        $(this).closest('.simple-tabs__title').addClass('active').siblings().removeClass('active');
      });
    });
  }

  // Tag cloud
  var tagCloud = $('#tag-cloud');
  if (tagCloud.length && word_array.length) {
    tagCloud.jQCloud(word_array, {
      removeOverflowing: false
    });
  }

  // Close Modal
  var closeButtons = $('.js-modal__close');
  closeButtons.on('click', function(e) {
    e.preventDefault();
    $(this).parents('.reveal-modal').foundation('reveal', 'close');
  });
});
