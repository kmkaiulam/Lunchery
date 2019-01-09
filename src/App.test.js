import React from 'react';

import {shallow, mount} from 'enzyme';
import App from './App';

const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {

    it('renders without crashing', () => {
      shallow(<App />)
    });

});
