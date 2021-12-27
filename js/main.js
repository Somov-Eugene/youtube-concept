const main = () => {
  const channelSlider = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

  const recommendedSlider = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 2,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    },
  });

  const foodSlider = new Swiper('.food-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      1900: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 4,
      },
      1100: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.food-button-next',
      prevEl: '.food-button-prev',
    },
  });


  // Mobile search
  const searchBtn = document.querySelector(".mobile-search");
  const mobileSearch = document.querySelector(".input-group");
  searchBtn.addEventListener("click", () => {
    mobileSearch.classList.toggle("is-open");
  });

  // Turn off sliders
  if( document.documentElement.scrollWidth <= 640 ) {
    channelSlider.destroy();
    recommendedSlider.destroy();
    foodSlider.destroy();
  }
};

main();
