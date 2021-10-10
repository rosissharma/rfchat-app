import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div className="signOut">
            <h1 className="uppercase font-extrabold border bg-pink-400 text-white p-3 rounded-md">🔥 Chat</h1>
            <button onClick={() => auth.signOut()} className="btn btn-primary">Sign Out</button>
        </div>
    )
}

export default SignOut
