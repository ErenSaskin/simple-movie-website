var heroElement = document.getElementById("hero");
var menuElement = document.getElementById('menu');
var menuLinkItems = document.getElementById("menu-link-items");
var mainElement = document.getElementById('main');


var Index = (function (){
    var target;
    
    var setTarget = function(newTarget) {
        target = newTarget;
    };
    var getTarget = function() {
        return target;
    };
    

    if (getTarget() === undefined) {
        setTarget(heroElement);
    }

    function handleKey(ev) {
        if (getTarget() == heroElement) {
            switch(ev.key){
                case 'ArrowLeft':
                case 'm':
                    setTarget(menuElement);
                    break;
                
                case 'ArrowRight':
                case 'v':
                    setTarget(mainElement);
                    mainElement.focus();
                    break;

                case 'Escape':
                    setTarget(heroElement);
                    break;
            }
        }
    };
    document.addEventListener("keydown", handleKey);

    
    return{
        setTarget: setTarget,
        getTarget: getTarget
    }
})();