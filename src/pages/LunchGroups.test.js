import React from 'react';
import { shallow, mount } from 'enzyme';

import { LunchGroups } from './LunchGroups';

describe('<LunchGroups />', () => {
    const props = {
        dispatch: () => 
            console.log('dispatched action')
    }
    const groupResults= {
        createdBy: 'uniqueId'
    }
    const groupResultsNull = {
        groupResults:null
    }
    const createLunchGroup = {
        createLunchGroup:true
    }
    const currentUser = {
        chef: false
    }
    const currentUserTrue = {
        chef: true
    }
   
    it('Renders without crashing', () => {
        shallow(<LunchGroups props={props} groupResults={groupResultsNull} createLunchGroup={{createLunchGroup:false}} currentUser={currentUser}/>)
        shallow(<LunchGroups props={props} groupResults={groupResults} createLunchGroup={createLunchGroup} currentUser={currentUserTrue}/>)
        shallow(<LunchGroups props={props} groupResults={groupResults} createLunchGroup={createLunchGroup} currentUser={currentUser}/>)
        shallow(<LunchGroups props={props} groupResults={groupResults} createLunchGroup={{createLunchGroup:false}} currentUser={currentUser}/>)
    });

})