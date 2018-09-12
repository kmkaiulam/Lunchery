import React from 'react';

import './MyWorkWeek.css';

export default function MyWorkWeek(props) {
    return  (
        <div className= 'myWorkWeek'><h2>WorkWeek</h2>
        <section className= 'workWeek'>
            <div>
                <div>
                    <strong>Monday</strong>
                </div>
                <div>
                    {props.schedule.monday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Tuesday</strong>
                </div>
                <div>
                    {props.schedule.tuesday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Wednesday</strong>
                </div>
                <div>
                    {props.schedule.wednesday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Thursday</strong>
                </div>
                <div>
                    {props.schedule.thursday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Friday</strong>
                </div>
                <div>
                    {props.schedule.friday}
                </div>
            </div>
        </section>
    </div>
    );
}