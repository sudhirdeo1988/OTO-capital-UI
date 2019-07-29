
/* --------------------------------------------------------
 JQUERY FUNCTION CALL
----------------------------------------------------------- */
(function($) {
  "use strict";
		// -------- Scroll BAr
		if($(".custScroller").length){
			$(".custScroller").mCustomScrollbar({
				theme:"dark",
				mouseWheel:{ enable: true },
				advanced:{ updateOnContentResize: true }
			});
		}

	if($(".c-custModal").length){
		$('body').delegate('.c-custModal .dropdown-toggle','click',function(){
			var thisCheck = $(this).parent('.c-custModal');
			thisCheck.hasClass('openModal') ? thisCheck.removeClass('openModal') : thisCheck.addClass('openModal');
		});
		$('body').delegate('.c-custModal .assignLeadDD .closeDD','click',function(){
			$(this).parents('.c-custModal').removeClass('openModal')
		})
	}
})(jQuery);
