document.addEventListener('DOMContentLoaded', () => {
  const openLoginBtn = document.getElementById('navLoginBtn') || document.querySelector('li.btn a');
  const loginPopup = document.getElementById('loginPopup');
  const closeLoginBtn = document.getElementById('closeLogin');
  const loginForm = document.getElementById('loginForm');
  const loginMsg = document.getElementById('loginMsg');

  console.log('login.js loaded', { openLoginBtn, loginPopup, closeLoginBtn, loginForm });

  if (!openLoginBtn) {
    console.warn('Login trigger not found. Make sure <a id="navLoginBtn"> exists');
    return;
  }
  if (!loginPopup || !loginForm) {
    console.warn('Login popup or form not found in DOM.');
    return;
  }

  // open popup
  openLoginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // if it's an anchor, prevent jump
    loginPopup.classList.remove('hidden');
    loginPopup.setAttribute('aria-hidden', 'false');
    loginMsg.textContent = '';
    // focus first input for accessibility
    const firstInput = loginPopup.querySelector('input');
    if (firstInput) firstInput.focus();
    console.log('login popup opened');
  });

  // close button
  if (closeLoginBtn) {
    closeLoginBtn.addEventListener('click', () => {
      loginPopup.classList.add('hidden');
      loginPopup.setAttribute('aria-hidden', 'true');
    });
  }

  // close on overlay click (click outside content)
  loginPopup.addEventListener('click', (e) => {
    if (e.target === loginPopup) {
      loginPopup.classList.add('hidden');
      loginPopup.setAttribute('aria-hidden', 'true');
    }
  });

  // close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !loginPopup.classList.contains('hidden')) {
      loginPopup.classList.add('hidden');
      loginPopup.setAttribute('aria-hidden', 'true');
    }
  });

  // form submit validation
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginMsg.textContent = '';
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
      loginMsg.textContent = '⚠️ Please fill in both fields.';
      loginMsg.style.color = '#ff4d4d';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      loginMsg.textContent = '✉️ Invalid email format.';
      loginMsg.style.color = '#ff4d4d';
      return;
    }

    // demo successful login
    loginMsg.textContent = '✅ Login successful (demo).';
    loginMsg.style.color = '#00f468';

    // close after short delay
    setTimeout(() => {
      loginPopup.classList.add('hidden');
      loginPopup.setAttribute('aria-hidden', 'true');
      loginForm.reset();
    }, 900);
  });
});
