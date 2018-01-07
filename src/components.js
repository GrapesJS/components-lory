import constants from './constants';

export default (editor, config = {}) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { sliderName, sliderId } = constants;

  dc.addType(sliderName, {
    model: defaultModel.extend({
      defaults: { ...defaultModel.prototype.defaults,
        droppable: false,
        script: function () {
          var slider = lory(this, {});
        },
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(sliderId)) {
          return { type: sliderName };
        }
      },
    }),
    view: defaultView,
  });
}
