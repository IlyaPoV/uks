$(document).ready(function () {
        // Маска для всех телефонных полей
        $('input[type="tel"]').mask("+7 (999) 999-99-99");

        function showError(input, message) {
            $(input).addClass('input-error');
            if (!$(input).next('.error-text').length) {
                $(input).after(`<div class="error-text">${message}</div>`);
            }
        }

        function clearErrors(form) {
            $(form).find('.input-error').removeClass('input-error');
            $(form).find('.error-text').remove();
        }

        function isPhoneValid(phone) {
            return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone);
        }

        function sendAjaxForm(form, data) {
            ym(33675014,'reachGoal','form_success');
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: '/_service/modern_sendcallback.php',
                data: JSON.stringify(data),
                success: function (response) {
                    showSuccessPopup();
                    $('#successPopup').fadeIn();
                    $(form).trigger("reset");
                },
                error: function () {
                    alert('Ошибка при отправке формы. Попробуйте позже.');
                }
            });
        }

        $('#orderRequestForm, #requestForm, #projectForm, #questionForm, #callbackForm').on('submit', function (e) {
            e.preventDefault();

            const form = this;
            clearErrors(form);

            const company = $(form).find('input[name="company"]').val() || '';
            const name = $(form).find('input[name="userName"]').val() || $(form).find('input[name="name"]').val() || '';
            const phone = $(form).find('input[name="phone"]').val() || $(form).find('input[type="tel"]').val() || '';
            const email = $(form).find('input[name="email"]').val() || $(form).find('input[name="userEmail"]').val() || '';
            const city = $(form).find('input[name="city"]').val() || $(form).find('input[name="userCity"]').val() || '';
            const message = $(form).find('textarea[name="message"]').val() || '';
            const policy = $(form).find('input[type="checkbox"][required]');

            let valid = true;

            if ($(form).attr('id') === 'questionForm') {
                if (!company.trim()) {
                    showError($(form).find('input[name="company"]'), 'Введите название компании');
                    valid = false;
                }

                if (!email.trim()) {
                    showError($(form).find('input[name="email"]'), 'Введите email');
                    valid = false;
                }

                if (!city.trim()) {
                    showError($(form).find('input[name="city"]'), 'Введите город');
                    valid = false;
                }
            }

            if ($(form).attr('id') === 'callbackForm') {
                if (!city.trim()) {
                    showError($(form).find('input[name="city"]'), 'Введите город');
                    valid = false;
                }
            }

            if (!phone || !isPhoneValid(phone)) {
                showError($(form).find('input[type="tel"]'), 'Введите корректный номер');
                valid = false;
            }

            if (policy.length && !policy.is(':checked')) {
                alert('Необходимо согласиться с политикой конфиденциальности');
                valid = false;
            }

            if (valid) {
                const formData = {
                    form: $(form).attr('id'),
                    company: company.trim(),
                    name: name.trim(),
                    phone: phone.trim(),
                    email: email.trim(),
                    city: city.trim(),
                    message: message.trim(),
                };

                sendAjaxForm(form, formData);
            }
        });

        // Закрытие попапа "спасибо"
        $('#successPopupCloseBtn').on('click', function () {
            $('#successPopup').fadeOut();
        });
    });