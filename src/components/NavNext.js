import constants from '../constants';
import { elHasClass } from '../utils';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { nextName, nextId, sliderSelector } = constants;
  const classId = config.classNext;
  const type = nextName;

  dc.addType(type, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Nav Next',
        copyable: 0,
        draggable: sliderSelector,
        style: {
          position: 'absolute',
          display: 'block',
          cursor: 'pointer',
          top: '50%',
          right: 0,
          'margin-top': '-25px',
        },
        ...config.nextProps
      },

      init() {
        this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
      }
    }, {
      isComponent(el) {
        if (elHasClass(el, classId)) return { type };
      },
    }),

    view: defaultType.view
  });
}
