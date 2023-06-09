
var divFlexcontenedor = crearElemento("div");
divFlexcontenedor.classList.add("grid-container");

crearDivHijo1();
crearDivHijo2();
crearDivHijo3();
crearDivHijo4();
crearDivHijo5();
crearDivHijo6();

adicionarBody(divFlexcontenedor);

function crearDivHijo1() {
    var divHijoUno = crearElemento("div");
    var img = crearElemento("img");
    img.setAttribute("src", "../recursos/imagenes/img1zorro.jpg");
    adicionarHijo(divHijoUno, img);
    adicionarHijo(divFlexcontenedor, divHijoUno);
}
function crearDivHijo3() {
    var divHijoUno = crearElemento("div");
    var img = crearElemento("img");
    img.setAttribute("src", "../recursos/imagenes/img4tigre.jpg");
    adicionarHijo(divHijoUno, img);
    adicionarHijo(divFlexcontenedor, divHijoUno);
}
function crearDivHijo4() {
    var divHijoUno = crearElemento("div");
    var img = crearElemento("img");
    img.setAttribute("src", "../recursos/imagenes/img5tortuga.jpg");
    adicionarHijo(divHijoUno, img);
    adicionarHijo(divFlexcontenedor, divHijoUno);
}
function crearDivHijo6() {
    var divHijoSeis = crearElemento("div");
    var form = crearElemento("form");

    var contenedorInterior = crearElemento("div");
    contenedorInterior.classList.add("contenedorInterior");
    var img = crearElemento("img");
    img.setAttribute("src", "../recursos/imagenes/img8buho.jpg");
    adicionarHijo(divHijoSeis, img);
    var titulo = crearElemento("h2");
    titulo.innerText = "Book a session";
    adicionarHijo(contenedorInterior, titulo);

    var nombre = crearElemento("input");
    nombre.setAttribute("type", "name");
    nombre.setAttribute("placeholder", "name");
    adicionarHijo(contenedorInterior, nombre);

    var email = crearElemento("input");
    email.setAttribute("type", "email");
    email.setAttribute("placeholder", "Email Address");
    adicionarHijo(contenedorInterior, email);

    var mensaje = crearElemento("textarea");
    mensaje.setAttribute("placeholder", "Menssage");
    adicionarHijo(contenedorInterior, mensaje);

    var boton = crearElemento("input");
    boton.setAttribute("type", "submit");
    boton.setAttribute("value", "seane now");
    boton.setAttribute("id", "boton");
    var botonDiv = crearElemento("div");
    botonDiv.classList.add("butom");
    adicionarHijo(botonDiv, boton);
    adicionarHijo(contenedorInterior, botonDiv);

    adicionarHijo(form, contenedorInterior);
    adicionarHijo(divHijoSeis, form);
    adicionarHijo(divFlexcontenedor, divHijoSeis);
}


function crearDivHijo2() {
    var divPadre1 = crearElemento("div");
    divPadre1.classList.add("contenedorHijo3");

    var divHijoUno = crearElemento("div");
    var img1 = crearElemento("img");
    img1.setAttribute("src", "../recursos/imagenes/imgcebra.webp");
    adicionarHijo(divHijoUno, img1);
    adicionarHijo(divPadre1, divHijoUno);

    var divHijoDos = crearElemento("div");
    var img2 = crearElemento("img");
    img2.setAttribute("src", "../recursos/imagenes/animales.jpg");
    adicionarHijo(divHijoDos, img2);
    adicionarHijo(divPadre1, divHijoDos);

    adicionarHijo(divFlexcontenedor, divPadre1);
}
function crearDivHijo5() {
    var divPadre2 = crearElemento("div");
    divPadre2.classList.add("contenedorHijo");

    var divHijoUno = crearElemento("div");
    var img1 = crearElemento("img");
    img1.setAttribute("src", "../recursos/imagenes/img9tucan.jpg");
    adicionarHijo(divHijoUno, img1);
    adicionarHijo(divPadre2, divHijoUno);

    var divHijoDos = crearElemento("div");
    divHijoDos.classList.add("contenedorHijo2");

    var nuevoDiv1 = crearElemento("div");
    adicionarHijo(divHijoDos, nuevoDiv1);
    var img2 = crearElemento("img");
    img2.setAttribute("src", "../recursos/imagenes/img7ardilla.jpg");
    adicionarHijo(nuevoDiv1, img2);

    var nuevoDiv2 = crearElemento("div");
    adicionarHijo(divHijoDos, nuevoDiv2);
    var img3 = crearElemento("img");
    img3.setAttribute("src", "../recursos/imagenes/img6puma.jpg");
    adicionarHijo(nuevoDiv2, img3);
    adicionarHijo(divPadre2, divHijoDos);
    adicionarHijo(divFlexcontenedor, divPadre2);
}