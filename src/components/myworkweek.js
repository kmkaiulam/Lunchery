import React from 'react';

import '../stylesheets/myworkweek.css';

export default function MyWorkWeek(props) {
    return  (
    <section className= 'workweek'>
        <table className ='workWeekTable'>
        <tr>
            <th colSpan={5}><h2>My Workweek</h2></th>
        </tr>
        <tr className='weekSchedule'>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
        <tr>
            <td className='day'>{props.schedule.monday}</td>
            <td className='day'>{props.schedule.tuesday}</td>
            <td className='day'>{props.schedule.wednesday}</td>
            <td className='day'>{props.schedule.thursday}</td>
            <td className='day'>{props.schedule.friday}</td>
        </tr>
        </table>
    </section>
    )
}