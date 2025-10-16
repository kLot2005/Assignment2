const questions = document.querySelectorAll('.faq-question');

questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;

    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});
