const btnHD = document.querySelector(".header-button").addEventListener("click", (e => {
    e.preventDefault();
    const t = "open" != document.body.dataset.menu ? "open" : "close";
    document.body.setAttribute("data-menu", t)
  }));

const namaDosen = [];
      namaDosen[0] = "Nachoneko";
      document.getElementById('namaDosen').innerHTML = namaDosen;
const imgDosen = [];
      imgDosen[0] = "<img class='profil' src='img/nacho.jpg' alt='Nachoneko' title='Nachoneko'>";
      document.getElementById('imgDosen').innerHTML = imgDosen;