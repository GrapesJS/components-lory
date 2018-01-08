import grapesjs from 'grapesjs';
import loadComponents from './components/index';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('grapesjs-lory-slider', (editor, opts = {}) => {
  const options = { ...{
    // Object to extend the default slider block, eg. `{ label: 'Slider', attributes: { ... } }`
    // Pass a falsy value to avoid adding the block
    sliderBlock: {},

    // Object to extend the default slider properties, eg. `{ name: 'My Slider', draggable: false, ... }`
    sliderProps: {},

    // Object to extend the default slider frame properties
    frameProps: {},

    // Object to extend the default slides properties
    slidesProps: {},

    // Object to extend the default slide properties
    slideProps: {},

    // Object to extend the default previous nav properties
    prevProps: {},

    // Object to extend the default next nav properties
    nextProps: {},

    // Default slides
    slideEls: `
      <div class="gjs-lory-slide"></div>
      <div class="gjs-lory-slide"></div>
      <div class="gjs-lory-slide"></div>
    `,

    // Previous nav element string, as for example, an HTML string
    prevEl: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">
        <g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g>
      </svg>`,

    // Next nav element string, as for example, an HTML string
    nextEl: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">
        <g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g>
      </svg>`,

    // Class name for the slider frame
    classFrame: 'gjs-lory-frame',

    // Class name for slides container
    classSlides: 'gjs-lory-slides',

    // Class name for slides container
    classSlide: 'gjs-lory-slide',

    // Class name for slider previous control
    classPrev: 'gjs-lory-prev',

    // Class name for slider next control
    classNext: 'gjs-lory-next',

    // Script to load dynamically in case no lory instance was found
    script: 'https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js',

  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);
});
