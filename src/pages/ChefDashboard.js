import React from 'react';
import './ChefDashboard.css';
import ChefWorkWeek from './chefDashboard/ChefWorkWeek';

export default function ChefDashboard(props) {
    let dailyRequests= {
        monday: ['Sam', 'Donald', 'Goofy', 'Mickey'],
        tuesday: ['Sam', 'Donald', 'Goofy', 'Mickey'],
        wednesday: ['Sam', 'Donald', 'Goofy', 'Mickey'],
        thursday: ['Sam', 'Donald', 'Pat', 'Rick'],
        friday: ['Goofy', 'Mickey']
      }
      return(
    <div className='chefDashboard'>
        <ChefWorkWeek dailyRequests={dailyRequests}/>
    </div>
    )
}