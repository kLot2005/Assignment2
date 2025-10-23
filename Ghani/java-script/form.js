
const popup = document.getElementById('popup');
const openBtn = document.querySelector('.lgn');
const closeBtn = document.getElementById('closePopup');

openBtn.addEventListener('click', () => popup.classList.remove('hidden'));
closeBtn.addEventListener('click', () => popup.classList.add('hidden'));
window.addEventListener('click', (e) => {
  if (e.target === popup) popup.classList.add('hidden');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  const errorMsg = document.getElementById('errorMsg');
  const successMsg = document.getElementById('successMsg');

  errorMsg.textContent = '';
  successMsg.textContent = '';

  if (!username || !email || !password || !confirm) {
    errorMsg.textContent = '⚠️ Please fill in all fields.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = '✉️ Invalid email format.';
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = '🔒 Password must be at least 6 characters long.';
    return;
  }

  if (password !== confirm) {
    errorMsg.textContent = '❌ Passwords do not match.';
    return;
  }

  successMsg.textContent = '✅ Registration successful!';
  document.getElementById('registerForm').reset();
});

document.getElementById('clearForm').addEventListener('click', () => {
  registerForm.reset();
  errorMsg.textContent = '';
  successMsg.textContent = '';
});