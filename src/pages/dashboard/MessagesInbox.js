import React from 'react';

import './MessagesInbox.css';

export default function MessagesInbox(props) {
    let messages = props.messages.map((message, index) =>
    <div key={index}>
        <div>From: {message.from} @ {message.company}</div>
        <div>Message: {message.text}</div>
        <div><button>reply</button><button>delete</button></div>
    </div>
    );
    return  (
    <div className='messagesInbox'>
        <h2>Messages</h2>
        <div>
         {messages}
        </div>
    </div>
    )
}