// === Ripple dos Botões ===

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const size = Math.max(this.clientWidth, this.clientHeight);
        circle.style.width = circle.style.height = size + "px";

        const rect = this.getBoundingClientRect();
        circle.style.left = e.clientX - rect.left - size / 2 + "px";
        circle.style.top = e.clientY - rect.top - size / 2 + "px";

        this.appendChild(circle);

        circle.addEventListener("animationend", () => {
            circle.remove();
        });
    });
});

// === Ripple da sidebar ===

document.querySelectorAll('.sidebar nav a, #languageSwitcher').forEach(link => {
    link.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const size = Math.max(this.clientWidth, this.clientHeight);
        ripple.style.width = ripple.style.height = size + 'px';

        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

        this.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
        ripple.remove();
        });
    });
});