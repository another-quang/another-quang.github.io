$(document).foundation();

$(document).ready(function() {
  // scrollNav
  $('.scroll-nav__content').scrollNav({
    headlineText: 'Table of Content',
    insertTarget: '.scroll-nav__container',
    fixedMargin: 40
  });

  // Search panel
  var $searchContainer = $('.search__container');
  $('.search__toggle').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').html('<i class="fa fa-search"></i>');
      $searchContainer.removeClass('active');
    } else {
      var headerHeight = $('header').outerHeight(false);
      $(this).addClass('active').html('<span style="font-size:2rem; line-height:2.6rem;">&#215;</span>');
      $searchContainer.addClass('active').css('top', headerHeight);
      setTimeout(function() {
        $('#search').focus();
      }, 100);
    }
  });

  // Panel
  $panelToggles = $('.panel__toggle');
  $panels = $('.panel__content');
  $panelToggles.on('click', function(e) {
    e.preventDefault();
    $panelToggles.removeClass('panel__toggle--active');
    $(this).addClass('panel__toggle--active');
    $panels.removeClass('panel__content--active');
    $('#'+this.dataset.panelid).addClass('panel__content--active');
  });

  // Mega dropdown
  var $megaButtons = $('#mega').find('.mega__topic--has-dropdown > a');
  var $megaPanels = $('.mega__panel');
  $megaButtons.on('click', function(e) {
    e.preventDefault();
    var $panel = $('#'+this.dataset.dropdownid);
    if ($panel.length) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $panel.removeClass('active');
      } else {
        $megaButtons.removeClass('active');
        $megaPanels.removeClass('active');
        $(this).addClass('active');
        $panel.addClass('active');
      }
    }
  });

  // Tabs within megadropdown
  $('.mega__tabs').on('mouseenter click', 'a.mega__tab__button', function(e) {
    e.preventDefault();
    var $tab = $('#'+this.dataset.tabid);
    $tab.addClass('active').siblings('.mega__tab__content').removeClass('active');
    $(this).addClass('active').parent().siblings('li').find('a').removeClass('active');
  });

  // Toggle forms
  $('.toggle-form-button').on('click', function(e){
    e.preventDefault();
    $(this).closest('.row').find('.toggle-form').toggleClass('active');
  });

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

  // Slider
  var quicklinkSlider = $('.js-quicklink-slider');
  if (quicklinkSlider.length) {
    quicklinkSlider.slick({
      slidesToShow: 7,
      slidesToScroll: 7,
      dots: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
    })
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
});
