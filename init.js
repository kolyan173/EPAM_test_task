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
	
	function buildNavPanel($item, $parent) {
		var $slider = $parent.append('<div class="slider"></div>');
		$item.each(function(num, element) {
			$slider.append('<div class="item">' + num + '</div>')
		});
	}

	function Slider(params) {
		this.items = params.items;
		this.state = 0;
		this.imgDir = params.imgDir;
		this.parent = params.parentClass;
		this.currentItem = this.items[this.state];
	}

	Slider.prototype.itemObj = function(item) {
		var image = [
			'<img src="',
			item.img,
			'">'
		];
		return $('.item').append()
	}

	Slider.prototype.next = function() {
		this.currentItem = ++this.state;
	};

	Slider.prototype.render = function() {
		$('.' + this.parent).append(function() {

		});
	};

	var slider = new Slider({
		items: items,
		parentClass: 'window',
		imgDir: './public/img/'
	});

	$('.content li.one').addClass('on');
		// buildNavPanel($('.content .item'), $('.app'));
	$('button').click(function() {
		console.log('LICK');
		$('.item.on').animate({ "margin-top": "+=50px" }, "slow" );
	})
});