import React from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../contacts/Contacts';

function Dashboard() {
    
    return (
        <div className="container">
            
                <main>
                    <div className="">
                        <h2>Say something</h2>
                        <h4>What's</h4>

                        
                    </div>

                    <section>
                        <Contacts />
                    </section>
                </main>
                
                <footer>
                    
                    <Link to='/signIn'><span>Sign In</span></Link>
                    <Link to='signOut'><span>Sign Out</span></Link>
                </footer>
        </div>
    )
}

export default Dashboard
