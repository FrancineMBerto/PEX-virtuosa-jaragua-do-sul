// scripts usados em todas as paginas
(function () {
  // menu do celular
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.drawer');

  function abrirMenu(abrir) {
    if (!drawer || !toggle) return;
    drawer.classList.toggle('is-open', abrir);
    toggle.setAttribute('aria-expanded', String(abrir));
    if (abrir == true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      abrirMenu(!drawer.classList.contains('is-open'));
    });
    drawer.addEventListener('click', function (e) {
      if (e.target === drawer || e.target.closest('.drawer__close') || e.target.closest('a')) {
        abrirMenu(false);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) abrirMenu(false);
    });
  }

  // sombra do header
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
  }

  // animacao ao rolar
  const alvos = document.querySelectorAll('.reveal');
  if (alvos.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      alvos.forEach(function (el) { io.observe(el); });
    } else {
      alvos.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  // faq
  document.querySelectorAll('.accordion__trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const aberto = btn.getAttribute('aria-expanded') === 'true';
      const painel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!aberto));
      if (painel) painel.classList.toggle('is-open', !aberto);
    });
  });

  // ano no rodape
  document.querySelectorAll('[data-ano]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // TODO mandar pro CRM (por enquanto o form so mostra a mensagem)
  document.querySelectorAll('form[data-fake-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const aviso = form.querySelector('[data-form-msg]');
      const botao = form.querySelector('button[type="submit"]');
      if (botao) { botao.disabled = true; botao.textContent = 'Enviando...'; }

      setTimeout(function () {
        if (aviso) {
          aviso.hidden = false;
          aviso.focus();
        }
        form.reset();
        if (botao) { botao.disabled = false; botao.textContent = botao.dataset.label || 'Enviar'; }
      }, 700);
    });
  });
})();
