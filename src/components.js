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
          console.log(this);
          var slider = lory(this, {});
          console.log(this, slider);
        },
      },
    }, {
      isComponent(el) {
        if(el.hasAttribute && el.hasAttribute(sliderId)) {
          console.log('found', el);
          return {type: sliderName};
        }
      },
    }),
    view: defaultView,
  });
}
