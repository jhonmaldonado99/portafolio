//start

$(document).ready(function() {
    $('#opensidebar').on('click', function() {
        $('.nav-list').addClass('active');
    });

    $('#closesidebar').on('click', function() {
        $('.nav-list').removeClass('active');
    });
});

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    items: 2,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$(".enviarmensaje").click(function() {

});


(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Seleccionar el formulario para validar
        var forms = document.getElementsByClassName('needs-validation');
        // Validar cada campo y prevenir que se envie
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                if (form.checkValidity() === false) {

                    event.stopPropagation();
                } else {

                    /*Tomar datos*/
                    var nombre = document.getElementById('form-nombre').value,
                        correo = document.getElementById('form-email').value,
                        mensaje = document.getElementById('form-mensaje').value;

                    /*Ejecutar ajax*/
                    var xhr = new XMLHttpRequest();

                    //Abrir la conexión
                    xhr.open('POST', 'https://grupofontana.pe/inc/enviar2.php', true);
                    //siempre que usas un formulario se tiene que agregar un  header
                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    //Revisar el estado
                    xhr.onload = function() {
                        if (xhr.status === 200) {
                            var respuesta = JSON.parse(xhr.responseText);

                            if (respuesta.respuesta === true) {
                                var div = document.createElement('div');
                                div.appendChild(document.createTextNode('Se envió correctamente'));
                                div.classList.add('alert', 'alert-success', 'mt-4', 'text-center');
                                document.querySelector('form').appendChild(div);
                                setTimeout(function() {
                                    document.querySelector('.alert').remove();
                                }, 3000);
                            }
                        }
                    };

                    //Limpiar el request
                    xhr.send('nombre=' + nombre + '&correo=' + correo + '&mensaje=' + mensaje);

                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();