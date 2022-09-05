window.addEventListener("load", function(e) {
    const menu = document.querySelector(".menu");
    const menuBg = document.querySelector(".menu-bg");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuClose = document.querySelector(".menu-close");

    menuToggle.addEventListener("click", handleToggleMenu)
    function handleToggleMenu(e) {
        menuBg.classList.add("is-active");
        menu.classList.add("is-active");
        menuClose.classList.add("is-active");
    }
    menuClose.addEventListener("click", function() {
        menuClose.classList.remove("is-active");
        menu.classList.remove("is-active");
        menuBg.classList.remove("is-active");
    })
})
$('.review-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right'></i></button>",
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });