import React, { useState } from 'react'
import firebase from 'firebase';
import { db, auth } from '../firebase.js';

function SendMessages({scroll}) {

    const [msg, setMsg] = useState('');

    async function SendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser;

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <form onSubmit={SendMessage} className="space-x-2">
                <div className="sendMsg">
                    <input value={msg} onChange={(e) => setMsg(e.target.value)} autoFocus placeholder="Text Message" className="text-black p-3 outline-none" style={{ width: '100%'}} />
                    <button type='submit' className="btn btn-primary text-2xl">✍️</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessages
