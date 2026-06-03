function initUKSWebsite() {
  function checkWebPSupport(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  checkWebPSupport(function (isSupported) {
    const stats = document.querySelector('.stats');
    if (stats) {
      const webp = stats.dataset.webp;
      const fallback = stats.dataset.fallback;
      const url = isSupported ? webp : fallback;
      stats.style.backgroundImage = `url('${url}')`;
    }
    const contact = document.querySelector('.contact__container');
    if (contact) {
      const webp = contact.dataset.webp;
      const fallback = contact.dataset.fallback;
      const url = isSupported ? webp : fallback;
      contact.style.backgroundImage = `url('${url}')`;
    }
  });

  // Баннер сверху
  const slides = document.querySelectorAll('.slider__slide');
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  let currentSlide = 0;

  function showSlide(index) {
    const slideElement = slides[index];

    checkWebPSupport(function (isSupported) {
      const imageUrl = isSupported ?
        slideElement.dataset.webp || slideElement.style.backgroundImage :
        slideElement.dataset.fallback || slideElement.style.backgroundImage;

      slideElement.style.backgroundImage = `url('${imageUrl}')`;
    });

    slides.forEach((slide, i) => {
      slide.classList.toggle('slider__slide--active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  setInterval(nextSlide, 7000);
  showSlide(currentSlide);
  const navBtn = document.querySelector('.header__nav-mobile');
  const closeBtn = document.querySelector('.header__close-btn');
  const navLinks = document.querySelector('.header__links');
  const linkItems = document.querySelectorAll('.header__link');

  const dropDown = document.querySelector('.header__link-dropdown');


  navBtn.addEventListener('click', () => {
    navLinks.classList.add('active');
    navBtn.classList.add('active');
    closeBtn.classList.add('active');
  });

  function closeMobileMenu() {
    navLinks.classList.remove('active');
    navBtn.classList.remove('active');
    closeBtn.classList.remove('active');
    linkItems.forEach(link => link.classList.remove('active'));
    dropDown.forEach(link => link.classList.remove('active'));
  }

  const dropDownList = document.querySelectorAll('.dropdown-list__item a')

  dropDownList.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  });

  closeBtn.addEventListener('click', closeMobileMenu);

  const navLinkItems = document.querySelectorAll('.header__link-a-mobile');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      linkItems.forEach(link => link.classList.remove('active'));
    });
  });



  // Проекты
  /* const sections = {
    'dveri': {
      title: 'СТУДЕНЧЕСКИЙ КАМПУС УРФУ, ЕКАТЕРИНБУРГ',
      description: 'Комплекс работ по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП». В составе противопожарных конструкций комплекса используются двери и перегородки из профильной системы Alutech и стекла Pyrolut.',
      images: [
        {
          webp: './static/webp/new_index/generators/door1.webp',
          fallback: './static/img/new_index/generators/door1.png'
        },
        {
          webp: './static/webp/new_index/generators/door2.webp',
          fallback: './static/img/new_index/generators/door2.png'
        },
        {
          webp: './static/webp/new_index/generators/door3.webp',
          fallback: './static/img/new_index/generators/door3.png'
        },
        {
          webp: './static/webp/new_index/generators/door4.webp',
          fallback: './static/img/new_index/generators/door4.png'
        },
        {
          webp: './static/webp/new_index/generators/door5.webp',
          fallback: './static/img/new_index/generators/door5.png'
        },
        {
          webp: './static/webp/new_index/generators/door6.webp',
          fallback: './static/img/new_index/generators/door6.png'
        },
        {
          webp: './static/webp/new_index/generators/door7.webp',
          fallback: './static/img/new_index/generators/door7.png'
        }
      ]
    },
    'peregorodki': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА (ДВВС) ЕКАТЕРИНБУРГ',
      description: 'Работы по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП». В составе используются перегородки и двери из стального профиля Schuco и стекла Pyrolut с пределами огнестойкости EIW45 и EIW30 соответственно.',
      images: [
        {
          webp: './static/webp/new_index/generators/pere1.webp',
          fallback: './static/img/new_index/generators/pere1.png'
        },
        {
          webp: './static/webp/new_index/generators/pere2.webp',
          fallback: './static/img/new_index/generators/pere2.png'
        },
        {
          webp: './static/webp/new_index/generators/pere3.webp',
          fallback: './static/img/new_index/generators/pere3.png'
        },
        {
          webp: './static/webp/new_index/generators/pere4.webp',
          fallback: './static/img/new_index/generators/pere4.png'
        },
        {
          webp: './static/webp/new_index/generators/pere5.webp',
          fallback: './static/img/new_index/generators/pere5.png'
        },
        {
          webp: './static/webp/new_index/generators/pere6.webp',
          fallback: './static/img/new_index/generators/pere6.png'
        },
        {
          webp: './static/webp/new_index/generators/pere7.webp',
          fallback: './static/img/new_index/generators/pere7.png'
        },
        {
          webp: './static/webp/new_index/generators/pere8.webp',
          fallback: './static/img/new_index/generators/pere8.png'
        },
        {
          webp: './static/webp/new_index/generators/pere9.webp',
          fallback: './static/img/new_index/generators/pere9.png'
        }
      ]
    },
    'okna': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА, КРЫМ',
      description: 'ООО «УКС ГРУП» выполнило работы по проектированию, производству и монтажу огнестойких витражей и дверей. Выполнены технически сложные работы по монтажу витража высотой более 9 метров со внутренними и наружными углами поворотов. В составе конструкций используются противопожарный профиль Alutech серии F50 и W62 с пределами огнестойкости EIW15 и EIW60.',
      images: [
        {
          webp: './static/webp/new_index/generators/okno1.webp',
          fallback: './static/img/new_index/generators/okno1.png'
        },
        {
          webp: './static/webp/new_index/generators/okno2.webp',
          fallback: './static/img/new_index/generators/okno2.png'
        },
        {
          webp: './static/webp/new_index/generators/okno3.webp',
          fallback: './static/img/new_index/generators/okno3.png'
        },
        {
          webp: './static/webp/new_index/generators/okno4.webp',
          fallback: './static/img/new_index/generators/okno4.png'
        },
        {
          webp: './static/webp/new_index/generators/okno5.webp',
          fallback: './static/img/new_index/generators/okno5.png'
        },
        {
          webp: './static/webp/new_index/generators/okno6.webp',
          fallback: './static/img/new_index/generators/okno6.png'
        }
      ]
    },
    'vitrazhi': {
      title: 'КЛУБНЫЙ ДОМ "РИВЬЕРА". ЕКАТЕРИНБУРГ',
      description: 'Комплекс работ по остеклению Клубного дома "Ривьера", с использованием фасадных систем премиального уровня SCHUCO и AGC выполнил завод ООО «УКС груп».',
      images: [
        {
          webp: './static/webp/new_index/generators/vetr1.webp',
          fallback: './static/img/new_index/generators/vetr1.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr2.webp',
          fallback: './static/img/new_index/generators/vetr2.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr3.webp',
          fallback: './static/img/new_index/generators/vetr3.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr4.webp',
          fallback: './static/img/new_index/generators/vetr4.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr5.webp',
          fallback: './static/img/new_index/generators/vetr5.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr6.webp',
          fallback: './static/img/new_index/generators/vetr6.png'
        },
        {
          webp: './static/webp/new_index/generators/vetr7.webp',
          fallback: './static/img/new_index/generators/vetr7.png'
        }
      ]
    }
  }; */

  /* let currentSection = 'dveri';
  let currentImageIndex = 0;

  function changeSection(section, clickedBtn) {
    currentSection = section;
    currentImageIndex = 0;
    const buttons = document.querySelectorAll('.projects__button');
    buttons.forEach(btn => btn.classList.remove('projects__button--active'));
    if (clickedBtn) clickedBtn.classList.add('projects__button--active');
    document.getElementById('textTitle').textContent = sections[section].title;
    document.getElementById('textDescription').textContent = sections[section].description;
    updateImage();
  }

  function updateImage() {
    const imageData = sections[currentSection].images[currentImageIndex];
    const photoContainer = document.getElementById('photoContainer');

    checkWebPSupport(function (isSupported) {
      const imageUrl = isSupported ? imageData.webp : imageData.fallback;
      photoContainer.style.backgroundImage = `url('${imageUrl}')`;
    });
  } */

  /* function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % sections[currentSection].images.length;
    updateImage();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + sections[currentSection].images.length) % sections[currentSection].images.length;
    updateImage();
  } */

  document.getElementById('projectLeftBtn')?.addEventListener('click', prevImage);
  document.getElementById('projectRightBtn')?.addEventListener('click', nextImage);


  document.addEventListener('DOMContentLoaded', () => {
    changeSection('dveri', document.querySelector('.projects__button[data-section="dveri"]'));
    updateImage();
    const buttons = document.querySelectorAll('.projects__button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        if (section && sections[section]) {
          changeSection(section, button);
        }
      });
    });
    const firstButton = document.querySelector('.projects__button');
    if (firstButton) {
      firstButton.classList.add('projects__button--active');
    }

    // Обработчик для выпадающего списка в проектах
    const projectsSelect = document.getElementById('projectsSelect');
    projectsSelect.addEventListener('change', (e) => {
      const section = e.target.value;
      if (section && sections[section]) {
        changeSection(section, null);
      }
    });
  });

  // О нас
  const images = [
    {
      webp: './static/webp/new_index/generators/ab1.webp',
      png: './static/img/new_index/generators/ab1.png'
    },
    {
      webp: './static/webp/new_index/generators/ab2.webp',
      png: './static/img/new_index/generators/ab2.png'
    },
    {
      webp: './static/webp/new_index/generators/ab3.webp',
      png: './static/img/new_index/generators/ab3.png'
    },
    {
      webp: './static/webp/new_index/generators/ab4.webp',
      png: './static/img/new_index/generators/ab4.png'
    },
    {
      webp: './static/webp/new_index/generators/ab5.webp',
      png: './static/img/new_index/generators/ab5.png'
    },
    {
      webp: './static/webp/new_index/generators/ab6.webp',
      png: './static/img/new_index/generators/ab6.png'
    }
  ];

  let currentIndex = 0;
  const photoBlock = document.getElementById('photoBlock');
  const prevBtn1 = document.getElementById('prevBtn');
  const nextBtn1 = document.getElementById('nextBtn');

  function updatePhoto() {
    checkWebPSupport(function (isSupported) {
      const imageUrl = isSupported ? images[currentIndex].webp : images[currentIndex].png;
      photoBlock.style.backgroundImage = `url('${imageUrl}')`;
    });
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updatePhoto();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updatePhoto();
  }

  nextBtn1.addEventListener('click', showNext);
  prevBtn1.addEventListener('click', showPrev);

  setInterval(showNext, 7000);

  updatePhoto();

  // Зона видимости (Сертификаты)
  const certsliderTrack = document.querySelector('.certificates__slider-track');
  const certsliderSlides = document.querySelectorAll('.certificates__slide');
  const certsliderPrev = document.querySelector('.certificates__btn--prev');
  const certsliderNext = document.querySelector('.certificates__btn--next');
  let certsliderIndex = 0;

  function updateCertslider() {
    const slideWidth = certsliderSlides[0].offsetWidth + 32;
    const offset = certsliderIndex * slideWidth;
    certsliderTrack.style.transform = `translateX(-${offset}px)`;
    certsliderPrev.disabled = false;
    certsliderNext.disabled = false;
    if (certsliderIndex === 0) certsliderPrev.disabled = true;
    if (certsliderIndex === certsliderSlides.length - 4) certsliderNext.disabled = true;
  }

  certsliderNext.addEventListener('click', () => {
    certsliderIndex = (certsliderIndex + 1) % certsliderSlides.length;
    updateCertslider();
  });

  certsliderPrev.addEventListener('click', () => {
    certsliderIndex = (certsliderIndex - 1 + certsliderSlides.length) % certsliderSlides.length;
    updateCertslider();
  });

  window.addEventListener('load', updateCertslider);

  // Обработчик для формы в попапе
  const popupRequestForm = document.getElementById('popupRequestForm');
  if (popupRequestForm) {
    popupRequestForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (this.checkValidity()) {
        this.reset();
        closePopup();
        showSuccessPopup();
      } else {
        const invalidFields = this.querySelectorAll(':invalid');
        invalidFields.forEach(field => {
          field.classList.add('invalid-field');
        });
      }
    });
  }


  // Функции для управления попапом
  function openPopup() {
    document.getElementById('requestPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
  }

  function closePopup() {
    document.getElementById('requestPopup').style.display = 'none';
    document.body.style.overflow = '';
  }

  // Закрытие попапа при клике вне его области
  document.getElementById('requestPopup').addEventListener('click', function (e) {
    if (e.target === this) {
      closePopup();
    }
  });

  // Закрытие по ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  const sliderBtn = document.querySelector('.slider__cta-btn');

  sliderBtn.addEventListener('click', openPopup);

  // Попап для сертификатов
  const certImages = document.querySelectorAll('.certificates__slide-img');
  const certificatePopup = document.getElementById('certificatePopup');
  const popupImage = document.getElementById('popupImage');
  const popupClose = document.getElementById('popupClose');

  // Переменные для drag & drop
  let isDragging = false;
  let currentY = 0;
  let targetY = 0;
  let isAnimating = false;

  // Добавляем плавные переходы для transform
  popupImage.style.transition = 'transform 0.2s ease-out';

  certImages.forEach(img => {
    img.addEventListener('click', () => {
      const sources = img.parentElement.querySelectorAll('source');
      let imageUrl = img.src;

      checkWebPSupport(function (isSupported) {
        if (isSupported) {
          sources.forEach(source => {
            if (source.type === 'image/webp') {
              imageUrl = source.srcset;
            }
          });
        } else {
          sources.forEach(source => {
            if (source.type === 'image/png' || source.type === 'image/jpg' || source.type === 'image/jpeg') {
              imageUrl = source.srcset;
            }
          });
        }

        popupImage.src = imageUrl;
        resetImageState();
        certificatePopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
  });

  // Закрытие попапа
  popupClose.addEventListener('click', () => {
    certificatePopup.style.display = 'none';
    document.body.style.overflow = '';
    resetImageState();
  });

  const MAX_DRAG_Y = 150;

  certificatePopup.addEventListener('click', (e) => {
    if (e.target === certificatePopup) {
      certificatePopup.style.display = 'none';
      document.body.style.overflow = '';
      resetImageState();
    }
  });

  popupImage.addEventListener('click', (e) => {
    e.stopPropagation();

    if (popupImage.classList.contains('zoomed')) {
      resetImageState();
    } else {
      popupImage.classList.add('zoomed');
      popupImage.style.cursor = 'ns-resize';
      popupImage.style.transition = 'transform 0.15s ease-out'; 
      resetPosition();
      isDragging = true;
      setTimeout(() => {
        popupImage.style.transition = 'transform 0.25s ease-out';
      }, 150);
    }
  });

  function smoothFollow() {
    if (!isAnimating) return;
    currentY += (targetY - currentY) * 0.2;
    if (Math.abs(targetY - currentY) < 0.5) {
      currentY = targetY;
      isAnimating = false;
    }
    const maxMoveY = window.innerHeight * 0.5;
    currentY = Math.max(Math.min(currentY, maxMoveY), -maxMoveY);

    popupImage.style.transform = `scale(1.8) translateY(${currentY}px)`;

    if (isAnimating) {
      requestAnimationFrame(smoothFollow);
    }
  }
  popupImage.addEventListener('mousemove', (e) => {
    if (!isDragging || !popupImage.classList.contains('zoomed')) return;

    e.preventDefault();
    const rect = popupImage.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    targetY = (centerY - e.clientY) * 0.4; 
    targetY = Math.max(Math.min(targetY, MAX_DRAG_Y), -MAX_DRAG_Y);
    console.log(targetY);
    if (!isAnimating) {
      isAnimating = true;
      smoothFollow();
    }
  });

  // popupImage.addEventListener('mouseleave', () => {
  //   if (isDragging && popupImage.classList.contains('zoomed')) {
  //     isDragging = false;
  //     popupImage.style.cursor = 'ns-resize';
  //     targetY = 0;
  //     if (!isAnimating) {
  //       isAnimating = true;
  //       smoothFollow();
  //     }
  //   }
  // });
  
  popupImage.addEventListener('mouseenter', () => {
    if (popupImage.classList.contains('zoomed')) {
      isDragging = true;
      popupImage.style.cursor = 'ns-resize';
    }
  });

  // Сброс состояния изображения
  function resetImageState() {
    popupImage.classList.remove('zoomed');
    popupImage.style.cursor = 'zoom-in';
    popupImage.style.transform = 'scale(1) translateY(0px)';
    popupImage.style.transition = 'transform 0.2s ease-out';
    currentY = 0;
    targetY = 0;
    isDragging = false;
    isAnimating = false;
  }
  function resetPosition() {
    currentY = 0;
    targetY = 0;
    popupImage.style.transform = 'scale(1.5) translateY(0px)';
  }

  // Закрытие по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (popupImage.classList.contains('zoomed')) {
        resetImageState();
      } else {
        certificatePopup.style.display = 'none';
        document.body.style.overflow = '';
        resetImageState();
      }
    }
  });


  // Данные для попапов
  const projectData = {
    'dveri': {
      title: 'СТУДЕНЧЕСКИЙ КАМПУС УРФУ, ЕКАТЕРИНБУРГ',
      description: 'Ключевая идея проекта — формирование мощного научно-образовательного кластера в сфере IT, где российские и международные студенты смогут жить и учиться в комфортных условиях. Это способствует привлекательности учебного заведения и мотивации студентов для достижения высоких результатов. Многофункциональный общественный центр кампуса включает в себя лекционные аудитории, комплекс лабораторий, помещения для самостоятельной и проектной работы, а также холлы для отдыха. В составе противопожарных конструкций комплекса используются двери и перегородки из профильной системы Alutech и стекла Pyrolut. Предел огнестойкости конструкций EIW45 (период сдерживания продуктов горения до 45 минут). Огнестойкие светопрозрачные конструкции оснащены ручками штангами из нержавеющей стали СДР-13 1200 мм, Dorma TS Match с координатором последовательного закрывания G-GSRN, автоматическими выпадающими порогами Sipam (Италия) и врезными электромагнитными замками AL-400SM. Комплекс работ по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП» Применяемые в работе материалы, комплектующие и фурнитура отвечают всем требованиям с точки зрения надежности, эстетики и пожарной безопасности.'
    },
    'peregorodki': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА (ДВВС) ЕКАТЕРИНБУРГ',
      description: 'Дворец водных видов спорта (ДВВС) — это самый крупный современный комплекс в России для тренировок и соревнований, соответствущий всем требованиям международной федерации университетского спорта FISU и готовый принимать чемпионаты мира по водным видам спорта. Ключевой особенностью объекта является возможность предоставить профессиональным спортменам совершенствовать свое мастерство по плаванию, водному поло, синхронному плаванию, подводным дисциплинам и прыжкам в воду. В составе противопожарных конструкций комплекса используются перегородки и двери из стального профиля Schuco и стекла Pyrolut с пределами огнестойкости EIW45 и EIW30 соответственно. Работы по проектированию, изготовлению и монтажу противопожарных конструкций выполнило ООО «УКС ГРУП». ДВВС — лауреат премии Sportsfacilities в номинации «Спортивный объект — открытие года».'
    },
    'okna': {
      title: 'ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА, КРЫМ',
      description: 'Современные оконные решения включают энергосберегающие стеклопакеты, шумозащитные конструкции и интеллектуальные системы управления. Наши окна сочетают в себе высокую функциональность и эстетичный дизайн.'
    },
    'vitrazhi': {
      title: 'Витражи',
      description: 'Наши витражи - это сочетание традиционных технологий и современных материалов. Мы создаем уникальные светопрозрачные конструкции для интерьеров любого стиля.'
    }
  };

  // Текущий выбранный раздел
  let currentsSection = 'dveri';

  document.querySelectorAll('.projects__button').forEach(button => {
    button.addEventListener('click', function () {
      currentsSection = this.dataset.section;
    });
  });

  document.getElementById('projectsSelect').addEventListener('change', function () {
    currentsSection = this.value;
  });

  // Обработчик для кнопки "Узнать больше"
  document.getElementById('learnMoreBtn').addEventListener('click', function () {
    const data = projectData[currentsSection];
    openProjectPopup(data.title, data.description);
  });

  // Функции управления попапом
  function openProjectPopup(title, description) {
    document.getElementById('projectPopupTitle').textContent = title;
    document.getElementById('projectPopupDescription').textContent = description;
    document.getElementById('projectPopup').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeProjectPopup() {
    document.getElementById('projectPopup').style.display = 'none';
    document.body.style.overflow = '';
  }

  document.getElementById('projectPopup').addEventListener('click', function (e) {
    if (e.target === this) {
      closeProjectPopup();
    }
  });

  document.getElementById('projectForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userName = document.getElementById('projectUserName').value;
    const userPhone = document.getElementById('projectUserPhone').value;
    const projectTitle = document.getElementById('projectPopupTitle').textContent;

    console.log('Форма отправлена:', {
      project: projectTitle,
      userName,
      userPhone
    });

    closeProjectPopup();
    showSuccessPopup();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeProjectPopup();
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('.projects__nav-btn--left')) prevImage();
    if (e.target.closest('.projects__nav-btn--right')) nextImage();
    if (e.target.closest('.aboutus__arrow-btn--left')) showPrev();
    if (e.target.closest('.aboutus__arrow-btn--right')) showNext();
  });

  window.changeSection = function (section, clickedBtn) {
    currentSection = section;
    currentImageIndex = 0;

    const buttons = document.querySelectorAll('.projects__button');
    buttons.forEach(btn => btn.classList.remove('projects__button--active'));

    if (clickedBtn) {
      clickedBtn.classList.add('projects__button--active');
    }

    document.getElementById('textTitle').textContent = sections[section].title;
    document.getElementById('textDescription').textContent = sections[section].description;
    updateImage();
  };

  document.querySelectorAll('.projects__button').forEach(button => {
    button.addEventListener('click', (e) => {
      const section = e.currentTarget.getAttribute('data-section');
      changeSection(section, e.currentTarget);
    });
  });

  // Обработчик для мобильного селекта
  document.getElementById('projectsSelect')?.addEventListener('change', (e) => {
    changeSection(e.target.value, null);
  });

  /* Благодарности */
  function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  document.getElementById('successPopupCloseBtn').addEventListener('click', () => {
    document.getElementById('successPopup').style.display = 'none';
    document.body.style.overflow = '';
  });

  //функции глобальные, вроде все
  window.openPopup = openPopup;
  window.closePopup = closePopup;
  window.openProjectPopup = openProjectPopup;
  window.closeProjectPopup = closeProjectPopup;
  window.changeSection = changeSection;
  window.showSuccessPopup = showSuccessPopup;
}

document.addEventListener('DOMContentLoaded', initUKSWebsite);



document.addEventListener("DOMContentLoaded", () => {
    if (typeof Swiper === "undefined") {
        console.warn("Swiper не подключён");
        return;
    }

    const projectsSlider = document.querySelector(".js-projects-slider");
    if (projectsSlider) {
        new Swiper(projectsSlider, {
            loop: true,
            speed: 900,
            slidesPerView: "auto",       
            spaceBetween: 40,
            navigation: {
                nextEl: ".projects__arrow--next",
                prevEl: ".projects__arrow--prev"
            },
            breakpoints: {
                1024: { slidesPerView: 3 },
                768:  { slidesPerView: 2 }
            }
        });
    }

    const productsSlider = document.querySelector(".js-products-slider");
    if (productsSlider) {
        new Swiper(productsSlider, {
            loop: true,
            speed: 900,
            slidesPerView: "auto",
            spaceBetween: 40,
            navigation: {
                nextEl: ".projects__arrow--next",
                prevEl: ".projects__arrow--prev"
            },
            breakpoints: {
                1024: { slidesPerView: 3 },
                768:  { slidesPerView: 2 }
            }
        });
    }
});