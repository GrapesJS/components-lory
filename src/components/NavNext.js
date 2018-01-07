import constants from '../constants';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { nextName, nextId, sliderSelector } = constants;

  dc.addType(nextName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Nav Next',
        copyable: 0,
        draggable: sliderSelector,
        ...config.nextProps
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(nextId)) {
          return { type: nextName };
        }
      },
    }),

    view: defaultType.view
  });
}
