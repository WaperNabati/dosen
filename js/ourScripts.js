const btnHD = document.querySelector(".header-button").addEventListener("click", (e => {
    e.preventDefault();
    const t = "open" != document.body.dataset.menu ? "open" : "close";
    document.body.setAttribute("data-menu", t)
  }))

var myCarousel = document.querySelector('#slideNews')
var carousel = new bootstrap.Carousel(slideNews, {
    interval: 3000,
    wrap: true
})