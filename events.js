var ClickHandler = /** @class */ (function () {
    function ClickHandler() {
        var main = document.getElementById("main");
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null /*&& btn2 !== null*/) {
            main.addEventListener("click", ClickHandler.alertEventMain, true);
            btn1.addEventListener("click", ClickHandler.alertEventBtn1, true);
            // btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
        }
    }
    // capturing e bubbling
    ClickHandler.alertEventMain = function (event) {
        alert("clicked over main");
        event.stopPropagation();
    };
    ClickHandler.alertEventBtn1 = function () {
        alert("clicked btn1");
    };
    return ClickHandler;
}());
var clickHandler = new ClickHandler();
