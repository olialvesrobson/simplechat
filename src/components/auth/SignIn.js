import React from 'react';
import { firebase, auth } from '../../config';

function SignIn() {
    
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  return (
    <section>
      <div className="sign-in">
        <h1>Sign In</h1>
        
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
      
    </section>
    
    
  )
}

export default SignIn
