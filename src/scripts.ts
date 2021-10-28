const rangeWidth = <HTMLInputElement>document.querySelector('.js-range-width');
const rangeHeight = <HTMLInputElement>document.querySelector('.js-range-height');
const rangeSliders = document.querySelectorAll('.js-range');
const image = <HTMLImageElement>document.querySelector('.js-image');

const imageSizeSlider = () => {
  rangeSliders.forEach(slider => {
    slider.addEventListener('input', () => {     
      const rangeSlider = <HTMLInputElement>slider;
      const color = 'linear-gradient(90deg, rgb(113, 240, 151)' + rangeSlider.value + '%, rgb(248, 248, 248)' + rangeSlider.value + '%)';
      rangeSlider.style.background = color;
      image.style.width = +rangeWidth.value * 1 + "%";
      image.style.height = +rangeHeight.value * 1 + "%";
    })
  })
};

imageSizeSlider();
