$(document).ready(function () {
    $('#btn_menu').click(function () {
        $(".menu").addClass("show");
        $(".filter").addClass("show_filter");
        $("li").addClass("show_li");
    });
    $("span,.filter,.menu ul a").click(function () {
        $(".menu").removeClass("show");
        $(".filter").removeClass("show_filter");
    });
    $(".bx-chevron-down").click(function () {

        var img = $(".mul_image");
        img.css("opacity", 1)
            .css("margin-top", "-23px");
        $(this).css("opacity", 0);
        $(".bx-x").css("opacity", 1)
    });
    $(".bx-x").click(function () {

        $(".mul_image").css("opacity", 0)
        $(".mul_image").css("margin-top", "-1px");
        $(".bx-x").css("opacity", 0);
        $(".bx-chevron-down").css("opacity", 1);
    });
    $(".mul_image img").click(function () {
        var n = $(this).attr("src");
        $(".m_img").attr("src", n);
    });
    $(".bx-moon").click(function(){
        $(this).css({
            "opacity":0,
            "z-index":0
        });
        $(".bx-sun").css({
            "z-index":1,
            "opacity":1
        });
        $("body,header, .main_menu").addClass("if_body");
        $("header").addClass("if_header");
        $("header h1").addClass("if_h1");
        $("#btn_menu").css("color","burlywood");
        $(".stud,.skills").addClass("if_color");
        $(".eng").css("color","white");
        $(".skills ul li").css("color","rgb(2, 255, 213)");
        $(".text_name am, footer pre").addClass("if_color");
        $("footer a").addClass("if_linke");
        $(".name").addClass("if_name");
        
    });
    $(".bx-sun").click(function(){
        $(this).css({
            "opacity":0,
            "z-index":0
        });
        $(".bx-moon").css({
            "z-index":1,
            "opacity":1
        });
        $("body,header, .main_menu").removeClass("if_body");
        $("header").removeClass("if_header");
        $("header h1").removeClass("if_h1");
        $("#btn_menu").css("color"," rgb(236, 44, 163)");
        $(".stud,.skills").removeClass("if_color");
        $(".eng").css("color","black");
        $(".skills ul li").css("color"," rgb(90, 3, 15)");
        $(".text_name am, footer pre").removeClass("if_color");
        $("footer a").removeClass("if_linke");
        $(".name").removeClass("if_name");
        
    });
    

});