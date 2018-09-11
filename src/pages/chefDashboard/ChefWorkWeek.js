import React from 'react';

import './ChefWorkWeek.css';

export default function ChefWorkWeek(props) {
let confirmedMonday= props.workWeek.monday.confirmed.map((guest, index) =>
    <div key={index} className='confirmed'>
      <div>{guest}</div>
    </div>
)
let confirmedTuesday= props.workWeek.tuesday.confirmed.map((guest, index) =>
    <div key={index} className='confirmed'>
      <div>{guest}</div>
    </div>
)
let confirmedWednesday= props.workWeek.wednesday.confirmed.map((guest, index) =>
    <div key={index} className='confirmed'>
      <div>{guest}</div>
    </div>
)
let confirmedThursday= props.workWeek.thursday.confirmed.map((guest, index) =>
    <div key={index} className='confirmed'>
      <div>{guest}</div>
    </div>
)
let confirmedFriday= props.workWeek.friday.confirmed.map((guest, index) =>
    <div key={index} className='confirmed'>
      <div>{guest}</div>
    </div>
)
    return  (
    <div className='chefWorkWeekTitle'><h2>WorkWeek</h2>
        <section className= 'chefWorkWeek'>
            <div>
                <div>
                    <strong>Monday</strong>
                </div>
                <div>
                    {confirmedMonday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Tuesday</strong>
                </div>
                <div>
                    {confirmedTuesday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Wednesday</strong>
                </div>
                <div>
                    {confirmedWednesday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Thursday</strong>
                </div>
                <div>
                    {confirmedThursday}
                </div>
            </div>
            <div>
                <div>
                    <strong>Friday</strong>
                </div>
                <div>
                    {confirmedFriday}
                </div>
            </div>
        </section>
    </div>
    );
}
