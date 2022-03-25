import React from 'react';
import { auth } from '../../config';

function SignOut() {
    console.log(auth.currentUser, 'rob')
    if (auth.currentUser) {
      return  (
          <section>
            <div className="sign-in">
              <h1>Sign Out</h1>
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
            
          </section>
          
        )
    } else {
      return(
        <div className="App">
          <section>
            <div className="sign-in">
              <h1>Your not signed in</h1>
            </div>
            
          </section>
        </div>
      )
      
    } 
}

export default SignOut
