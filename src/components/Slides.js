import constants from '../constants';
import { elHasClass } from '../utils';

export default (dc, config = {}) => {
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const { slidesName, slidesId, slideSelector, frameSelector } = constants;

  dc.addType(slidesName, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Slides',
        droppable: slideSelector,
        draggable: frameSelector,
        style: {
          display: 'inline-block',
          'transition-delay': '1ms'
        },
        ...config.slidesProps
      },

      init() {
        const cls = config.classSlides;
        this.get('classes').pluck('name').indexOf(cls) < 0 && this.addClass(cls);
      }
    }, {
      isComponent(el) {
        if (elHasClass(el, config.classSlides)) return { type: slidesName };
      },
    }),

    view: defaultType.view.extend({
      init() {
        this.listenTo(this.model.components(), 'add remove', this.renderSlider);
      },

      renderSlider() {
        const slider = this.model.parent().parent();
        slider && slider.view.render();
      }
    })
  });
}
