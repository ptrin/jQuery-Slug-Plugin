//
//	jQuery Slug Plugin by Perry Trinier (perrytrinier@gmail.com)
//  MIT License: http://www.opensource.org/licenses/mit-license.php

jQuery.fn.slug = function(options) {
	var settings = {
		slug: 'slug', // Class used for slug destination input and span. The span is created on $(document).ready() 
		hide: true	 // Boolean - By default the slug input field is hidden, set to false to show the input field and hide the span. 
	};
	
	if(options) {
		jQuery.extend(settings, options);
	}
	
	$this = $(this);

	$(document).ready( function() {
		if (settings.hide) {
			$('input.' + settings.slug).after("<span class="+settings.slug+"></span>");
			$('input.' + settings.slug).hide();
		}
	});
	
	makeSlug = function() {
			var slug = jQuery.trim($this.val()) // Trimming recommended by Brooke Dukes - http://www.thewebsitetailor.com/2008/04/jquery-slug-plugin/comment-page-1/#comment-23
                        .replace(/\s+/g,'-').replace(/[^a-zA-Z0-9\-]/g,'').toLowerCase() // See http://www.djangosnippets.org/snippets/1488/ 
                        .replace(/\-{2,}/g,'-'); // If we end up with any 'multiple hyphens', replace with just one. Temporary bugfix for input 'this & that'=>'this--that'
			$('input.' + settings.slug).val(slug);
			$('span.' + settings.slug).text(slug);

		}
		
	$(this).keyup(makeSlug);
		
	return $this;
};
