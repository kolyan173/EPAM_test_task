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

	function Slider(params) {}

	Slider.prototype.itemObj = function(item, num) {
		return [
			'<li class="item" data-value="' + num +'">',
			'<img src="',
			this.imgDir,
			item.img,
			'"/>',
			'</li>'
		].join('');
	};

	Slider.prototype.nextItem = function() {
		if (this.state+1 < this.items.length) {
			this.state = ++this.state;
			return;
		}
		this.state = 0;
	};

	Slider.prototype.prevItem = function() {
		// if (this.state-1 < this.items.length) {
		// 	this.state = ++this.state;
		// 	return;
		// }
		// this.state = 0;	
	};

	var slider = new Slider({
		items: items,
		parentClass: 'content',
		imgDir: './public/img/',

	});

	function View(params) {
		this.items = params.items;
		this.state = 0;
		this.imgDir = params.imgDir;
		this.parent = params.parentClass;
		this.width = params.width;
		this.height = params.height;
	}
	
	View.prototype = Object.create(Slider.prototype);
	
	var view = new View({
		items: items,
		parentClass: 'content',
		imgDir: './public/img/',
		width: 312,
		height: 200
	});

	View.prototype.renderLine = function() {
		$('.' + this.parent).append(function() {
			return items.map(function(element, num) {
				return this.itemObj(element, num);
			}.bind(this)).join('');
		}.bind(this));
	};

	View.prototype.renderItem = function(itemClass) {
		$('.' + this.parent + ' .' + itemClass + '[data-value=' + this.state +']')
			.css({ "margin-top": -this.state*this.height + 'px' });
	}

	view.renderLine();
	view.renderItem('item');
	// $('.content li.one').addClass('on');
		// buildNavPanel($('.content .item'), $('.app'));
	$('button.next').click(function() {
		view.nextItem();
		console.log(view.state);
		view.renderItem('item');
		$('.item.on').animate({ "margin-top": "+=50px" }, "slow" );
	});

	$('button.prev').click(function() {
		view.prevItem();
		view.renderItem('item');
		$('.item.on').animate({ "margin-top": "+=50px" }, "slow" );
	});
});