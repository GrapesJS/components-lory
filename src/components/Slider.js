import constants from '../constants';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { sliderName, sliderId } = constants;

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

        droppable: false,

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
        //this.listenTo(this.model, 'change:startfrom change:endText', this.updateScript);
        const comps = this.model.components();

        // Add a basic template if it's not yet initialized
        if (!comps.length) {
          //comps.add(``);
        }
      }
    }),
  });
}
