import React from 'react';
import './ChefDashboard.css';
import ChefWorkWeek from './chefDashboard/ChefWorkWeek';
import ChefRequests from './chefDashboard/ChefRequests';
export default function ChefDashboard(props) {
    let workWeek= {
        monday: {
            confirmed: ['Sam', 'Donald', 'Goofy', 'Mickey'],
            request: ['Pluto', 'Doug'],
        },
        tuesday: {
            confirmed: ['Sam', 'Donald', 'Goofy', 'Mickey'],
            request: ['Kermit'],
        },
        wednesday:{
            confirmed: ['Sam', 'Donald', 'Goofy', 'Mickey'],
            request: [''],
        },
        thursday: {
            confirmed: ['Sam', 'Donald', 'Goofy', 'Mickey'],
            request: ['Beaker'],
        },
        friday: {
            confirmed: ['Sam', 'Donald', 'Goofy', 'Mickey'],
            request: [''],
        },
      }
      return(
    <div className='chefDashboard'>
        <ChefWorkWeek workWeek={workWeek}/>
        <ChefRequests workWeek ={workWeek}/>
    </div>
    )
}