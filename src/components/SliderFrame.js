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
        ...config.frameProps
      },

      init() {
        const cls = config.classFrame;
        this.get('classes').pluck('name').indexOf(cls) < 0 && this.addClass(cls);
      }
    }, {
      isComponent(el) {
        let cls = el.className;
        cls = cls && cls.toString();

        if (cls && cls.split(' ').indexOf(config.classFrame) >= 0) {
          return { type: frameName };
        }
      },
    }),

    view: defaultView
  });
}
