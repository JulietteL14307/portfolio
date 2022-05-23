// flower nav animation

$(window).load(function(){
    $('.toggle').addClass('menu');
    $('.toggle').click(function(){
        $('.icon').toggleClass('material-icons').toggleClass('entypo-cancel');
        $('.toggle').toggleClass('menu').toggleClass('cancel');
        $(".menu").toggleClass("open");
    });
});

// read more

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

// leaves

function leafOne() {
  document.getElementById("span").style.display = 'block';
  document.getElementById("xbutton").style.display = 'block'; 
  document.getElementById("span").innerHTML = '<p>InventoryStory CRUD App</p>';
}