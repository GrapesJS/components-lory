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

  // Selectors
  sliderSelector: `[data-${sliderName}]`,
  slidesSelector: `[data-${slidesName}]`,
  slideSelector: `[data-${slideName}]`,
  prevSelector: `[data-${prevName}]`,
  nextSelector: `[data-${nextName}]`,

  // IDs
  sliderId: `data-${sliderName}`,
  slideId: `data-${slideName}`,
  slidesId: `data-${slidesName}`,
  prevId: `data-${prevName}`,
  nextId: `data-${nextName}`,
}
