import React from 'react';

import '../stylesheets/messages.css';

export default function Messages(props) {
    let messages = props.messages.map((message, index) =>
    <tr key={index}>
        <th>From: {message.from} @ {message.company}</th>
        <td>Message: {message.text}</td>
        <td><button>reply</button><button>delete</button></td>
    </tr>
    );
    return  (
    <div className='messages'>
        <h2>Messages</h2>
        <table className='newTable'>
         {messages}
        </table>
    </div>
    )
}