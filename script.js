(function () {
  // footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // scroll reveal
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (e) { e.classList.add('in') });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.classList.add('in');
        setTimeout(function () { el.classList.add('done') }, 1000);
        io.unobserve(el);
      });
    }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (e) { io.observe(e) });
  }

  // navbar shadow after scrolling
  var nav = document.querySelector('.navbar');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 20) }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // subtle 3D tilt on profile photo (desktop only)
  var prof = document.querySelector('.profile'),
    photo = document.querySelector('.profile .photo'),
    fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches,
    calm = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (prof && photo && fine && !calm) {
    prof.addEventListener('mousemove', function (e) {
      var r = prof.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - .5,
        y = (e.clientY - r.top) / r.height - .5;
      photo.style.transform = 'rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 8) + 'deg)';
    });
    prof.addEventListener('mouseleave', function () { photo.style.transform = '' });
  }
})();
