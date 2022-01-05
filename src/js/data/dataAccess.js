var DataAccess = (function () {

    var movieObjects = [];
    var menuList = [];

    var getMovieObjects = function () {
        return movieObjects;
    }
    var setMovieObjects = function (data) {
        movieObjects = data;
        var parsedMenulist = DataParse(data);
        setMenuList(parsedMenulist);
    }

    var getMenuList = function () {
        return menuList;
    }
    var setMenuList = function (data) {
        menuList = data;
    }


    return{
       getMovieObject: getMovieObjects,
       getMenuList: getMenuList,
       setMovieObjects: setMovieObjects
    }
})();