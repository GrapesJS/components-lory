import constants from '../constants';
import Slider from './Slider';
import Slides from './Slides';
import Slide from './Slide';
import NavPrev from './NavPrev';
import NavNext from './NavNext';
import SliderFrame from './SliderFrame';

export default (editor, config = {}) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { sliderName, slideName, sliderId, slideId } = constants;

  Slider(dc, config);
  Slides(dc, config);
  Slide(dc, config);
  NavPrev(dc, config);
  NavNext(dc, config);
  SliderFrame(dc, config);
}
