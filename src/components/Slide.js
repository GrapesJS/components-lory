import constants from '../constants';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { slideName, slideId, slidesSelector } = constants;

  dc.addType(slideName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Slide',
        draggable: slidesSelector,
        style: {
          display: `inline-block`,
          position: 'relative',
          background: '#2E435A',
          color: '#fff',
          width: '880px',
          'margin-right': '10px',
          'vertical-align': 'top',
          'min-height': '130px',
        },
        ...config.slideProps
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(slideId)) {
          return { type: slideName };
        }
      },
    }),

    view: defaultView
  });
}
