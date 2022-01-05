var  Detail = (function(){

    var movieObjectList;
    var template = function(data){
        var hero = heroElement;
        var detail = document.createElement("div");
        var cardClick = document.createElement("div");
        var info = document.createElement("div");
        var photo = document.createElement("div");
        var img = document.createElement("img");
        var movie = document.createElement("div");
        var name = document.createElement("div");
        var votes = document.createElement("div");
        var description = document.createElement("div");
        var vote1 = document.createElement("div");
        var vote2 = document.createElement("div");
        var vote3 = document.createElement("div");
        var pipe1 = document.createElement("div");
        var pipe2 = document.createElement("div");

        detail.id = "detail";
        cardClick.id = "card-click";
        info.id = "info";
        photo.id = "photo";
        img.src = data.Poster;
        movie.className = "movie";
        name.className = "name";
        votes.className = "votes";
        description.className = "description";
        vote1.className = "vote";
        vote2.className = "vote";
        vote3.className = "vote";
        pipe1.className = "pipe";
        pipe2.className = "pipe";
        
        name.append(data.Title);
        description.append(data.Description);
        vote1.append(data.IMDB + "/10");
        vote1.append(document.createElement("br"));
        vote1.append("Sinemalar.com");
        vote2.append(data.IMDB + "/10");
        vote2.append(document.createElement("br"));
        vote2.append("IMDb");
        vote3.append(data.IMDB + "/10");
        vote3.append(document.createElement("br"));
        vote3.append("Beyazperde");
        
        hero.appendChild(detail);
        detail.appendChild(cardClick);
        photo.appendChild(img);
        cardClick.appendChild(info);
        cardClick.appendChild(photo);
        info.appendChild(movie);
        movie.appendChild(name);
        movie.appendChild(votes);
        movie.appendChild(description);
        votes.appendChild(vote1);
        votes.appendChild(pipe1);
        votes.appendChild(vote2);
        votes.appendChild(pipe2);
        votes.appendChild(vote3);

        return detail;
    };

    var createDetail = function (objectList, movie){
        movieObjectList = objectList;

        for(var item in movieObjectList){
            if(movieObjectList[item].Title == movie){
                var detail = template(movieObjectList[item]);
                mainElement.classList.add("blur");
                menuElement.classList.add("blur");
                detail.addEventListener("click", function(){
                    mainElement.classList.remove("blur");
                    menuElement.classList.remove("blur");
                    detail.remove();
                    Index.setTarget(mainElement);
                });
            }
        }
    };
    

    function handleKey(ev) {
        if (Index.getTarget() === undefined){
            setTarget(heroElement);
        }
        if (Index.getTarget() == document.getElementById("detail")) {
            switch(ev.key){ 
                case 'Escape':
                    document.getElementById('detail').remove();
                    mainElement.classList.remove("blur");
                    menuElement.classList.remove("blur");
                    Index.setTarget(mainElement);
                    break;
            }
        }
    };
    document.addEventListener("keydown",handleKey);

    
    return {
        createDetail: createDetail
    };
})();