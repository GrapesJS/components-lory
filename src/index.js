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

    // Object to extend the default slide properties
    slideProps: {},

    // Object to extend the default slides properties
    slidesProps: {},

    // Object to extend the default previous nav properties
    prevProps: {},

    // Object to extend the default next nav properties
    nextProps: {},

    // Previous nav element string, as for example, an HTML string
    prevEl: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">
        <g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g>
      </svg>`,

    // Next nav element string, as for example, an HTML string
    nextEl: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5">
        <g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g>
      </svg>`,

    // Script to load dynamically in case no lory instance was found
    script: 'https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js',

    // TODO

    // Default slides
    slidesEl: '',
  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
});
