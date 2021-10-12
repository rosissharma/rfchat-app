import React, { useState } from 'react'
import firebase from 'firebase';
import { db, auth } from '../firebase.js';

function SendMessages({ scroll }) {

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
                    <input value={msg} onChange={(e) => setMsg(e.target.value)} autoFocus placeholder="Text Message" className="text-black p-3 outline-none" style={{ width: '100%' }} />
                    <div data-tip="send" class="tooltip">
                        <button type='submit' className="btn btn-primary text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMessages
