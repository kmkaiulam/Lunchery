import React from 'react';
import { shallow, mount } from 'enzyme';

import { ProfilePage } from './ProfilePage';

describe('<ProfilePage />', () => {
    it('Renders without crashing', () => {
        const props = {
            dispatch: () =>
            console.log('dispatched action')
        }
        const profileEdit = {
            profileEdit:false
        }
        const profileImageEdit = {
            profileImageEdit: false
        }
        const chefProfile = {
            displayName: 'Guest'
        }
        const chefProfileBlankName = {
            displayName: ''
        }
        const groupResults= {
            createdBy: 'uniqueId'
        }
        const groupResultsNull= {
            groupResults: null
        }
        shallow(<ProfilePage props={props} profileEdit={profileEdit} profileImageEdit={profileImageEdit} chefProfile={chefProfile} groupResults = {groupResultsNull} />)
        shallow(<ProfilePage props={props} profileEdit={profileEdit} profileImageEdit={profileImageEdit} chefProfile={chefProfile} groupResults={groupResults}/>)
        shallow(<ProfilePage props={props} profileEdit={profileEdit} profileImageEdit={profileImageEdit} chefProfile={chefProfileBlankName} groupResults={groupResults}/>)
        shallow(<ProfilePage props={props} profileEdit={{profileEdit:true}} profileImageEdit={profileImageEdit} chefProfile={chefProfile} groupResults={groupResults}/>)
        shallow(<ProfilePage props={props} profileEdit={profileEdit} profileImageEdit={{profileImageEdit:true}} chefProfile={chefProfile} groupResults={groupResults}/>)
    });

})