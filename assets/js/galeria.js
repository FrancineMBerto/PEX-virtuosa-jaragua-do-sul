// filtro da galeria + lightbox
(function () {
  const galeria = document.getElementById('galeria');
  if (!galeria) return;

  const itens = Array.from(galeria.querySelectorAll('.ba'));
  const filtros = Array.from(document.querySelectorAll('[data-filtros="galeria"] .filter'));
  const contador = document.querySelector('[data-contador="galeria"]');
  const vazio = document.querySelector('[data-vazio="galeria"]');

  // filtro
  function aplicar(categoria) {
    let visiveis = 0;
    itens.forEach(function (item) {
      const combina = categoria === 'todos' || item.dataset.categoria === categoria;
      item.hidden = !combina;
      if (combina) visiveis++;
    });
    filtros.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.filtro === categoria));
    });
    if (contador) {
      contador.textContent = visiveis + (visiveis === 1 ? ' resultado' : ' resultados');
    }
    if (vazio) vazio.hidden = visiveis > 0;
    montarSlides();
  }

  filtros.forEach(function (b) {
    b.addEventListener('click', function () { aplicar(b.dataset.filtro); });
  });

  // lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = lb.querySelector('.lightbox__img');
  const lbCap = lb.querySelector('.lightbox__cap');
  let slides = [];
  let indice = 0;
  let ultimoFoco = null;

  function montarSlides() {
    slides = [];
    itens.filter(function (i) { return !i.hidden; }).forEach(function (item) {
      item.querySelectorAll('.ba__pair button').forEach(function (btn) {
        const img = btn.querySelector('img');
        slides.push({ src: img.src, alt: img.alt, legenda: item.dataset.legenda || img.alt, botao: btn });
        btn.dataset.slide = slides.length - 1;
      });
    });
  }

  function abrir(i) {
    indice = (i + slides.length) % slides.length;
    const s = slides[indice];
    lbImg.src = s.src;
    lbImg.alt = s.alt;
    lbCap.textContent = s.legenda + ' - ' + (indice + 1) + '/' + slides.length;
    lb.hidden = false;
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lightbox__close').focus();
  }

  function fechar() {
    lb.classList.remove('is-open');
    lb.hidden = true;
    document.body.style.overflow = '';
    if (ultimoFoco) ultimoFoco.focus();
  }

  galeria.addEventListener('click', function (e) {
    const btn = e.target.closest('.ba__pair button');
    if (!btn) return;
    ultimoFoco = btn;
    abrir(Number(btn.dataset.slide || 0));
  });

  lb.addEventListener('click', function (e) {
    if (e.target === lb) return fechar();
    if (e.target.closest('.lightbox__close')) return fechar();
    if (e.target.closest('.lightbox__nav--prev')) return abrir(indice - 1);
    if (e.target.closest('.lightbox__nav--next')) return abrir(indice + 1);
  });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') fechar();
    if (e.key === 'ArrowLeft') abrir(indice - 1);
    if (e.key === 'ArrowRight') abrir(indice + 1);
  });

  // filtro inicial pela url (?filtro=laser)
  const inicial = new URLSearchParams(location.search).get('filtro');
  aplicar(inicial && filtros.some(function (f) { return f.dataset.filtro === inicial; }) ? inicial : 'todos');
})();
