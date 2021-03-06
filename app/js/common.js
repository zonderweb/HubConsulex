
$(function() {
	// TABS Vertical
		$(".tab_item").not(":first").hide();
		$(".wrapper__tabs .tab").click(function() {
			$(".wrapper__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// TABS Horizontal
		$(".content-item").not(":first").hide();
		$(".h-wrapper .horizontal-tab").click(function() {
			$(".h-wrapper .horizontal-tab").removeClass("h-active").eq($(this).index()).addClass("h-active");
			$(".content-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("h-active");

	// TABS Team
		$(".team-tab__item").not(":first").hide();
		$(".team-tab__wrapper .team-tab__tab").click(function() {
			$(".team-tab__wrapper .team-tab__tab").removeClass("team-active").eq($(this).index()).addClass("team-active");
			$(".team-tab__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("team-active");

	// HISTORY Tabs
	$(".history-tab__item").not(":first").hide();
	$(".historyTab .history-tab").click(function() {
			$(".historyTab .history-tab").removeClass("history-active").eq($(this).index()).addClass("history-active");
			$(".history-tab__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("history-active");

	// MEDIA Tabs
	$(".media__item").not(":first").hide();
	$(".galleryMedia .media__tab").click(function() {
			$(".galleryMedia .media__tab").removeClass("media__active").eq($(this).index()).addClass("media__active");
			$(".media__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("media__active");

	// BIG Tabs
	$(".bigTab__item").not(":first").hide();
	$(".bigTab-wrapper .bigTab__tab").click(function() {
			$(".bigTab-wrapper .bigTab__tab").removeClass("big-active").eq($(this).index()).addClass("big-active");
			$(".bigTab__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("big-active");
});


// ACCORDEON CHOOSE

$(".js-acc-header").on("click", function(e) {

	e.preventDefault();
  var $this = $(this);

  if( !$this.hasClass("js-active") ) {
    	$(".js-acc-text").slideUp();
      $(".js-acc-header").removeClass("js-active");
  }

  $this.toggleClass("js-active");
  $this.next().slideToggle();
});

// Adaptive Menu
// (function($){
//   $(function() {
//     $('.g-icon').on('click', function() {
//       $(this).closest('.nav').toggleClass('nav-open');
//     });
//   });
// })(jQuery);
