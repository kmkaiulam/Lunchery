import React from 'react';
import MyChefs from './dashboard/MyChefs';
import MyWorkWeek from './dashboard/MyWorkWeek';
import MessagesInbox from './dashboard/MessagesInbox';
import './Dashboard.css';

export default function Dashboard(props) {
    const workweek = {
        monday: 'Chef Amy',
        tuesday: 'Chef Guy',
        wednesday: 'Chef Max',
        thursday: 'Chef Gladys',
        friday: 'Not Scheduled'
    }
    const chefs = [{
        name: 'Chef Amy',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74PsvREfbIsR6FqZy3L4sCQ0KTK4BwL7cpkT3qb4dqp8ybntXWw',
        speciality: 'Indian',
        dish: 'https://images.media-allrecipes.com/userphotos/720x405/1116370.jpg'
    },
    {
    name: 'Chef Guy',
    image: 'https://assets3.thrillist.com/v1/image/2670144/size/tmg-gift_guide_default.jpg',
    speciality: 'American',
    dish: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Easy_Steak_Frites-LEDE.jpg?itok=IdQsXmBP'
    }
]
    const messages = [
        {from: 'Chef Amy',
        company:'ABC Company', 
        text: 'Your request has been accepted!', 
        },
        {from:'Chef Taylor',
        
        company: 'CIM',
        text: 'Sorry we cannot accomodate your dietary restrictions.'}
    ]
    return (
     <div className='dashboard'>
            <MyWorkWeek schedule={workweek} />
            <div className='row'>
                <MyChefs myChefs={chefs} />
                <MessagesInbox messages={messages} />
            </div>
    </div>
    )
}


