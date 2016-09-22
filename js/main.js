// Mobile version of navigation - hubmurger

function Toggle_humburger(menuClassName, humburgerClassName, plus_height_to_menu, closedMenu_height ){
	var check = 1;
	var menu = $(menuClassName);
	var menuHeight = menu.height();

	menu.css({
		'height' : closedMenu_height + 'px'
	})

	$(humburgerClassName).click(function(){
		if(check == 0){
			menu.css({
				'height' : closedMenu_height + 'px'
			});
			check = 1;
		} else{
			menu.css({
				'height' : menuHeight + plus_height_to_menu + 'px'
			});
			check = 0;
		}
	});
};

Toggle_humburger('.main-menu ul', '.main-menu__humburger', 80, 30);