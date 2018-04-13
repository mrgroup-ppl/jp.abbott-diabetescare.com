jQuery(document).ready(function() {
	jQuery("#libre-video-button1,#libre-video-button2").click(function() {
		jQuery('#videoModal1').modal({
			show: true
		});
		jQuery('#video1').get(0).play();
	});

	jQuery("#libre-pro-video-button1,#libre-pro-video-button2").click(function() {
		jQuery('#videoModal2').modal({
			show: true
		});
		jQuery('#video2').get(0).play();
	});

	jQuery("#libre-combine-video-button1,#libre-combine-video-button2").click(function() {
		jQuery('#videoModal3').modal({
			show: true
		});
		jQuery('#video3').get(0).play();
	});

	jQuery('#videoModal1').on('hidden.bs.modal', function() {
		jQuery('#video1').get(0).pause();
	});

	jQuery('#videoModal2').on('hidden.bs.modal', function() {
		jQuery('#video2').get(0).pause();
	});

	jQuery('#videoModal3').on('hidden.bs.modal', function() {
		jQuery('#video3').get(0).pause();
	});


	// Form validation //
	$(document).ready(function() {
		$('.thanks').hide();
		$("#register").validate({

			showErrors: function(errorMap, errorList) {
				// Clean up any tooltips for valid elements
				$.each(this.validElements(), function(index, element) {
					var $element = $(element);
					$element.data("title", "") // Clear the title - there is no error associated anymore
						.removeClass("error")
						.tooltip("destroy");
				});
				// Create new tooltips for invalid elements
				$.each(errorList, function(index, error) {
					var $element = $(error.element);
					$element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
						.data("title", error.message)
						.addClass("error")
						.tooltip(); // Create a new tooltip based on the error messsage we just set in the title
				});
			},
			submitHandler: function(form) {
				$("#ajaxMain").show();
				$.ajax({
					type: "POST",
					url: "//diabetesfrontier.us15.list-manage.com/subscribe/post?u=bbf89b7fb48d2ab31388ba9e2&amp;id=f20cd30b72",

					data: {
						LNAME: $('#lname').val(),
						FNAME: $('#fname').val(),
						AGE: $('#age').val(),
						EMAIL: $('#email').val(),
						PHONE: $('#phone').val(),
						INSULIN: $('.radioUser').val(),
						DIABETYP:$('#dType').val()
					},
					success: function(response) {

					},
	  error: function(err) {
		console.log(err);
						$('.thanks').show();
						$('.form-view').hide();
						$('#register')[0].reset();
						// $(".agrBox > div").removeClass("active");
						$("#ajaxMain").hide();
	  }
				});
			}
		});
	});
	jQuery("#tar").click(function() {
		$("#yes").val("Yes");
		$("#no").val("No");
	});
	jQuery("#tar2").click(function() {
		$("#yes").val("Yes");
		$("#no").val("No");
	});

	jQuery('.close-reveal-modal').click(function(){
		$('.thanks').hide();
		$('.form-view').show();
	});

});

$(window).load(function() {
	var t;
	var start = $('#carousel-home').find('.active').attr('data-interval');
	t = setTimeout("$('#carousel-home').carousel({interval: 1000});", start - 1000);

	$('#carousel-home').on('slid.bs.carousel', function() {
		clearTimeout(t);
		var duration = $(this).find('.active').attr('data-interval');

		$('#carousel-home').carousel('pause');
		t = setTimeout("$('#carousel-home').carousel();", duration - 1000);
	})

	$('.custom-control.right').on('click', function() {
		clearTimeout(t);
	});

	$('.custom-control.left').on('click', function() {
		clearTimeout(t);
	});
});