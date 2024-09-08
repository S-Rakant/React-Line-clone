import React, { useEffect, useState } from 'react'
import SIgnOut from './SIgnOut'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage';

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => { //マウント時のみ実行(初回レンダリング時)
        db.collection('messages').orderBy('createdAt').limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
    <div>
        {/* {console.log(messages)} */}
        <SIgnOut />
        <div className="msgs">
            {messages.map(({id, text, photoURL, uid}) => (
            <div key={id} className={`msg ${
                uid === auth.currentUser.uid ? 'send' : 'received'
            }`}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            ))}
        </div>
        <SendMessage />
    </div>
    )
}

export default Line