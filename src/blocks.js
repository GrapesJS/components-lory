import constants from './constants';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const sliderBlock = config.sliderBlock;
  const { sliderName, sliderId, slideId } = constants;

  // TODO make js_frame, js_slides, js_prev, js_next private

  sliderBlock && bm.add(sliderName, {
    label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/>
      </svg>
      <div class="gjs-block-label">Slider</div>
    `,
    content: `
      <div class="slider js_slider" ${sliderId}>
          <div class="frame js_frame">
              <div class="slides js_slides">
                  <div class="js_slide" ${slideId}></div>
                  <div class="js_slide" ${slideId}></div>
                  <div class="js_slide" ${slideId}></div>
              </div>
          </div>
          <span class="js_prev prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
          </span>
          <span class="js_next next">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
          </span>
      </div>
      <style>
        .slider {
          position: relative;
          width: 980px;
          margin: 0 auto;
        }

        .frame {
          width: 880px;
          margin: 0 auto;

          position: relative;
          font-size: 0;
          line-height: 0;
          overflow: hidden;
          white-space: nowrap;
        }

        .slides {
          display: inline-block;
          transition-delay: 1ms;
        }

        .prev {
          position: absolute;
          top: 50%;
          margin-top: -25px;
          display: block;
          cursor: pointer;
          left: 0;
        }

        .next {
          position: absolute;
          top: 50%;
          margin-top: -25px;
          display: block;
          cursor: pointer;
          right: 0;
        }

        .next svg, .prev svg {
          width: 25px;
        }

        .js_slide {
          display: inline-block;
          vertical-align: top;
          position: relative;
          min-height: 130px;
          text-align: center;
          font-size: 15px;
          line-height: 30px;
          background: #2E435A;
          color: #fff;

          margin-right: 10px;
          width: 880px;
        }
      </style>
    `,
    ...sliderBlock
  });
}
