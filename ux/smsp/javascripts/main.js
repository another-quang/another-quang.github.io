$(document).foundation();

$(document).ready(function() {
  // Simple Tabs
  var $simpleTabs = $('.simple-tabs');
  if ($simpleTabs.length) {
    $simpleTabs.each(function(index) {
      var $tabTitles = $(this).find('.simple-tabs__title');
      $tabTitles.on('click', 'a', function(e) {
        e.preventDefault();
        var $targetContent = $($(this).attr('href'));
        $targetContent.addClass('active').siblings().removeClass('active');
        $(this).closest('.simple-tabs__title').addClass('active').siblings().removeClass('active');
      });
    });
  }

  // Back to top
  var $backToTop = $('#back-to-top');
  $(window).scroll(function() {
    $(this).scrollTop() !== 0 ? $backToTop.show() : $backToTop.hide();
  });
  $backToTop.click(function(e) {
    e.preventDefault();
    $('body,html').animate({ scrollTop: 0 }, 400);
  });

  // Scroll to
  var $scrollTo = $('.button--scrollto');
  $scrollTo.on('click', function(e) {
    e.preventDefault();
    $target = $($(this).attr('href'));
    $('body,html').animate({ scrollTop: $target.offset().top }, 400);
  });

  // Close modal
  var $closeModal = $('.modal-close');
  $closeModal.on('click', function(e) {
    e.preventDefault();
    $('#modal-report-link').foundation('reveal', 'close');
  });
});
