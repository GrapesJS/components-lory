import constants from '../constants';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { slidesName, slidesId, slideSelector } = constants;

  dc.addType(slidesName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Slides',
        droppable: slideSelector,
        ...config.slidesProps
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(slidesId)) {
          return { type: slidesName };
        }
      },
    }),

    view: defaultType.view
  });
}
