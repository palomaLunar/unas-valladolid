// Informacion de productos
const productos = [
    { nombre: 'Reconstruccion de uña', precio: 5, descripcion: 'La reconstrucción de uñas con acrílico es una técnica utilizada para reparar uñas dañadas, rotas o faltantes, ya sea por hongos, traumatismos o otras causas. En el caso del dedo gordo del pie, esta técnica puede ser especialmente útil para mejorar la apariencia y proteger la uña en crecimiento.', imagen: 'http://localhost/unas-valladolid/reconstrucciones/antes-y-despues-u%c3%b1a-del-pie.jpg' },
    { nombre: 'Reconstruccion de uñas mordidas', precio: 45 , descripcion: 'Este procedimiento estético tiene como objetivo principal reparar y fortalecer las uñas que han sido dañadas por el hábito de morderse las uñas (onicofagia). A través de la aplicación de materiales como el acrílico, se logra reconstruir la uña y darle una apariencia saludable y atractiva. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/reconstrucciones/magia-u%c3%b1asreconstruccion.jpg' },
    { nombre: 'Uñas moldeadas en Acrilico', precio: 15, descripcion: 'Las uñas acrílicas son una forma de extensión de uñas artificiales. Se crean mezclando un polvo acrílico con un líquido monómero, formando una pasta que se moldea sobre la uña natural. Una vez curado, el acrílico forma una uña dura y resistente que puede ser esculpida y decorada. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-acrilicas/Acr%c3%adlicas(9).jpg' },
    { nombre: 'Manicura rusa', precio: 15, descripcion: 'La manicura rusa es una técnica de cuidado de uñas que se enfoca en conseguir unas uñas perfectamente limpias y cuidadas. A diferencia de las manicuras tradicionales, la manicura rusa es un procedimiento en seco, es decir, no se remojan las uñas. Se utiliza un torno eléctrico con diferentes tipos de fresas para eliminar la cutícula y las células muertas de la piel alrededor de la uña, dejando una superficie lisa y preparada para la aplicación de cualquier tipo de esmalte o material de construcción como el acrílico.', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'Uñas moldeadas en Acrilico', precio: 15, descripcion: 'Las uñas acrílicas son una forma de extensión de uñas artificiales. Se crean mezclando un polvo acrílico con un líquido monómero, formando una pasta que se moldea sobre la uña natural. Una vez curado, el acrílico forma una uña dura y resistente que puede ser esculpida y decorada. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-acrilicas/Acr%c3%adlicas(9).jpg' },
    { nombre: 'Relleno acrilico', precio: 35, descripcion: 'Un relleno acrílico es un procedimiento de mantenimiento que se realiza de 3 a 4 semanas (segun el crecimiento propio) de las uñas acrílicas para conservar su aspecto estético y su estructura. A medida que la uña natural crece, se crea un espacio entre la cutícula y el acrílico aplicado anteriormente. El relleno consiste en rellenar este espacio con nuevo material acrílico, uniéndolo a la parte ya existente de la uña. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-acrilicas/acrilicas32.jpg' },
    { nombre: 'semipermanente', precio: 15, descripcion: 'El esmaltado semipermanente es una técnica que combina la belleza de un esmalte tradicional con la durabilidad de un gel. Es una opción popular entre quienes buscan una manicura que dure más tiempo y que resista las actividades diarias sin dañarse. base sobre el largo propio de tu uña "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-semi/Semipermanente.jpg' },
    { nombre: 'SOLO quitar acrilico', precio: 15, descripcion: '¡Cansada del acrílico?   Te ofrecemos un servicio de retiro seguro y rápido para que puedas lucir unas uñas naturales y saludables.   Utilizamos productos de alta calidad y técnicas cuidadosas para garantizar los mejores resultados. ¡Reserva tu cita ahora!', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'SOLO quitar semipermanete', precio: 10, descripcion: '¡Cansada del esmalte semipermanente?   Te ofrecemos un servicio de retiro seguro y rápido para que puedas lucir unas uñas naturales y saludables.   Utilizamos productos de alta calidad y técnicas cuidadosas para garantizar los mejores resultados. ¡Reserva tu cita ahora!', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'Quitar acrilico mas hacer semipermanente', precio: 30, descripcion: 'Con base a nuestra experiencia y la calidad de nuestros productos, tambien ofrecemos no solo  retirar de manera saludable y con buenas tecnicas el acrilico, si no tambien luego dejar tus uñas impecables con un tratamiento de esmaltado semipermanete, para que sigas luciendo divina. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'Quitar semipermanente mas hacer manicura', precio: 15, descripcion: '"Nuestro proceso comienza con la remoción cuidadosa de tu esmalte semipermanente. Utilizamos productos especializados que ablandan el gel sin dañar tus uñas naturales. Después de retirar el esmalte, tus uñas estarán listas para recibir una manicura rusa, que incluye la limpieza profunda de cutículas, el limado y el pulido para un acabado perfecto."', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Pedicura completa con semipermante en pies', precio: 15, descripcion: 'pedicura en seco (rusa) base para preparar las uñas y dejarlas perfectas para un esmaltado semipermante, acompañado de la exfoliacion de las celulas muertas , mas la eliminacion de las durezas de los pies.', imagen: 'http://localhost/unas-valladolid/reconstrucciones/SANDIA.jpg' },
    { nombre: 'Semipermanente en pies', precio: 35, descripcion: '¡Anímate a probar el esmalte semipermanente en pies y luce unas uñas hermosas durante más tiempo!', imagen: 'http://localhost/unas-valladolid/img-semi/img-pies/Pies%20fuera!!%20%23pedicura%20%23pedicuraenvalladolid.jpg' },
    { nombre: 'Solo quitar semi mas cortar uñas', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Uña rota ', precio: 3, descripcion: '', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Decoracion de uña ', precio: 2, descripcion: 'Estamos encantadas con en hacer realidad tu idea asi que Cada decoracion tiene un precio extra por el trabajo artesanal y artistico que conlleva ademas del tiempo y los productos requeridos.', imagen: 'http://localhost/unas-valladolid/img-acrilicas/Acr%c3%adlicaspiedra.jpg' }, // ... más productos
];

// obtenemos elemento del html la carta de descripcion del los productos
const contenedorProductos = document.getElementById('productos-card');

// Iterar sobre el array y crear una tarjeta por cada producto
productos.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card', 'cartajs');

    // Crear elementos HTML para cada propiedad del producto
    const imagen = document.createElement('img');
    imagen.src = `${producto.imagen}`;
    imagen.classList.add("img-manicuras") // Agregar la URL de la imagen
   
    const titulo = document.createElement('h3');
    titulo.textContent = producto.nombre;

    const precio = document.createElement('h5');
    precio.textContent = `Precio: $${producto.precio}`;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion; 


    // Agregar los elementos a la tarjeta
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);

    // Agregar la tarjeta al contenedor
    contenedorProductos.appendChild(tarjeta);
});
const tarjetaProductos = `
    <div class="card">
    <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <p>${producto.descripcion}</p>
    </div>
`;
tarjeta.innerHTML = tarjetaProductos;






//!aqui eta el javascrip de Tratamientos:



const tratamiento = [
    { nombre: 'Reconstruccion de uña', precio: 5, descripcion: 'La reconstrucción de uñas con acrílico es una técnica utilizada para reparar uñas dañadas, rotas o faltantes, ya sea por hongos, traumatismos o otras causas. En el caso del dedo gordo del pie, esta técnica puede ser especialmente útil para mejorar la apariencia y proteger la uña en crecimiento.', imagen: 'http://localhost/unas-valladolid/reconstrucciones/antes-y-despues-u%c3%b1a-del-pie.jpg' },
    { nombre: 'Reconstruccion de uñas mordidas', precio: 45 , descripcion: 'Este procedimiento estético tiene como objetivo principal reparar y fortalecer las uñas que han sido dañadas por el hábito de morderse las uñas (onicofagia). A través de la aplicación de materiales como el acrílico, se logra reconstruir la uña y darle una apariencia saludable y atractiva. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/reconstrucciones/magia-u%c3%b1asreconstruccion.jpg' },
    { nombre: 'Uñas moldeadas en Acrilico', precio: 15, descripcion: 'Las uñas acrílicas son una forma de extensión de uñas artificiales. Se crean mezclando un polvo acrílico con un líquido monómero, formando una pasta que se moldea sobre la uña natural. Una vez curado, el acrílico forma una uña dura y resistente que puede ser esculpida y decorada. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-acrilicas/Acr%c3%adlicas(9).jpg' },
    { nombre: 'Manicura rusa', precio: 15, descripcion: 'La manicura rusa es una técnica de cuidado de uñas que se enfoca en conseguir unas uñas perfectamente limpias y cuidadas. A diferencia de las manicuras tradicionales, la manicura rusa es un procedimiento en seco, es decir, no se remojan las uñas. Se utiliza un torno eléctrico con diferentes tipos de fresas para eliminar la cutícula y las células muertas de la piel alrededor de la uña, dejando una superficie lisa y preparada para la aplicación de cualquier tipo de esmalte o material de construcción como el acrílico.', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'Uñas moldeadas en Acrilico', precio: 15, descripcion: 'Las uñas acrílicas son una forma de extensión de uñas artificiales. Se crean mezclando un polvo acrílico con un líquido monómero, formando una pasta que se moldea sobre la uña natural. Una vez curado, el acrílico forma una uña dura y resistente que puede ser esculpida y decorada. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-acrilicas/Acr%c3%adlicas(9).jpg' },
    { nombre: 'Relleno acrilico', precio: 35, descripcion: 'Un relleno acrílico es un procedimiento de mantenimiento que se realiza de 3 a 4 semanas (segun el crecimiento propio) de las uñas acrílicas para conservar su aspecto estético y su estructura. A medida que la uña natural crece, se crea un espacio entre la cutícula y el acrílico aplicado anteriormente. El relleno consiste en rellenar este espacio con nuevo material acrílico, uniéndolo a la parte ya existente de la uña. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-acrilicas/acrilicas32.jpg' },
    { nombre: 'semipermanente', precio: 15, descripcion: 'El esmaltado semipermanente es una técnica que combina la belleza de un esmalte tradicional con la durabilidad de un gel. Es una opción popular entre quienes buscan una manicura que dure más tiempo y que resista las actividades diarias sin dañarse. base sobre el largo propio de tu uña "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-semi/Semipermanente.jpg' },
    { nombre: 'SOLO quitar acrilico', precio: 15, descripcion: '¡Cansada del acrílico?   Te ofrecemos un servicio de retiro seguro y rápido para que puedas lucir unas uñas naturales y saludables.   Utilizamos productos de alta calidad y técnicas cuidadosas para garantizar los mejores resultados. ¡Reserva tu cita ahora!', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'SOLO quitar semipermanete', precio: 10, descripcion: '¡Cansada del esmalte semipermanente?   Te ofrecemos un servicio de retiro seguro y rápido para que puedas lucir unas uñas naturales y saludables.   Utilizamos productos de alta calidad y técnicas cuidadosas para garantizar los mejores resultados. ¡Reserva tu cita ahora!', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'Quitar acrilico mas hacer semipermanente', precio: 30, descripcion: 'Con base a nuestra experiencia y la calidad de nuestros productos, tambien ofrecemos no solo  retirar de manera saludable y con buenas tecnicas el acrilico, si no tambien luego dejar tus uñas impecables con un tratamiento de esmaltado semipermanete, para que sigas luciendo divina. "INCLUYE MANICURA RUSA"', imagen: 'http://localhost/unas-valladolid/img-semi/manicurahombre.png' },
    { nombre: 'Quitar semipermanente mas hacer manicura', precio: 15, descripcion: '"Nuestro proceso comienza con la remoción cuidadosa de tu esmalte semipermanente. Utilizamos productos especializados que ablandan el gel sin dañar tus uñas naturales. Después de retirar el esmalte, tus uñas estarán listas para recibir una manicura rusa, que incluye la limpieza profunda de cutículas, el limado y el pulido para un acabado perfecto."', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Pedicura completa con semipermante en pies', precio: 15, descripcion: 'pedicura en seco (rusa) base para preparar las uñas y dejarlas perfectas para un esmaltado semipermante, acompañado de la exfoliacion de las celulas muertas , mas la eliminacion de las durezas de los pies.', imagen: 'http://localhost/unas-valladolid/reconstrucciones/SANDIA.jpg' },
    { nombre: 'Semipermanente en pies', precio: 35, descripcion: '¡Anímate a probar el esmalte semipermanente en pies y luce unas uñas hermosas durante más tiempo!', imagen: 'http://localhost/unas-valladolid/img-semi/img-pies/Pies%20fuera!!%20%23pedicura%20%23pedicuraenvalladolid.jpg' },
    { nombre: 'Solo quitar semi mas cortar uñas', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Uña rota ', precio: 3, descripcion: '', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Decoracion de uña ', precio: 2, descripcion: 'Estamos encantadas con en hacer realidad tu idea asi que Cada decoracion tiene un precio extra por el trabajo artesanal y artistico que conlleva ademas del tiempo y los productos requeridos.', imagen: 'http://localhost/unas-valladolid/img-acrilicas/Acr%c3%adlicaspiedra.jpg' }, // ... más productos
];

// obtenemos elemento del html la carta de descripcion del los productos
const contenedorServicios = document.getElementById('tratamientos');

// Iterar sobre el array y crear una tarjeta por cada producto
tratamiento.forEach(servicio => {
    const carta = document.createElement('div');
    carta.classList.add('tratamiento');

    // Crear elementos HTML para cada propiedad del servicio
    const imagenTratamiento = document.createElement('img');
    imagenTratamiento.src = `${servicio.imagen}`;
    imagenTratamiento.classList.add("img-tratamientos") // Agregar la URL de la imagen
   
    const nombreTratamiento = document.createElement('h3');
    nombreTratamiento.textContent = servicio.nombre;


    const descripcionTratamiento= document.createElement('p');
    descripcionTratamiento.textContent = servicio.descripcion; 


    // Agregar los elementos a la carta
    carta.appendChild(imagenTratamiento);
    carta.appendChild(descripcionTratamiento);
    carta.appendChild(nombreTratamiento);
   

    // Agregar la carta al contenedor
    contenedorServicios.appendChild(carta);
});
const cartaTratamientos = `
    <div class="card">
    <img src="${servicio.imagen}" alt="${servicio.nombre}">
        <h2>${servicio.nombre}</h2>
        <p>Precio: $${servicio.precio}</p>
        <p>${servicio.descripcion}</p>
    </div>
`;
carta.innerHTML = cartaTratamientos;
