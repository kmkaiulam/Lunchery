import React from 'react';
import './LunchRequest.css';

export default function LunchRequests(props) {
    const lunchRequests = props.lunchRequests.map((lunchRequest, index) =>
        <div key={index} className='requestor'>
            <div>
                <div>{lunchRequest}</div> <button> Accept </button> <button> Decline </button>
            </div>
        </div>
    );
    return (
    <div className='lunchRequests'>
        {lunchRequest}
    </div>
    );
}