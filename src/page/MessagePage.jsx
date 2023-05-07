import React, { useState } from 'react'
import { Message } from '../components/Message';
import { Messages } from '../components/Messages';
import { MessageRoom } from './../components/MessageRoom';

import { useSelector } from 'react-redux';
import { Nav } from './../components/Nav';
export const MessagePage = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const [showMessage, setShowMessage] = useState(false)
    // const [showConversation, setShowConversation] = useState(false)

    return (
        <div className={`${isDarkMode ? 'dark' : ''}  overflow-y-hidden h-[100vh]`}>
            <Nav></Nav>
            <div className="grid grid-cols-5 px-4 gap-1 h-[100vh] overflow-y-scroll">
                <MessageRoom setShowMessage={setShowMessage}></MessageRoom>
                {showMessage &&
                    <Messages setShowMessage={setShowMessage} showMessage={showMessage}></Messages>
                }

            </div>
        </div>
    )
}
