var dataLoad = (function(){

    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '/src/contents.json', true); 
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(xobj.responseText);
            }
            
        };
        xobj.send(null);
    };
    
    loadJSON(function(response) {
        json = JSON.parse(response);
        DataAccess.setMovieObjects(json.Contents);
    });

})();

