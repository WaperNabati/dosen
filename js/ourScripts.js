const btnHD = document.querySelector(".header-button").addEventListener("click", (e => {
    e.preventDefault();
    const t = "open" != document.body.dataset.menu ? "open" : "close";
    document.body.setAttribute("data-menu", t)
  }));

// const dosen = [];
//   dosen[0] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/ramnueVTuber.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Shiranami Ramune (白波らむね)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[1] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/Pusu.png);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Pusu ProSeka (ぷす)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[2] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/nacho.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Nachoneko (甘城なつき)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[3] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/pekora.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Usada Pekora (兎田ぺこら)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[4] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/nana.png);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Hina Saeki (佐伯ヒナ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[5] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/eyes.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Arya Bayu Anggara Putra</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[6] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/towa.png);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Tokoyami Towa (常闇トワ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[7] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/aqua.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Minato Aqua (湊あくあ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   dosen[8] = "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href=''><img class='news-item-thumb-main' style='background-image:url(img/4mya.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Anya Melfissa (アーニャ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>";
//   document.getElementById('dataDosen').innerHTML = dosen;



const data = [
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/ramune-shiranami/'><img class='news-item-thumb-main' style='background-image:url(img/ramnueVTuber.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Shiranami Ramune (白波らむね)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/pusu-proseka/'><img class='news-item-thumb-main' style='background-image:url(img/Pusu.png);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Pusu ProSeka (ぷす)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/nachoneko/'><img class='news-item-thumb-main' style='background-image:url(img/nacho.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Nachoneko (甘城なつき)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/usada-pekora/'><img class='news-item-thumb-main' style='background-image:url(img/pekora.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Usada Pekora (兎田ぺこら)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/hina-saeki/'><img class='news-item-thumb-main' style='background-image:url(img/nana.png);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Hina Saeki (佐伯ヒナ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/wafer-nabati/'><img class='news-item-thumb-main' style='background-image:url(img/eyes.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Arya Bayu Anggara Putra</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/tokoyami-towa/'><img class='news-item-thumb-main' style='background-image:url(img/towa.png);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Tokoyami Towa (常闇トワ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/minato-aqua/'><img class='news-item-thumb-main' style='background-image:url(img/aqua.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Minato Aqua (湊あくあ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>",
  "<li class='movie-item' style='max-width: 100%;height:400px;'><div class='movie-item-button'><figure class='movie-item-thumb' style='height:100%;'><a href='https://wapernabati.github.io/dosen/anya-melfissa/'><img class='news-item-thumb-main' style='background-image:url(img/4mya.jpg);'><div class='card-img-overlay'><p class='carousel-caption btn-pink' style='font-weight: bold;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;'>Anya Melfissa (アーニャ)</p></div></a></figure><div class='movie-item-detail' style='padding:0;'></div></div></li>"
];

const search 		= document.getElementsByName('keyword')[0];
const data_section 	= document.getElementsByClassName('data')[0];

search.addEventListener('keyup', function () {
    searchData();
});

function searchData() {
	const search_value 	= search.value.toLowerCase();

	const data_filtered = data.slice(0);
	data_section.innerHTML = "";
	for (var i = 0; i < data_filtered.length; i++) {
		if ( data_filtered[i].toLowerCase().includes(search_value) ) {		
			data_section.innerHTML += "<a href='#'>"+data_filtered[i]+"</a>";
		}
	}	
}