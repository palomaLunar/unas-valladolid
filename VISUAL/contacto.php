<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <link rel="stylesheet" href="/../unas-valladolid/Controles/style.css"> <!-- Link al archivo CSS -->
    <link rel="stylesheet" href="/../unas-valladolid/Controles/bootswatch.css">
</head>

<body>
    <header>
        <?php
        include 'header.php';
        ?>
    </header>
    <main id="contenido-contacto">
        <!--    
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        form {
            width: 300px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
        }
        input[type="text"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
        }
        button[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;  

            border-radius: 4px;
            cursor: pointer;
        }
    </style> -->
        
        <div class="contacto-main">
        <h1>LLamanos directamente o dejanos tu numero y nos comunicaremos contigo</h1>
            <form action="mailto: uplmlo@hotmail.com" method="post" enctype="text/plain">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>

                <label for="email">Correo
                    electrónico:</label>
                <input type="email" id="email" name="email" required>

                <label for="mensaje">Mensaje:</label>

                <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

                <button type="submit">Enviar</button>
                <br>
                <button class="boton-llamada" onclick="location.href='tel:+34605309634'">Llamar</button>
                <br>
                <button class="boton-whatsapp" onclick="location.href='https://api.whatsapp.com/send?phone=++34605309634&text=Hola%20,%20quisiera%20más%20información%20o%20pedir%20una%20cita.'" hr>Enviar WhatsApp</button>
        </div>
        </form>


    </main>
    <footer>
        <?php
        include 'footer.php';
        ?>
    </footer>

</body>

</html>