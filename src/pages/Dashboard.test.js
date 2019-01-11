import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dashboard } from './Dashboard';

describe('<Dashboard />', () => {
   
    it('Renders without crashing', () => {
        const currentUser = {
            chef: true,
            firstName: 'Guest',
            chefProfile: {
                displayName: 'Guest'
            }
        }
        const currentUserEmptyName = {
            chef: true,
            firstName: 'Guest',
            chefProfile: {
                displayName: ''
            }
        }
        const groupResults = {
            createdBy: 'uniqueId'
        }
        const profileUpToDate = {
            profileUpToDate: true
        }
        const props = {
            dispatch: () =>
            console.log('dispatched function')
        }
        shallow(<Dashboard profileUpToDate={{profileUpToDate: false}} currentUser={currentUser} groupResults = {groupResults} props={props} />)
        shallow(<Dashboard profileUpToDate={profileUpToDate} currentUser={currentUserEmptyName} groupResults = {groupResults} props={props} />)
        shallow(<Dashboard profileUpToDate={profileUpToDate} currentUser={currentUser} groupResults = {{groupResults:null}} props={props} />)
        shallow(<Dashboard profileUpToDate={profileUpToDate} currentUser={currentUser} groupResults = {groupResults} props={props} />)
    })
});
