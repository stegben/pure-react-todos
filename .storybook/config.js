import { configure } from '@kadira/storybook';
import 'bootstrap/dist/css/bootstrap.css';
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
