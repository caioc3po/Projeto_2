$(document).ready(function() {
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('li').click(function() {
        $('nav').slideToggle();
    })
})