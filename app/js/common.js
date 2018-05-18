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
