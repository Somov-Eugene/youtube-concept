const main = () => {
  const channelSlider = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

  const recommendedSlider = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    },
  });

  const foodSlider = new Swiper('.food-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 40,

    // Navigation arrows
    navigation: {
      nextEl: '.food-button-next',
      prevEl: '.food-button-prev',
    },
  });

};

main();
