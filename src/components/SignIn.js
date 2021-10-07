import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase.js'
import { Helmet } from 'react-helmet'

function SignIn() {
    <Helmet>
        <title>Sign In</title>
    </Helmet>

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider(); 
        auth.signInWithPopup(provider);
    }

    return (
        <div className="bg-base-300 flex items-center justify-center h-screen" data-theme="cupcake">
            <button onClick={signInWithGoogle} className="btn btn-primary" aria-pressed="true">Sign in with Google</button>
        </div>
    )
}

export default SignIn
