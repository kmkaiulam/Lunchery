import React from 'react';
import { shallow, mount } from 'enzyme';

import { RegistrationPage } from './RegistrationPage';

describe('<RegistrationPage />', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationPage />)
    });

})