import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase';
import SendMessages from './SendMessages';
import SignOut from './SignOut'

function ChatRoom() {
    const scroll = useRef()
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div data-theme="cupcake">

            <SignOut />

            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="user profile pic" className="rounded-full h-10" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessages scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default ChatRoom
