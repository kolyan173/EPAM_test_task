(function($, f) {
	var Unslider = function() {

		function looper(n, rangelength) {
			if (n > rangelength - 1) return 0;
			if (n < 0) return rangelength - 1;
			return n;
		}
		
		this.options = {
			speed: 1000,     // animation speed, false for no transition (integer or boolean)
			init: 0,        // init delay, false for no delay (integer or boolean)
			arrows: f,      // display prev/next arrows (boolean)
			prev: '&larr;', // text or html inside prev button (string)
			next: '&rarr;', // same as for prev option
			fluid: f,       // is it a percentage width? (boolean)
			items: 'ul',   // slides container selector
			item: '>li',    // slidable items selector
			easing: 'swing',// easing function to use for animation
			isShowDetails: false,
			description: '>.description',
			image: '>.image'
		};

		this.init = function(el, params) {
			this.options = $.extend(this.options, params);

			this.el = el;
			this.ul = el.find(this.options.items);
			this.li = this.ul.find(this.options.item);
			this.description = this.li.find(this.options.description);
			this.image = this.li.find(this.options.image);
			this.i = 0,
			target = this.li.eq(this.i);

			//  Cached vars	
			var o = this.options,
				ul = this.ul,
				li = this.li,
				len = li.length;

			// target.css({opacity: 1});
			target.css({display: 'block'});

			// ul.css({position: 'relative', left: 0, width: '100%'});
			ul.css({width: '100%'});

			// o.arrows && nav('arrow');

			return this;
		};

		this.to = function(index, callback) {
			index = looper(index, this.li.length);
			var o = this.options,
				li = this.li,
				current = index,
				prev = li.eq(this.i),
				target = li.eq(current);

			var speed = callback ? 5 : o.speed | 0;
			var easing = o.easing;

			if (!target.queue('fx').length) {
				prev.css({ display: 'none' });
				target.css({ display: 'inline-block', opacity: 0 });
				target.animate({opacity: 1}, speed, easing, function(data) {
					this.i = current;
					console.log('now', this.i);
				}.bind(this));
			};
		};

		this.next = function() {
			return this.to(this.i + 1);
		};

		this.prev = function() {
			return this.to(this.i - 1);
		};

		this.detailsToggle = function() {
			var description = this.description.eq(this.i);
			var p_desc = description.find('p');
			var note = description.find('.note');
			var image = this.image.eq(this.i);
			var img = image.find('img');
			var o = this.options;

			this.isShowDetails = !this.isShowDetails;

			if (this.isShowDetails) {
				image.animate({ opacity: 0, height: 0 }, o.speed, o.easing, function() {
						console.log('HERE');
						$(this).css({ visibility: 'hidden'});
						note.css('display', 'inline-block');
					});
				description.animate({ height :  img.outerHeight()}, o.speed, o.easing);
					// debugger;
			} else {
				description.animate({ height : 0 }, o.spped, o.easing)
					image.animate({ height: img.outerHeight() }, o.speed, o.easing, function() {
						$(this).css({ visibility: 'visible' })
							.animate({ opacity: 1 }, o.speed, o.easing);
						// note.animate({ opacity: 0 }, o.spped, o.easing, function() {
						note.css({ opacity: 0 });
							/*$(this)*/note.css({display: 'none', opacity: 1});
						// });
					});
			}
		};
	};

	$.fn.slide = function(o) {
		return this.each(function(index) {
			var me = $(this),
				key = 'slider',
				instance = (new Unslider).init(me, o);

			//  Invoke an Unslider instance
			me.data(key, instance).data('key', key);
		});
	};

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

	$(document).ready(function() {
		function bootstrap(params) {
			// function li(content, class) {
			// 	return [
			// 		'<li class="' + class + '">',
			// 		content,
			// 		'</li>'
			// };
			// function img(src) {
			// 	return '<img src="' + src + '"/>';
			// }
			$('.items').append(function() {
				return items.map(function(item, num) {
					return [
						'<li class="item">',
							'<div class="image"><img src="',
								params.imgDir,
								(item.img || item.field),
							'"/></div>',
							'<div class="description">',
								'<h5>',
									item.title,
								'</h5>',
									'<p class="description">',
										item.description,
									'</p>',
									// '<br/>',
									'<p class="note">',
										item.note,
									'</p>',
								'<div class="details">',
									'<a >show details</a>',
								'</div>',
							'</div>',
						'</li>'
					].join('');
				}).join('');
			});
		}
		bootstrap({
			imgDir: './public/img/'
		});

		var slide = $('.slider_wrapper').slide({speed: 300});
		
		$('button.next').click(function(){
			slide.data('slider')
				.next();
		});
		$('button.prev').click(function(){
			slide.data('slider')
				.prev();
		});
		$('.details>a').click(function(e) {
			$(this).text('hide details');
				// debugger;
			slide.data('slider')
				.detailsToggle();
			return false;
		});
	});
})(jQuery, false);
