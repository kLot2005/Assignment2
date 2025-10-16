
const subscribePopup = document.getElementById('subscribePopup');
const openSubscribeBtn = document.createElement('button');
openSubscribeBtn.textContent = 'Subscribe for Updates';
openSubscribeBtn.classList.add('subscribe-btn');


document.querySelector('.hero--info').appendChild(openSubscribeBtn);

const closeSubscribeBtn = document.getElementById('closeSubscribe');
const subscribeForm = document.getElementById('subscribeForm');
const subMsg = document.getElementById('subMsg');


openSubscribeBtn.addEventListener('click', () => {
  subscribePopup.classList.remove('hidden');
});


closeSubscribeBtn.addEventListener('click', () => {
  subscribePopup.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === subscribePopup) {
    subscribePopup.classList.add('hidden');
  }
});

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('subName').value.trim();
  const email = document.getElementById('subEmail').value.trim();

  if (!name || !email) {
    subMsg.textContent = '⚠️ Please fill in all fields.';
    subMsg.style.color = '#ff4d4d';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    subMsg.textContent = '✉️ Invalid email format.';
    subMsg.style.color = '#ff4d4d';
    return;
  }

  subMsg.textContent = '✅ Subscription successful!';
  subMsg.style.color = '#00f468';
  subscribeForm.reset();
});
