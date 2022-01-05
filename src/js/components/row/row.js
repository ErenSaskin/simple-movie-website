var Row = (function (){
    var menuList = [];
    var movieObjectList = [];

    var template = function(data){
        var main = mainElement;
        var header = data.slice("\Secizle\\\\".length);
        var row = document.createElement("row");
        row.setAttribute("header",header);
        var moviesHeader = document.createElement("div");
        var col = document.createElement("div");
        col.setAttribute("header", row.getAttribute("header"));
        
        row.className = "movies";
        moviesHeader.className = "movies-header";
        col.id = "col";
        row.id = "row";

        moviesHeader.append(data.slice("\Secizle\\\\".length));
        row.appendChild(moviesHeader);
        row.appendChild(col);
        main.appendChild(row);

        return col;
    };

    var createRow = function(firstRow = 0){
        
        mainElement.removeChild(mainElement.firstElementChild);
        mainElement.removeChild(mainElement.lastElementChild);

        for (var i = firstRow; i <= firstRow + 1; i++) {
            var colElement = template(menuList[i]);
            Col.createCard(movieObjectList, menuList[i], colElement);
        } 
    };

    var checkRequest = function(movies, menu, button = ""){
        movieObjectList = movies;
        menuList = menu;

        if(button == ""){
            createRow();
        }
        else{
            var indexOfMenu = menuList.indexOf(button);
            if(indexOfMenu == menuList.length - 1){
                indexOfMenu--;
            }
            createRow(indexOfMenu);
        }
    };

    return{
        checkRequest: checkRequest
    }


})();