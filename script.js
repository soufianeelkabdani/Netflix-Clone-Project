document.querySelectorAll('.toggle-label').forEach(function (label) {
    label.addEventListener('click', function () {
        this.classList.toggle('active');
        this.classList.toggle('reverse');

        var content = this.nextElementSibling;
        if (this.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

