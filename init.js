// $(document).ready(function() {
// 	var items = [
// 		{
// 			"title": "Time to Share: 6 for $3.99*",
// 			"img": "comp_plate_promo1.png",
// 			"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
// 			"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
// 			"productUrl": "/products/promo1.html"
// 		},
// 		{
// 			"title": "Rise 'n shine",
// 			"img": "comp_plate_promo2.png",
// 			"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
// 			"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
// 			"productUrl": "/products/promo2.html"
// 		},
// 		{
// 			"title": "PM Snackers: Brownie Bites",
// 			"img": "comp_plate_promo3.png",
// 			"description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
// 			"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
// 			"productUrl": "/products/promo3.html"
// 		},
// 		{
// 			"title": "PM Snackers: Brownie Bites new",
// 			"field": "comp_plate_promo4.png",
// 			"descrption": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
// 			"note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga. * At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
// 			"productUrl": "/products/promo4.html"
// 		}
// 	];
// 	var props = {
// 		items: items,
// 		parentClass: 'slider_wrapper',
// 		imgDir: './public/img/',
// 		width: 312,
// 		height: 200
// 	};

// 	function Controller() {
// 		this.getProps = function() {
// 			return Slider.prototype.props;
// 		}
// 	}
// 	Controller.prototype = {		
// 		nextItem: function() {
// 			var props = this.getProps();
// 			if (props.state+1 < props.items.length) {
// 				props.state = ++props.state;
// 				return;
// 			}
// 			props.state = 0;
// 		},
// 	};
	
// 	function View() {
// 		this.getProps = function() {
// 			return Slider.prototype.props;
// 		}
// 	}
// 	View.prototype = {
// 		itemObj: function(item, num) {
// 			return [
// 				'<li class="item" data-value="' + num +'">',
// 				'<img src="',
// 				this.getProps().imgDir,
// 				item.img || item.field,
// 				'"/>',
// 				'</li>'
// 			].join('');
// 		},
// 		renderLine: function() {
// 			$('.' + this.getProps().parentClass).append(function() {
// 				return items.map(function(element, num) {
// 					return this.itemObj(element, num);
// 				}.bind(this)).join('');
// 			}.bind(this));
// 		},
// 		renderItem: function(itemClass) {
// 			var props = this.getProps();
// 			$('.' + props.parentClass + ' .' + itemClass + '[data-value=' + props.state +']')
// 				.css({ "margin-top": -props.state*props.height + 'px' });
// 		},
// 		render: function() {

// 		}
// 	};

// 	function Slider(test) {
// 		this.test = test;
// 	}

// 	Slider.prototype.props = {
// 		items: null,
// 		parentClass: null,
// 		imgDir: null,
// 		width: null,
// 		height: null,
// 		showDetails: false,
// 	};
// 	Slider.prototype.controller = new Controller();
// 	Slider.prototype.view = new View();
	
// 	function injectProps(props, _class) {
// 		_class.prototype.props = props;
// 	}

// 	injectProps(props, Slider);
// 	var slider = new Slider('testest');

// 	slider.view.renderLine();
// 	slider.view.renderItem('item');

// 	function actions() {
// 		$('button.next').click(function() {
// 			debugger;
// 			$('.item[data-value="' + slider.props.state + '"]')
// 				.animate({ "opacity": "0" }, "slow" );
// 			slider.controller.nextItem();
// 			$('.item[data-value="' + slider.props.state + '"]')
// 				.animate({ "opacity": "1" }, "slow" );
// 		});

// 		$('button.prev').click(function() {
// 			view.prevItem();
// 			view.renderItem('item');
// 			$('.item.on').animate({ "margin-top": "+=50px" }, "slow" );
// 		});			
// 	}
// 	actions();
// });