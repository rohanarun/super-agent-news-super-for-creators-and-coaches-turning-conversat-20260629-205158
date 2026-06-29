(function(){
  if (!window.gsap) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out' });
  gsap.from('.hero-sub', { y: 24, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
  gsap.from('.hero-actions .btn', { y: 16, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.4, ease: 'power3.out' });
})();