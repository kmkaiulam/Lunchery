import React from 'react';

import './ChefMessages.css';

export default function ChefMessages(props) {
    let chefMessages = props.chefMessages.map((chefMessage, index) =>
    <div key={index}>
        <h2>From: {chefMessage.from}</h2>
        <div>Message: {chefMessage.text}</div>
        <div><button>reply</button><button>delete</button></div>
    </div>
    );
    return  (
    <div className='chefMessages'>
        <h2>Messages</h2>
        <section className='chefMessage'>
         {chefMessages}
        </section>
    </div>
    )
}