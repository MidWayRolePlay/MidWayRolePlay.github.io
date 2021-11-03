if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 1000);

}

var x = 0;

var titleText = ["&#128293;|", "&#128293; ?|", "&#128293; M|", "&#128293; Mi|", "&#128293; Mid|", "&#128293; Midw|", "&#128293; Midwa|", "&#128293; Midway|", "&#128293; MidwayR|", "&#128293; MidwayRo|",  "&#128293; MidwayRol|",  "&#128293; MidwayRole|",  "&#128293; MidwayRoleP|",  "&#128293; MidwayRolepl|",  "&#128293; MidwayRolePla|",  "&#128293; MidwayRolePlay", "&#128293; MidwayRolePlay", "&#128293; MidwayRolePlay", "&#128293; MidwayRolePlay", "&#128293; MidwayRolePlay", "&#128293; MidwayRolePla|", "&#128293; MidwayRolePl|", "&#128293; MidwayRoleP|", "&#128293; MidwayRoleP|","&#128293; MidwayRole|", "&#128293; MidwayRol|", "&#128293; MidwayRol|", "&#128293; MidwayRol|", "&#128293; MidwayRo|","&#128293; MidwayR|", "&#128293; Midway|", "&#128293; Midwa|", "&#128293; Midw|", "&#128293; Mid|", "&#128293; Mi|", "&#128293; M|", "&#128293; |", "&#128293;|", "&#128293; .|", "&#128293; $|"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

