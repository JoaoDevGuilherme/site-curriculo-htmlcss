// -------------------- 1️⃣ Scroll Suave --------------------
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(href.startsWith('#')) { // apenas âncoras internas
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // links para outras páginas irão funcionar normalmente
    });
});

// -------------------- 2️⃣ Hover Animado em Cards --------------------
const cards = document.querySelectorAll('.section-card, .foto-perfil');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
    });
});

// -------------------- 3️⃣ Validação do Formulário --------------------
const feedbackForm = document.querySelector('form');
if(feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if(!nome || !email || !mensagem) {
            e.preventDefault();
            alert('Por favor, preencha todos os campos antes de enviar.');
        }
    });
}

// -------------------- 4️⃣ Dark / Light Mode --------------------
const themeToggleBtn = document.querySelector('#theme-toggle');
if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        themeToggleBtn.textContent = document.body.classList.contains('light-mode') ? 'Modo Escuro' : 'Modo Claro';
    });
}

// -------------------- 5️⃣ Efeito Máquina de Escrever --------------------
const typedTextElement = document.getElementById('typed-text');
if(typedTextElement) {
    const text = typedTextElement.getAttribute('data-text') || "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typedTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}
