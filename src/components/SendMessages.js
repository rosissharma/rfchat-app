import React, {useState} from 'react'
import firebase from 'firebase';
import {db,auth} from '../firebase.js';

function SendMessages() {

    const [msg, setMsg] = useState('');

    async function SendMessage(e) {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser;

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }

    return (
        <div>
            <form onSubmit={SendMessage} className="space-x-2">
                <input value={msg} onChange={(e) => setMsg(e.target.value)} autoFocus placeholder="Text Message..." className="text-black mt-10 rounded-full p-3 outline-none w-screen" />
                <button type='submit' className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}

export default SendMessages
