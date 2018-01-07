import constants from '../constants';
import Slider from './Slider';
import Slide from './Slide';

export default (editor, config = {}) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { sliderName, slideName, sliderId, slideId } = constants;

  Slider(dc, config);
  Slide(dc, config);
}
