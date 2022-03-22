import React from "react";
import userIcon from '../../../Assets/images/user-icon.png'

export default function ListAtendee({attendee}) {
    return (
        <div>
            <img className="my-3 mr-1 w-8 h-8 rounded-full shadow-lg" src={attendee.photoURL} />
        </div>
    )
}