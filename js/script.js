$(window).on("load",start);

function start(){

//$("body").css("background-color","pink");
$("#nav a:first").click();

}

$(document).on("click", "#nav a[href]",nav);
function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" + href);

    $("#nav a").fadeTo("fast", 0.25);
    $(this).fadeTo("fast", 1);

    $("#nav_left").fadeTo(0, 0);
    if(href == "home.html"){

        $("#nav_title").text("Home");

    }else if (href == "search.html") {

        $("#nav_title").text("Search");

    }else if (href == "faves.html") {

        $("#nav_title").text("My Favorites");

    }else if (href == "profile.html") {

        $("#nav_title").text("Your Settings");
    }
    
}

$(document).on("click", "#content a[href]",contentNav);
function contentNav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/" +href);

    $("#nav_left").fadeTo(0, 1);

    $("#nav_title").text("Article");

    
}