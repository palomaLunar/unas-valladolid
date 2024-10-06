<!DOCTYPE html>
<html>
<head>
    <title>Sobre Nosotros</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="/../unas-valladolid/Controles/style.css"> <!-- Link al archivo CSS -->
    <link rel="stylesheet" href="/../unas-valladolid/Controles/bootswatch.css">
</head>
<body>
<header>
        <?php
            include 'header.php';
       ?>
    </header>
    <main>
    <section id="nosotros">
        <h2>Sobre Nosotros</h2>
        <p>En Luna Nails by Patricia, nos apasiona el cuidado de tus uñas. Somos un equipo de profesionales dedicados a brindarte una experiencia única y personalizada.</p>
        <div class="equipo">
            <h3>Nuestro Equipo</h3>
            <div class="miembro">
            <video class="video-nosotros" controls autoplay loop muted poster="poster.jpg">
  <source src="/../unas-valladolid/videos/acrilicas.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
                <h4>[Nombre del técnico 1]</h4>
                <p>Especialista en uñas acrílicas.</p>
            </div>
            <div class="miembro">
                </div>
        </div>
        <div class="servicios">
            <h3>Nuestros Servicios</h3>
            <img src="/../unas-valladolid/img-semi/lista-de-precios.jpg" alt="">
            <ul>
                <li>Uñas acrílicas</li>
                <li>Manicura y pedicura</li>
                <li>Diseño de uñas personalizado</li>
                </ul>
        </div> 
    </section></main>
    <footer>
    <?php
            include 'footer.php';
       ?>
    </footer>
</body>
</html>