import React from 'react';
import { useState } from 'react';
import { auth, firestore } from '../../config';

function Contacts() {

    const [contact, setContact] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [addContact, setAddContact] = useState('');


    function createChat(contactId) {
        const obj = firestore.collection('contacts').doc(auth.currentUser.uid).collection('friends').doc(contactId).set({})
        
    }

    const searchEmail = (e) => {
        
        const users = firestore.collection('users')
            .where('email', '==', contact).get().then(result => {
                const data = result.docs.map( item => { return {...item.data(), id: item.id} })
                setSearchResult(data);
            });

        if (users) {
            return ( true)
        } else {
            return false
        }
    }

    function renderSearchResult () {
        return (
            searchResult && searchResult.map(result => {
                return (
                    <div className="searchResultList">
                        <div className="searchResultUser">
                            <img src={result.photoURL ? result.photoURL : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} alt="" />
                            <span >{result.email}</span>
                        </div>
                        <button onClick={
                            createChat(result.id)
                        }>Chat</button>
                    </div>
                )
            })
        )
    }

    return (
        <section className="searchContact">
            <h3>Start a chat with someone...</h3>
            <div>
                <input type="text" name="textSearch" id="textSearch"
                    placeholder="E-mail "
                    onChange={(e) => setContact(e.target.value)}  />
                <button type="button" onClick={(e) => searchEmail()}>Search</button>
                
                
            </div>
            <section>
                {contact && renderSearchResult()}
            </section>

        </section>
        
    )
}

export default Contacts
