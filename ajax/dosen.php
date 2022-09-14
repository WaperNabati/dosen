<link rel="stylesheet" href="https://denonbu.jp/dcKr8evJWB/wp-content/themes/denonbu/dest/style.css">
<link rel="stylesheet" href="css/style.css">
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;800&family=Orbitron:wght@500;700&display=swap" rel="stylesheet">
<?php


$search = $_GET["search"];
$dosen = [
    ["Shiranami Ramune (白波らむね)", "img/ramnueVTuber.jpg", "shiranami-ramune"],
    ["Pusu ProSeka (ぷす)", "img/Pusu.png", "pusu-proseka"],
    ["Nachoneko (甘城なつき)", "img/nacho.jpg", "nachoneko"],
    ["Usada Pekora (兎田ぺこら)", "img/pekora.jpg", "usada-pekora"],
    ["Hina Saeki (佐伯ヒナ)", "img/nana.png", "hina-saeki"],
    ["Arya Bayu Anggara Putra", "img/eyes.jpg", "arya-bayu-anggara-putra"],
    ["Tokoyami Towa (常闇トワ)", "img/towa.png", "tokoyami-towa"],
    ["Minato Aqua (湊あくあ)", "img/aqua.jpg", "minato-aqua"],
    ["Anya Melfissa (アーニャ)", "img/4mya.jpg", "anya-melfissa"]
];

?>
<ul class="movie-list" style="width: 100%;margin-top: 0;font-family:'Orbitron', sans-serif;" id="dataDosen">
    <?php foreach ($dosen as $dsn) : ?>
        <li class="movie-item" style="max-width: 100%;height:400px;">
            <div class="movie-item-button">
                <figure class="movie-item-thumb" style="height:100%;">
                    <a href="https://wapernabati.github.io/dosen/<?= $dsn[2] ?>/">
                        <img class="news-item-thumb-main" style="background-image:url(<?= $dsn[1] ?>);" id="imgAvA">
                        <div class="card-img-overlay">
                            <p class="carousel-caption btn-pink" style="font-weight: bold;font-family:'Orbitron', sans-serif;font-size: 16px;padding:5px;text-align:center;box-shadow:inset 0 0 6px rgb(255 255 255 / 80%);bottom:0;">
                                <?= $dsn[0] ?>
                            </p>
                        </div>
                    </a>
                </figure>
                <div class="movie-item-detail" style="padding:0;"></div>
            </div>
        </li>
    <?php endforeach; ?>
</ul>
<script src="https://denonbu.jp/dcKr8evJWB/wp-content/themes/denonbu/dest/script.js?t=2"></script>