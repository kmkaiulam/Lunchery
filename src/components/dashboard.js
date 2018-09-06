import React from 'react';
import NavBar from './navbar';
import MyChefs from './mychefs';
import MyWorkWeek from './myworkweek';
import Messages from './messages';
import '../stylesheets/dashboard.css';

export default function Dashboard(props) {
    const workweek = {
        monday: 'Chef Amy',
        tuesday: 'Chef Taylor',
        wednesday: 'Chef Max',
        thursday: 'Chef Gladys',
        friday: 'Not Scheduled'
    }
    const chefs = [{
        name: 'Chef Amy',
        image: 'https://myhero.com/content/images/thumbs/0047770_amy-carmichael_400.jpeg',
        speciality: 'Indian',
        dish: 'https://images.media-allrecipes.com/userphotos/720x405/1116370.jpg'
    },
    {
    name: 'Chef Amy2',
    image: 'https://myhero.com/content/images/thumbs/0047770_amy-carmichael_400.jpeg',
    speciality: 'Indian',
    dish: 'https://images.media-allrecipes.com/userphotos/720x405/1116370.jpg'
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
            <NavBar />
            <MyWorkWeek schedule={workweek} />
            <div className='row'>
                <MyChefs myChefs={chefs} />
                <Messages messages={messages} />
            </div>
    </div>
    )
}


