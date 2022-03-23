import React from "react";
import ListItem from "../List/ListItem";

export default function List({ events, selectEvent, deleteEvent }) {
  return (
    <>
      {events.map(event => (
        <ListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  )
}