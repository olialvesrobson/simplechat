import React, { useState, useRef } from 'react';
import { auth, firestore } from '../../config';

import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function ChatRoom () {

    const dummy = useRef()
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async(e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
  
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    return  (
      <>
        <main>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} /> )}
  
          <div ref={dummy}></div>
        </main>
        
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
          <button type="submit">Send</button>
        </form>
      </>
    )
  }
  
  function ChatMessage(props) {
    const { text , uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt='' />
        <p>{text}</p>
      </div>
    )
  }