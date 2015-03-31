(function($) {
	var Unslider = function() {
		function looper(n, rangelength) {
			var lastElement = rangelength - 1;
			if (n > lastElement) return 0;
			if (n < 0) return lastElement;
			return n;
		}
		function isOverloaded(options, limit) {
			limit = limit || 1;
			if (options.proccesses > limit) {
				--options.proccesses;
				return true;
			}
			return false;
		}

		this.options = {
			speed: 500,
			init: 0,
			items: 'ul',
			item: '>li',
			easing: 'linear',
			isDetailsOpened: false,
			descriptions: '>.descriptions',
			image: '>.image',
			imageHeight: '200px',
			imageWidth: '312px',
			details: '.details',
			detailsHref: '.details a',
			detailsHrefText: {
				hide: 'hide details',
				show: 'show details'
			},
			descriptionsPadding: '10px',
			proccesses: 0
		};

		this.init = function(element, params) {
			this.options = $.extend(this.options, params);

			this.element = element;
			this.ul = element.find(this.options.items);
			this.li = this.ul.find(this.options.item);
			this.descriptions = this.li.find(this.options.descriptions);
			this.image = this.li.find(this.options.image);
			this.detailsHref = this.li.find(this.options.detailsHref);
			this.currElemIndex = 0,
			target = this.li.eq(this.currElemIndex);

			target.addClass('active');
			target.css({display: 'block'});
			this.ul.css({width: '100%'});
			return this;
		};

		this.to = function(index, callback) {
			var options = this.options;
			if (isOverloaded(options)) return;

			index = looper(index, this.li.length);
			var li = this.li,
				current = index,
				prev = li.eq(this.currElemIndex),
				image = this.image.eq(this.currElemIndex),
				descriptions = this.descriptions.eq(this.currElemIndex),
				details = descriptions.find(options.details),
				note = descriptions.find('.note'),
				detailsHref = this.detailsHref.eq(this.currElemIndex),
				target = li.eq(current);

			options.isDetailsOpened = false;
			detailsHref.text(options.detailsHrefText.show);

			var speed = options.speed;
			var easing = options.easing;

			if (!target.queue('fx').length) {
				details.css({ position: '', bottom: '', top: ''});
				descriptions.css({ top: options.imageHeight });
				note.css({ display: 'none'});
				image.css({ visibility: 'visible', opacity: 1});
				prev.removeClass('active');
				target.addClass('active');
				prev.css({ display: 'none' });
				target.css({ display: 'block', opacity: 0 })
					.animate({opacity: 1}, speed, easing, function(data) {
						this.currElemIndex = current;
							--options.proccesses;
					}.bind(this));
			};
		};

		this.next = function() {
			return this.to(this.currElemIndex + 1);
		};

		this.prev = function() {
			return this.to(this.currElemIndex - 1);
		};

		this.detailsToggle = function() {
			var options = this.options;
			if (isOverloaded(options)) return;

			var descriptions = this.descriptions.eq(this.currElemIndex),
				p_desc = descriptions.find('p'),
				note = descriptions.find('.note'),
				noteWidth = note.outerWidth() - parseFloat(options.descriptionsPadding),
				image = this.image.eq(this.currElemIndex),
				img = image.find('img'),
				details = descriptions.find(options.details),
				detailsHref = this.detailsHref.eq(this.currElemIndex),
				detailsOffsetTopInit = details.offset().top,
				desc_height = descriptions.outerHeight();

			! this.options.isDetailsOpened 
			&& detailsHref.text(options.detailsHrefText.hide) 
			|| detailsHref.text(options.detailsHrefText.show);
			
			options.isDetailsOpened = !options.isDetailsOpened;

			if (options.isDetailsOpened) {
				details.css({ position: 'absolute', bottom: ''});
				note.css({ opacity: 1 });
				details.css({ 'background-position': '-9999px -9999px'});
				descriptions.css({top: options.imageHeight})
					.animate({ top :  0 }, options.speed, options.easing, function() {
						details.css({ 
							top: detailsOffsetTopInit ,
							width: noteWidth,
							'background-position': '85% 80%',
							height: '30px'
						});
						note.css({ display: 'inline-block', height: options.imageHeight });
						image.animate({ opacity: 0 }, options.speed, options.easing, function() {
							options.detailsOffsetTop = details.offset().top;
							--options.proccesses;
							$(this).css({ visibility: 'hidden'});
						});						
						
					});
			} else {
				details.css({ position: 'fixed', bottom: '', top: detailsOffsetTopInit});
				descriptions.animate({ top :  img.outerHeight() }, options.speed, options.easing, function() {
					image.css({ visibility: 'visible' })
						.animate({ opacity: 1 }, options.speed, options.easing, function() {
							--options.proccesses;
							details.css({ position: '', bottom: '', top: ''});
							note.css({display: 'none'});
						});
					note.css({ opacity: 0 });
				});
			}
		};
	};

	$.fn.slide = function(params) {
		return this.each(function(index) {
			var element = $(this),
				key = 'slider',
				instance = (new Unslider).init(element, params);

			element.data(key, instance)
				.data('key', key);
		});
	};

	$(document).ready(function() {
		var items = [
			{
				"title": "Time to Share: 6 for $3.99*",
				"img": "comp_plate_promo1.png",
				"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
				"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
				"productUrl": "/products/promo1.html"
			},
			{
				"title": "Rise 'n shine",
				"img": "comp_plate_promo2.png",
				"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
				"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
				"productUrl": "/products/promo2.html"
			},
			{
				"title": "PM Snackers: Brownie Bites",
				"img": "comp_plate_promo3.png",
				"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
				"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
				"productUrl": "/products/promo3.html"
			},
			{
				"title": "PM Snackers: Brownie Bites new",
				"field": "comp_plate_promo4.png",
				"descrption": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
				"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga. * At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
				"productUrl": "/products/promo4.html"
			}
		];

		function bootstrapDOM(params) {
			$('.app').append(function() {
				return [
					'<div class="slider_wrapper panel panel-default">',
						'<div class="panel-body">',
							'<ul class="items">',
								params.items.map(function(item, num) {
									return[
										'<li class="item" data-value="', num ,'">',
											'<div class="image">',
												'<img src="',
													params.imagesDirectory,
													(item.img || item.field),
												'"/>',
											'</div>',
											'<div class="descriptions">',
												'<h5>',
													item.title,
												'</h5>',
												'<p class="description">',
													item.description,
												'</p>',
												'<p class="note">',
													item.note,
												'</p>',
												'<div class="details">',
													'<a class="hrefDetails">show details</a>',
												'</div>',
											'</div>',
										'</li>'
									].join('');
								}).join(''),
							'</ul>',
						'</div>',
						'<div class="panel-footer">',
							'<a href="#" class="prev">Prev</a>',
							'<a href="#" class="next">Next</a>',
							'<a href="" class="find">Find a store</a>',
						'</div>',
					'</div>'
				].join('');
			});
		}

		bootstrapDOM({
			items: items,
			imagesDirectory: './public/img/' 
		});

		var slide = $('.slider_wrapper').slide();
		var slideData = slide.data('slider');

		$('*').click(function(e){
			var targets = ['prev', 'next', 'hrefDetails'];
			var predicate = targets.some(function(target) {
				return target === e.target.className;
			});
			if (predicate) {
				++slideData.options.proccesses;
			}
			return false;
		});

		$('a.next').click(function(){
			slideData.next();
			return false;
		});

		$('a.prev').click(function(){
			slideData.prev();
			return false;
		});

		$('.details>a').click(function() {
			slideData.detailsToggle();
			return false;
		});

		$('a.find').click(function(e){
			$(this).attr('href', items[$('.active').data('value')].productUrl);
		});
	});
})(jQuery);
