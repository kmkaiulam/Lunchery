import React from 'react';

import './ChefWorkWeek.css';

export default function ChefWorkWeek(props) {
let chefMonday= props.dailyRequests.monday.map(request =>
    <div>{request}</div>
)
let chefTuesday= props.dailyRequests.tuesday.map(request =>
    <div>{request}</div>
)
let chefWednesday= props.dailyRequests.wednesday.map(request =>
    <div>{request}</div>
)
let chefThursday= props.dailyRequests.thursday.map(request =>
    <div>{request}</div>
)
let chefFriday= props.dailyRequests.friday.map(request =>
    <div>{request}</div>
)


console.log(chefMonday);
    return  (
    <div className='chefWorkWeekTitle'><h2>WorkWeek</h2>
        <section className= 'chefWorkWeek'>
            <div>
                <div>
                    <strong>Monday</strong>
                </div>
                <div>
                    {chefMonday}
                </div>
                <div>
                Confirmed: {chefMonday.length}
                </div>
            </div>
            <div>
                <div>
                    <strong>Tuesday</strong>
                </div>
                <div>
                    {chefTuesday}
                </div>
                <div>
                Confirmed: {chefTuesday.length}
                </div>
            </div>
            <div>
                <div>
                    <strong>Wednesday</strong>
                </div>
                <div>
                    {chefWednesday}
                </div>
                <div>
                Confirmed: {chefWednesday.length}
                </div>
            </div>
            <div>
                <div>
                    <strong>Thursday</strong>
                </div>
                <div>
                    {chefThursday}
                </div>
                <div>
                Confirmed: {chefThursday.length}
                </div>
            </div>
            <div>
                <div>
                    <strong>Friday</strong>
                </div>
                <div>
                    {chefFriday}
                </div>
                <div>
                    Confirmed: {chefFriday.length}
                </div>
            </div>
        </section>
    </div>
    );
}
