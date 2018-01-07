const prefix = 'lory-';
const sliderName = `${prefix}slider`;
const slideName = `${prefix}slide`;
const slidesName = `${prefix}slides`;
const prevName = `${prefix}prev`;
const nextName = `${prefix}next`;

export default {
  sliderName,
  slideName,
  slidesName,
  prevName,
  nextName,
  sliderSelector: `[data-${sliderName}]`,
  sliderId: `data-${sliderName}`,
  slideId: `data-${slideName}`,
  slidesId: `data-${slidesName}`,
  prevId: `data-${prevName}`,
  nextId: `data-${nextName}`,
}
