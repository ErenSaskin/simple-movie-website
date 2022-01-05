var Menu = (function (){
    var selectedChild = null;

    var template = function(data){
        var ul = menuLinkItems;
        var button = document.createElement("button");
        var li = document.createElement("li");

        button.id = data;
        li.append(data.slice("\Secizle\\\\".length));

        button.appendChild(li);
        ul.appendChild(button);

        return button;
    };
    
    var createMenu = function(movieObjectList, menuList){
        
        var prevClickItem;

        menuList.forEach(function (menu) {
            var button = template(menu);
            button.addEventListener("click", function() {
                prevClickItem = button; 
                Row.checkRequest(movieObjectList, menuList, button.id);
                selectedChild = button;
                Index.setTarget(menuElement);
                menuElement.classList.add('menu-hover');
                
                selectedChild.parentElement.childNodes.forEach(element => {
                    if(element.classList.contains('btn-selected')){
                        element.classList.remove("btn-selected");
                    }

                });
                selectedChild.classList.add("btn-selected");
                selectedChild.classList.remove("btn-focus");
            });
        });
        
    };

    
    function handleKey(ev) {
        if (Index.getTarget() == menuElement) {
            menuLinkItems.focus();
            menuElement.classList.add('menu-hover');
            if(selectedChild == null){
                selectedChild = menuLinkItems.firstChild;
                selectedChild.classList.add("btn-selected");
                
            }
            switch(ev.key){ 
                case 'ArrowUp':
                    if(selectedChild.previousElementSibling != null){
                        selectedChild.classList.remove("btn-focus");
                        selectedChild = selectedChild.previousElementSibling;
                        selectedChild.classList.add("btn-focus");
                    }
                    break;
                case 'ArrowDown':
                    if(selectedChild.nextElementSibling != null){
                        selectedChild.classList.remove("btn-focus");
                        selectedChild = selectedChild.nextElementSibling;
                        selectedChild.classList.add("btn-focus");
                    }
                    break;
                case 'Enter':
                    selectedChild.click();
                    break;
                case 'ArrowRight':
                case 'v':
                    selectedChild.classList.remove("btn-focus");
                    Index.setTarget(mainElement);
                    Index.getTarget().focus();
                    menuElement.classList.remove('menu-hover');
                    break;
                case 'Escape':
                    Index.setTarget(heroElement);
                    menuElement.classList.remove('menu-hover');
                    break;
            } 
        }
    };
    document.addEventListener("keydown",handleKey);



    return{
        createMenu: createMenu
    }

})();