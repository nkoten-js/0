

// [ sidebar ]  =================================================================
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}
let sidebar = document.querySelector(".sbar");
let sidebarBtn = document.querySelector(".switch");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});


// [ geo server #1 ]   =========================================================
/* Add "https://api.ipify.org?format=json" This method uses ipify.org api to get the clients IP Address. 
                                                                                                                                                                                                                                                                                                                                                                                                                                This method is completely free and no limitations of use. */
/* 
$.getJSON("https://api.ipify.org?format=json",
    function(data) {

        // userip element is where the IP will be displayed
        $("#userip").html(data.ip);
    })

 */


// [ geo server ]
// [ SCRIPT DE GEOLOCALIZAÇÃO ] ==================================================
$.get("https://ipinfo.io/json", function(response) {
    $("#ip").html(response.ip);
    $("#hostname").html(response.hostname);
    $("#region").html(response.region);
    $("#loc").html(response.loc);
    $("#org").html(response.org);
    $("#postal").html(response.postal);
    $("#timezone").html(response.timezone);
    $("#city").html(response.city);
    $("#country").html(response.country);
}, "jsonp");

