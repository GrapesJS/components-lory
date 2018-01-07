import constants from '../constants';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { prevName, prevId } = constants;

  dc.addType(prevName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Nav Previous',
        ...config.slideProps
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(prevId)) {
          return { type: prevName };
        }
      },
    }),

    view: defaultType.view
  });
}
