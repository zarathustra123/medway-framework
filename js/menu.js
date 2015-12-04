
/* 
    Created on : 04-Dec-2015, 20:53:44
    Author     : stephen
*/

//This menu needs to be used in conjunction with jquery

JQuery(document).ready(function ($) {
    // prepend menu icon
    $('#nav-wrap').prepend('<div id="menu-icon">Menu</div>');
    
    // toggle nav
    $("#menu-icon").on("click", function() {
        $("#nav").slideToggle();
        $(this).toggleClass("active");
    })
});


