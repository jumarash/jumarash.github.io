$(window).on("load",start);

function start(){


    $('#slideshow').slick({
        //setting-name: setting-value
        prevArrow: $("#index_slides_right"),
        nextArrow: $("#index_slides_left"),
        autoplay:true,
        fade:true
       
      });

    
    //$("body").css("background-color","pink");

    $("#nav a:first").click();

    ScrollReveal().reveal('.reveal1');
    ScrollReveal().reveal('.reveal2', { delay: 500 });
    ScrollReveal().reveal('.reveal3', { delay: 1000}); 
    ScrollReveal().reveal('.reveal4', { delay: 1500}); 
    ScrollReveal().reveal('.reveal5', { delay: 2000}); 
    
    $("#product_btn").click(function () {

     $(this).addClass("highlight");
     $(this).siblings().removeClass("highlight");
     $("#content_product").slideDown();
     $("#content_product").siblings().slideUp();

 });
 

}
$(document).on("click","#nav a[href]",nav);

function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/"+href);

    $("nav a").fadeTo("fast",0.25);
    $(this).fadeTo("fast",1);
}

$(document).on("click","#nav a[href]",nav);

function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/"+href);

    $("nav a").fadeTo("fast",0.25);
    $(this).fadeTo("fast",1);
}

$(document).on("click","#nav a[href]",nav);

function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/"+href);

    $("nav a").fadeTo("fast",0.25);
    $(this).fadeTo("fast",1);

}

$(document).on("click","#content a[href]",contentNav);

function contentNav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/"+href);

    //$("#nav_left").fadeTo(0, 1);
    
     
}

$(document).on("click","#content a[href]",contentNav);

function contentNav(e){

    e.preventDefault();

    var href = $(this).attr("href");
    $("#content").load("modules/"+href);

    
}