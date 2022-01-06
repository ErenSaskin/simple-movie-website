var Col = (function(){

    var movieObjectList = [];
    var selectedChild = null;

    var template = function(colElement, data){
        var card = document.createElement("div");
        var cardImg = document.createElement("div");
        var img = document.createElement("img");
        var cardName = document.createElement("div");
        var h4 = document.createElement("h4");

        card.className = "card";
        card.setAttribute("movie", data.Title);
        cardImg.className = "card-img";
        cardName.className = "card-name";

        img.src = data.Poster;
        h4.append(data.Title);

        card.appendChild(cardImg);
        cardImg.appendChild(img);
        card.appendChild(cardName);
        cardName.appendChild(h4);
        colElement.appendChild(card);

        return card;
    };
    
    var createCard = function (movies, header, colElement){
        movieObjectList = movies;

        for(var item in movieObjectList){
           movieObjectList[item].Category.forEach(function (value){
                if(value.includes(header)){
                    var card = template(colElement, movieObjectList[item]);
                    card.addEventListener("click", function(){
                        Detail.createDetail(movieObjectList, card.getAttribute("movie"));
                        Index.setTarget(document.getElementById('detail'));
                        menuElement.classList.remove("menu-hover");
                        selectedChild = card;
                    });
                }
            }); 
        }
    };


    function handleKey(ev) {
        if (Index.getTarget() === undefined){
            setTarget(heroElement);
        }
        if (Index.getTarget() == mainElement) {
            
            if(selectedChild == null){
                selectedChild = document.getElementById("col").firstChild;
                selectedChild.classList.add('card-selected');
            }
            else{
                switch(ev.key){ 
                    case 'ArrowLeft':
                        if(selectedChild.previousElementSibling != null){
                            selectedChild = selectedChild.previousElementSibling;
                            selectedChild.classList.add('card-selected');
                            selectedChild.nextElementSibling.classList.remove('card-selected');
                        }
                        else{
                            Index.setTarget(menuElement);
                            Index.getTarget().focus();
                            selectedChild = null;
                        }
                        break;
                    case 'ArrowRight':
                        if(selectedChild.nextElementSibling != null){
                            
                            selectedChild = selectedChild.nextElementSibling;
                            selectedChild.classList.add('card-selected');
                            selectedChild.previousElementSibling.classList.remove('card-selected');
                        }
                        break;
                    case 'Enter':
                        selectedChild.click();
                        Index.setTarget(document.getElementById('detail'));
                        break;
                        
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case 'm':
                        Index.setTarget(menuElement);
                        selectedChild = null;
                        break;
                }
            }
            selectedChild.parentElement.focus();

        }
        else if(Index.getTarget() != document.getElementById("detail")){
            selectedChild = null;
        }
    };
    document.addEventListener("keyup",handleKey);

    return{
        createCard: createCard
    };
}());