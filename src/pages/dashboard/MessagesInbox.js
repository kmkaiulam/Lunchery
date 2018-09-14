
import React from 'react';
import {connect} from 'react-redux';

import './MessagesInbox.css';

export class MessagesInbox extends React.Component {
    render(){
        let messages = this.props.messages.map((message, index) =>
        <div key={index}>
            <div>From: {message.from} @ {message.company}</div>
            <div>Message: {message.text}</div>
            <div><button>reply</button><button>delete</button></div>
        </div>
        );
        return (
            <div className='messagesInbox'>
                <h2>Messages</h2>
                <div>
                    {messages}
                </div>
            </div>
        )
    }
}

const mapStateToProps=state => ({
    messages:state.auth.user.messages
});

export default connect(mapStateToProps)(MessagesInbox);