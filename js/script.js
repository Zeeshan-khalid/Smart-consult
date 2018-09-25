    $(function () {
        // Remove Search if user Resets Form or hits Escape!
		$('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
			if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
				$(event.currentTarget).attr('type') == 'reset') {
				closeSearch();
			}
		});

		function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
    		$form.find('input').val('');
			$form.removeClass('active');
			$('a.navbar-brand').removeClass('hide');
			$('ul.navbar-nav').removeClass('hide');
		}

		// Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
		$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
			$input = $form.find('input');
			$form.addClass('active');
			$input.focus();
			$('a.navbar-brand').addClass('hide');
			$('ul.navbar-nav').addClass('hide');

		});
		// ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
		// if your form is ajax remember to call `closeSearch()` to close the search container
		$(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$('#showSearchTerm').text($input.val());
            closeSearch()
		});
		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    if (scroll > 10){
		    	$('.navbar').addClass('scrolled');
		    	$('.content-container').addClass('scrolled');
		    }
		    if (scroll < 10){
		    	$('.navbar').removeClass('scrolled');
		    	$('.content-container').removeClass('scrolled');
		    }
		});


				$('body').on('mouseenter mouseleave', '.dropdown', function (e) {
				    var dropdown = $(e.target).closest('.dropdown');
				    var menu = $('.dropdown-menu', dropdown);
				    dropdown.addClass('show');
				    menu.addClass('show');
				    setTimeout(function () {
				        dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
				        menu[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
				    }, 300);
				});
				$('.navbar .dropdown > a').click(function(){
					location.href = this.href;
					});
			try {
			AOS.init({
					duration: 1200,
				});
		} catch(err) { }
	});
	function myFunction(x) {
			x.classList.toggle("change");
		}