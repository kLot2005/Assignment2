const btn = document.getElementById('colorBtn');

const colors = [
  '#00F468',
  '#FF5733',
  '#1E90FF',
  '#FFD700',
  '#9B59B6',
  '#FF1493',
  '#00CED1',
  '#FF8C00',
  '#2ECC71'
];

btn.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.transition = 'background-color 0.8s ease';
  document.body.style.backgroundColor = randomColor;
});
