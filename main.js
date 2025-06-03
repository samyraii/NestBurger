window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader-overlay');
      const content = document.getElementById('content');
      loader.style.display = 'none';
      content.style.display = 'block';
      content.focus(); // Accessible focus on new content
    }, 2000);
  });

  var iconToggle = document.querySelector(".toggle-icon"), closeToggle = document.querySelector(".close-toggle"),
  menu = document.querySelector(".toggle-nav");

  iconToggle.onclick = function() {
      this.style.display = "none";
      menu.style.display = "block";
      
  }
  closeToggle.onclick = function(){
      iconToggle.style.display = "flex";       
      menu.style.display = "none";
      
  }
  
 
    const animatedItems = document.querySelectorAll('.animated-item');
    function checkItems() {
    const triggerBottom = window.innerHeight * 0.9; 
    animatedItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });

  }
window.addEventListener('scroll', checkItems);
window.addEventListener('load', checkItems);

  const categories = document.querySelectorAll('.category');

  categories.forEach(category => {
      const itemsList = category.querySelector('.items-list');
      const items = itemsList.querySelectorAll('.item');
      const slideLeft = category.querySelector('.slider-left');
      const slideRight = category.querySelector('.slider-right');
      let currentIndex = 0;
      const totalItems = items.length;
  
      slideLeft.addEventListener('click', () => {
          if (currentIndex > 0) {
              currentIndex--;
              updateSlider();
          }
      });
  
      slideRight.addEventListener('click', () => {
          if (currentIndex < totalItems - 1) {
              currentIndex++;
              updateSlider();
          }
      });
  
      // Touch event variables
      let startX, endX;
  
      itemsList.addEventListener('touchstart', (event) => {
          startX = event.touches[0].clientX;
      });
  
      itemsList.addEventListener('touchmove', (event) => {
          endX = event.touches[0].clientX;
      });
  
      itemsList.addEventListener('touchend', () => {
          if (startX > endX + 50) { // Swipe left
              if (currentIndex < totalItems - 1) {
                  currentIndex++;
                  updateSlider();
              }
          } else if (startX < endX - 50) { // Swipe right
              if (currentIndex > 0) {
                  currentIndex--;
                  updateSlider();
              }
          }
      });
  
      function updateSlider() {
          const offset = -currentIndex * (items[0].clientWidth + 80); // 20 is the margin
          itemsList.style.transform = `translateX(${offset}px)`;
      }
  });
  
  
  


