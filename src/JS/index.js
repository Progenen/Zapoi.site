import './libs/maskedInput';

document.addEventListener('DOMContentLoaded', function () {

    // functions for adaptive
    function adapt576() {
        const footerColLeft = document.querySelector(".footer__col--left");
        const footerPhone = document.querySelector(".footer__phone");

        footerColLeft.append(footerPhone);
    }

    // functions for validation form
    function doValid(input) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        input.previousElementSibling.style.opacity = 0;
    }

    function doInValid(input, error = 'Это поле обязательно') {
        const label = input.previousElementSibling

        input.classList.remove("valid");
        input.classList.add("invalid");
        label.textContent = error;

        label.style.cssText = `
            opacity: 1;
            top: -${label.clientHeight}px;
        `;
    }

    // const burger = document.querySelector(".header__burger");
    // const menu = document.querySelector(".header__col--menu");
    // const header = document.querySelector("header");

    // burger.addEventListener("click", () => {
    //     burger.classList.toggle("active");
    //     menu.classList.toggle("active");
    //     document.body.classList.toggle("lock");
    // });


    // Calculations for offer margin 
    const header = document.querySelector(".header");
    const offer = document.querySelector(".offer");

    if (header) {
        offer.style.paddingTop = header.clientHeight + "px";
    }

    // Validation for forms with class .call-form
    if (document.querySelector(".call")) {

        const callForm = document.querySelectorAll(".call-form");

        callForm.forEach(form => {
            const callPhone = form.querySelector("[name='phone']");
            const callName = form.querySelector("[name='name']");
            const callBtn = form.querySelector("button[type='submit']");

            callPhone.addEventListener("input", (e) => {
                const value = e.target.value;
                if (value.length < 18) {
                    doInValid(e.target, "Введите корректный номер");
                } else {
                    doValid(e.target);
                }
            });

            callName.addEventListener("input", (e) => {
                const value = e.target.value;
                if (value.length < 2) {
                    doInValid(e.target, "Введите корректное имя");
                } else {
                    doValid(e.target);
                }
            });
        })
    }

    // AJAX sending from forms with .class-form
    $(".call-form").each(function ()  {
        $(this).submit(function(e) { 
            popLoad.classList.add("show");
            let form_data = $(this).serialize(); 
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "plump", // insert path to your php mailer from index.html file
                data: form_data,
                success: function() {
                },
                error: function() {
                }
            });
        });
    })


    // adaptive breakpoints
    if (window.innerWidth < 576) {
        adapt576();
    }


});