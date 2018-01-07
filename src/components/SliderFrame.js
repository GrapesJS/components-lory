import constants from '../constants';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { frameName, frameId, slidesSelector } = constants;

  dc.addType(frameName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Slider Frame',
        droppable: slidesSelector,
        style: {
          width: '880px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          'white-space': 'nowrap'
        },
        ...config.slideProps
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(frameId)) {
          return { type: frameName };
        }
      },
    }),

    view: defaultView
  });
}
