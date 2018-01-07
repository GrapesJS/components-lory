import constants from '../constants';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const {
    prevSelector,
    nextSelector,
    sliderName,
    sliderId,
    prevId,
    nextId,
    frameId,
    slidesId,
    slideId
  } = constants;

  dc.addType(sliderName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,

        name: 'Slider',

        // Slides scrolled at once
        'slides-to-scroll': 1,

        // Enabled mouse events
        'enable-mouse-events': false,

        // Time in milliseconds for the animation of a valid slide attempt
        'slide-speed': 300,

        // Time in milliseconds for the animation of the rewind after the last slide
        'rewind-speed': 600,

        // Time for the snapBack of the slider if the slide attempt was not valid
        'snap-back-speed': 200,

        // Like carousel, works with multiple slides. (do not combine with rewind)
        infinite: false,

        // If slider reached the last slide, with next click the slider goes
        // back to the startindex. (do not combine with infinite)
        rewind: false,

        // Cubic bezier easing functions: http://easings.net/de
        ease: 'ease',

        droppable: `${prevSelector}, ${nextSelector}`,

        script: function () {
          var falsies = ['0', 'false'];
          var infinite = parseInt('{[ infinite ]}', 10);
          var options = {
            slidesToScroll: '{[ slides-to-scroll ]}',
            enableMouseEvents: falsies.indexOf('{[ enable-mouse-events ]}') >= 0 ? 0 : 1,
            infinite: isNaN(infinite) ? false : infinite,
            rewind: falsies.indexOf('{[ rewind ]}') >= 0 ? 0 : 1,
            slideSpeed: '{[ slide-speed ]}',
            rewindSpeed: '{[ rewind-speed ]}',
            snapBackSpeed: '{[ snap-back-speed ]}',
            ease: '{[ ease ]}',
          };
          lory(this, options);
        },
        ...config.sliderProps
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(sliderId)) {
          return { type: sliderName };
        }
      },
    }),

    view: defaultView.extend({
      init() {
        const props = ['slides-to-scroll', 'enable-mouse-events', 'slide-speed',
          'rewind-speed', 'snap-back-speed', 'infinite', 'rewind', 'ease'];
        const reactTo = props.map(prop => `change:${prop}`).join(' ');
        this.listenTo(this.model, reactTo, this.render);
        const comps = this.model.components();

        // Add a basic template if it's not yet initialized
        if (!comps.length) {
          comps.add(`<div class="frame js_frame" ${frameId}>
              <div class="slides js_slides" ${slidesId}>
                  <div class="js_slide" ${slideId}></div>
                  <div class="js_slide" ${slideId}></div>
                  <div class="js_slide" ${slideId}></div>
              </div>
          </div>
          <span class="js_prev prev" ${prevId}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
          </span>
          <span class="js_next next" ${nextId}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
          </span>`);
        }
      },
    }),
  });
}
