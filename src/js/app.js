var App = (function(){

    setTimeout(() => {
        render();
    }, 500);

    var render = function(){
        var menuList = DataAccess.getMenuList();
        var movieObjectList = DataAccess.getMovieObject();
        Menu.createMenu(movieObjectList, menuList);
        Row.checkRequest(movieObjectList, menuList);
    };
    
})();

