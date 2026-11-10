// ECOFUTURO VERDE - LOGICA JAVASCRIPT (ES6+)

document.addEventListener('DOMContentLoaded', () => {
  
  // -------------------------------------------------------------
  // RECURSO 1: ALTERNADOR DE MODO ESCURO / CLARO (DARK MODE)
  // -------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlElement = document.documentElement;

  // Carrega tema salvo no LocalStorage se houver
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      themeIcon.classList.remove('bi-moon-stars-fill');
      themeIcon.classList.add('bi-sun-fill');
      themeToggleBtn.classList.remove('btn-outline-light');
      themeToggleBtn.classList.add('btn-outline-warning');
    } else {
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-stars-fill');
      themeToggleBtn.classList.remove('btn-outline-warning');
      themeToggleBtn.classList.add('btn-outline-light');
    }
  }

  // -------------------------------------------------------------
  // RECURSO 2: FILTRO DINÂMICO DE CARDS DA GALERIA DE PROJETOS
  // -------------------------------------------------------------
  const filterButtons = document.querySelectorAll('#filter-buttons button');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Atualiza estado do botão ativo
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // -------------------------------------------------------------
  // RECURSO 3: CONTADOR NUMÉRICO ANIMADO (AO ROLAR A PÁGINA)
  // -------------------------------------------------------------
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const startCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 segundos
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target.toLocaleString('pt-BR');
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(current).toLocaleString('pt-BR');
        }
      }, stepTime);
    });
  };

  // IntersectionObserver para ativar a animação apenas ao rolar até a seção
  const impactSection = document.getElementById('impacto');
  if (impactSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          startCounters();
          animated = true;
        }
      });
    }, { threshold: 0.4 });

    observer.observe(impactSection);
  }

  // -------------------------------------------------------------
  // RECURSO 4: VALIDAÇÃO DINÂMICA E ENVIO DO FORMULÁRIO DE CONTATO
  // -------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const btnSubmit = document.getElementById('btnSubmit');
  const btnText = document.getElementById('btnText');
  const btnSpinner = document.getElementById('btnSpinner');
  const toastElement = document.getElementById('formToast');
  const toast = new bootstrap.Toast(toastElement);

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Elementos do formulário
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Validação do Nome (mínimo 3 caracteres)
    if (nameInput.value.trim().length < 3) {
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
    }

    // Validação de E-mail (expressão regular)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
    }

    // Validação do Assunto
    if (!subjectSelect.value) {
      subjectSelect.classList.add('is-invalid');
      isValid = false;
    } else {
      subjectSelect.classList.remove('is-invalid');
      subjectSelect.classList.add('is-valid');
    }

    // Validação da Mensagem (mínimo 10 caracteres)
    if (messageInput.value.trim().length < 10) {
      messageInput.classList.add('is-invalid');
      isValid = false;
    } else {
      messageInput.classList.remove('is-invalid');
      messageInput.classList.add('is-valid');
    }

    // Se todos os campos forem válidos, simula envio do e-mail
    if (isValid) {
      // Exibe estado de carregamento no botão
      btnSubmit.disabled = true;
      btnText.textContent = 'Enviando...';
      btnSpinner.classList.remove('d-none');

      // Simula requisição Front-end (ex: EmailJS / Formspree)
      setTimeout(() => {
        btnSubmit.disabled = false;
        btnText.innerHTML = '<i class="bi bi-send-fill me-2"></i>Enviar Mensagem';
        btnSpinner.classList.add('d-none');

        // Exibe Toast de Sucesso Bootstrap
        toast.show();

        // Reseta o formulário
        contactForm.reset();
        contactForm.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
      }, 1500);
    }
  });
});
