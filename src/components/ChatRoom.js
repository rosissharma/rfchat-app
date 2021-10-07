import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import SendMessages from './SendMessages';
import SignOut from './SignOut'

function ChatRoom() {

    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    return (
        <div>
            <SignOut />
            {messages.map(({id, text, photoURL}) => (
                <div key={id}>
                    <img src={photoURL} alt="user profile pic" />
                    <p>{text}</p>
                </div>
            ))}
            <SendMessages />
        </div>
    )
}

export default ChatRoom
