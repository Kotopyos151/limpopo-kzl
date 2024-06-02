        // Добавление класса при прокрутке страницы
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('scrolling-active', window.scrollY > 0);
});

// Плавный переход при нажатии на ссылки в навигации
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      document.getElementById(sectionId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Всплывающее окно при клике по номеру телефона
const phoneNumber = document.querySelector('h3 a');
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = '<p>Номер нашего центра: 8-912-029-22-99</p>';
phoneNumber.addEventListener('click', function () {
  document.body.appendChild(modal);
});

// Закрытие всплывающего окна при клике вне его области
document.addEventListener('click', function (e) {
  if (!modal.contains(e.target) && e.target !== phoneNumber) {
      modal.remove();
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Анимация элементов при загрузке страницы
  const heading = document.querySelector('h1');
  heading.style.opacity = 0;
  heading.style.transition = 'opacity 1s';
  
  // Задержка для анимации элементов при загрузке
  setTimeout(() => {
      heading.style.opacity = 1;
  }, 500);
  
  // Анимация элементов при наведении мыши
  const logo = document.querySelector('.logo img');
  logo.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.2)';
  });
  logo.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
  });
  
  const phoneNumberLink = document.querySelector('h3 a');
  phoneNumberLink.addEventListener('mouseover', function() {
      this.style.color = 'red';
  });
  phoneNumberLink.addEventListener('mouseout', function() {
      this.style.color = 'black';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Получаем форму и элементы формы
  const feedbackForm = document.getElementById('feedbackForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  // Добавляем обработчик события для отправки формы
  feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы по умолчанию
      
      // Проверка введенных данных
      if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
          alert('Пожалуйста, заполните все поля формы.');
      } else {
          // Ваша логика обработки формы и отправки данных
          alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
          feedbackForm.reset(); // Сброс формы после отправки
      }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.about ul li');
  
  items.forEach(item => {
      const icon = document.createElement('i');
      icon.classList.add('icon');
      icon.innerHTML = '🌟'; // Здесь можно поменять иконку на нужную вам

      item.insertBefore(icon, item.firstChild);
  });

  // Добавляем анимацию
  items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-50px)';
      item.style.transition = `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`;
  });

  // Запускаем анимацию
  items.forEach(item => {
      setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
      }, 1000); // Делаем небольшую задержку перед стартом анимации
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const headings = document.querySelectorAll('.about h2');

  headings.forEach((heading, index) => {
      if (index === 0) {
          heading.classList.add('icon-goal');
      } else if (index === 1) {
          heading.classList.add('icon-values');
      } else if (index === 2) {
          heading.classList.add('icon-principles');
      }

      heading.style.opacity = '0';
      heading.style.transform = 'translateY(-50px)';
      heading.style.transition = `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`;
  });

  headings.forEach(heading => {
      setTimeout(() => {
          heading.style.opacity = '1';
          heading.style.transform = 'translateY(0)';
      }, 1000); // Делаем небольшую задержку перед стартом анимации
  });
});
