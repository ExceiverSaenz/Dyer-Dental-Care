// assets/js/form-validation.js
(function () {
    const form = document.getElementById('contactForm');
    if (!form) {
        return; // por si incluyes el mismo script en otra página
    }

    form.addEventListener('submit', (e) => {
        // e.preventDefault();
        let valid = true;

        // Limpiar errores
        ['name', 'email', 'subject', 'message'].forEach((id) =>
            document.getElementById(id + 'Error').classList.add('hidden')
        );

        // Validaciones
        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            subject: form.subject.value.trim(),
            message: form.message.value.trim()
        };
        const emailRe= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.name) {
            show('nameError');
            valid = false;
        }
        if (!data.emailRe.test(data.email)) {
            show('emailError');
            valid = false;
        }
        if (!data.subject) {
            show('subjectError');
            valid = false;
        }
        if (data.message.length < 10) {
            show('messageError'); valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }
    });

    function show(id) {
        document.getElementById(id).classList.remove('hidden');
    }
})();
