$(window).load(function(){
    $('.toggle').addClass('menu');
    $('.toggle').click(function(){
        $('.icon').toggleClass('material-icons').toggleClass('entypo-cancel');
        $('.toggle').toggleClass('menu').toggleClass('cancel');
        $(".menu").toggleClass("open");
    });
});