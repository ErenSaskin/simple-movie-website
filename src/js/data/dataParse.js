var DataParse = function (movieObjectList) {

    var menuList = [];

    function parseDataToList() {
        for(var item in movieObjectList){
            movieObjectList[item].Category.forEach(function (value){
                menuList.push(value);
            });
        }
    };

    function filterList(){
        menuList = menuList.filter(menu => menu.includes("Secizle"));
        menuList = menuList.filter((menu, index) => {return menuList.indexOf(menu) === index});
    };


    var getMenuList = function () {
        parseDataToList();
        filterList();
        return menuList;
    }

    return getMenuList();

};
