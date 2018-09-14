import React from 'react';
import MyChefs from './dashboard/MyChefs';
import MyWorkWeek from './dashboard/MyWorkWeek';
import MessagesInbox from './dashboard/MessagesInbox';
import './Dashboard.css';

export default function Dashboard(props) {
    return (
     <div className='dashboard'>
            <MyWorkWeek />
            <div className='row'>
                <MyChefs />
                <MessagesInbox />
            </div>
    </div>
    )
}


