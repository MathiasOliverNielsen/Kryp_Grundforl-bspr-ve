document.querySelectorAll('.image-container').forEach(function (container, index) {
  const images = [
    ['/assets/images/Instagram_01.jpg', 'assets/images/Instagram_02.jpg'],
    ['assets/images/Instagram_03.jpg', 'assets/images/Instagram_02.jpg'],
    ['assets/images/Instagram_03.jpg', 'assets/images/Instagram_01.jpg'],
  ];

  const img = container.querySelector('img');

  container.addEventListener('mouseenter', function () {
    img.src = images[index][1];
  });

  container.addEventListener('mouseleave', function () {
    img.src = images[index][0];
  });
});

// FOrm validation
document.querySelector('.contactForm').addEventListener('submit', function (event) {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!firstName || !lastName || !email || !message) {
    alert('Alle felter skal udfyldes.');
    event.preventDefault();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Indtast en gyldig emailadresse.');
    event.preventDefault();
  }
});
