// import $ from 'jquery';
// import 'jquery-steps/build/jquery.steps';
// import 'jquery-validation';
// import 'jquery-validation/dist/localization/messages_es_PE';

// window.SimpleLightbox = SimpleLightbox;

export const init = () => {
    $(function() {
        const formLogin = $('#formLogin');
        const formRegister = $('#formRegister');
        const formRegisterData = $('#formRegisterData');
        const formSteps = $('#formSteps');
        const openMenu = $('#openMenu');
        const tabsProcedure = $('.app_prodecure ul li a');
        const modalClose = $('.modal_close');
        const openModal = $('[data-target="modal"]');
        // const closeMenu = $('#closeMenu');

        // Form login
        if(formLogin.length) {
            formLogin.validate({
                errorPlacement: function errorPlacement(error, element) {
                    element.before(error);
                },
                highlight: function (element) {
                    var el = $(element);
                    const error_box = $('.error_box');
                    el.siblings('.checkmark').addClass('checkmark__error');
                    el.addClass('error');
                    error_box.addClass('error_box__on');
          
                },
                unhighlight: function (element) {
                    var el = $(element);
                    el.removeClass('error');
                    el.siblings('.checkmark').removeClass('checkmark__error');
                },
                submitHandler: function(form) {
                    // $('.overlay').fadeIn();
                    // $('.modal#modalThanks').fadeIn();
                    form.submit();
                }
            }); 
        }

        // Form register
        if(formRegister.length) {
            ignore: [':not(checkbox:hidden)'],
            formRegister.validate({
                errorPlacement: function errorPlacement(error, element) {
                    element.before(error);
                },
                highlight: function (element) {
                    var el = $(element);
                    const error_box = $('.error_box');
                    el.siblings('.checkmark').addClass('checkmark__error');
                    el.addClass('error');
                    error_box.addClass('error_box__on');
          
                },
                unhighlight: function (element) {
                    var el = $(element);
                    el.removeClass('error');
                    el.siblings('.checkmark').removeClass('checkmark__error');
                },
                submitHandler: function(form) {
                    $('.overlay').fadeIn();
                    $('.modal#modalThanksRegister').fadeIn();
                    // form.submit();
                }
            }); 
        }

        //Form register data
        if(formRegisterData.length) {
            formRegisterData.validate({
                errorPlacement: function errorPlacement(error, element) {
                    element.before(error);
                },
                highlight: function (element) {
                    var el = $(element);
                    const error_box = $('.error_box');
                    el.siblings('.checkmark').addClass('checkmark__error');
                    el.addClass('error');
                    error_box.addClass('error_box__on');
          
                },
                unhighlight: function (element) {
                    var el = $(element);
                    el.removeClass('error');
                    el.siblings('.checkmark').removeClass('checkmark__error');
                },
                submitHandler: function(form) {
                    $('.overlay').fadeIn();
                    $('.modal#modalThanksRegisterData').fadeIn();
                    // form.submit();
                }
            }); 
        }

        //Form steps
        if(formSteps.length) {
            formSteps.validate({
                errorPlacement: function errorPlacement(error, element) {
                    element.before(error);
                },
                highlight: function (element) {
                    var el = $(element);
                    const error_box = $('.error_box');
                    el.siblings('.checkmark').addClass('checkmark__error');
                    el.addClass('error');
                    error_box.addClass('error_box__on');
          
                },
                unhighlight: function (element) {
                    var el = $(element);
                    el.removeClass('error');
                    el.siblings('.checkmark').removeClass('checkmark__error');
                },
                submitHandler: function(form) {
                    $('.overlay').fadeIn();
                    $('.modal#modalThanksRegisterApplication').fadeIn();
                    // form.submit();
                }
            }); 
        }

        if(formSteps.length) {
            // const wizard = $("#formSteps").steps();

            formSteps.children("div").steps({
                headerTag: "h3",
                bodyTag: "section",
                transitionEffect: "slideLeft",
                labels: {
                    finish: "Enviar",
                    next: "Siguiente",
                    previous: "Atrás"
                },
                onInit: function(event, currentIndex) {

                    const openFile = $('#openFile');

                    $('.actions ul li a').addClass('btn');
                    $('.actions ul li:last-child a').addClass('btn__yellow');

                    openFile.on('click', function(e) {
                        $('#file').click();
                    });
                },
                onStepChanging: function (event, currentIndex, newIndex)
                {
                    formSteps.validate().settings.ignore = ":disabled,:hidden";
                    return formSteps.valid();
                },
                onFinishing: function (event, currentIndex)
                {
                    formSteps.validate().settings.ignore = ":disabled";
                    return formSteps.valid();
                },
                onFinished: function (event, currentIndex)
                {
                    formSteps.submit();
                }
            });
        }

        openMenu.on('click', function() {
            $('.mobile').toggleClass('show');
        });

        tabsProcedure.on('click', function(e) {
            e.preventDefault();
            const isThis = $(this);
            const isThisId = $(this).data('id');
            
            isThis.addClass('active');
            isThis.parent().siblings().children().removeClass('active');

            console.log(isThisId);

            $('#' + isThisId).show();
            $('#' + isThisId).siblings().hide();

            // if(isThisId == 'dataApplication') {
            //     $()
            // }
        });

        openModal.on('click', function(e) {

            const isModalId = $(this).data('modal');
            $('.overlay').fadeIn();
            $('.modal#' + isModalId).fadeIn();
        });

        modalClose.on('click', function() {
            $('.overlay').fadeOut();
            $('.modal').fadeOut();
        })
    });
}