import React from 'react';

import './ChefRequests.css';

export default function ChefRequests(props) {
    let requestMonday= props.workWeek.monday.request.map((request, index) =>
    <div key={index} className='request'>
        <div>{request}
            <div>
                <button>Accept </button>
                <button>Decline</button> 
            </div>
        </div>
    </div>
    )
    let requestTuesday= props.workWeek.tuesday.request.map((request, index) =>
    <div key={index} className='request'>
        <div>{request}
            <div>
                <button>Accept </button>
                <button>Decline</button> 
            </div>
        </div>
    </div>
    )
    let requestWednesday= props.workWeek.wednesday.request.map((request, index) =>
    <div key={index} className='request'>
        <div>{request}
            <div>
                <button>Accept </button>
                <button>Decline</button> 
            </div>
        </div>
    </div>

    )
    let requestThursday= props.workWeek.thursday.request.map((request, index) =>
    <div key={index} className='request'>
        <div>{request}
            <div>
                <button>Accept </button>
                <button>Decline</button> 
            </div>
        </div>
    </div>
    )
    let requestFriday= props.workWeek.friday.request.map((request, index) =>
    <div key={index} className='request'>
        <div>{request}
            <div>
                <button>Accept </button>
                <button>Decline</button> 
            </div>
        </div>
    </div>
    )
    return  (
            <div><h2>Requests</h2>
                <section className= 'chefRequests'>
                    <div>
                        <div>
                            <strong>Monday</strong>
                        </div>
                        <div>
                            {requestMonday} 
                           
                        </div>
                    </div>
                    <div>
                        <div>
                            <strong>Tuesday</strong>
                        </div>
                        <div>
                            {requestTuesday}
                        </div>
                    </div>
                    <div>
                        <div>
                            <strong>Wednesday</strong>
                        </div>
                        <div>
                            {requestWednesday}
                        </div>
                    </div>
                    <div>
                        <div>
                            <strong>Thursday</strong>
                        </div>
                        <div>
                            {requestThursday}
                        </div>
                    </div>
                    <div>
                        <div>
                            <strong>Friday</strong>
                        </div>
                        <div>
                            {requestFriday}
                        </div>
                    </div>
                </section>
            </div>
            );
        }