import React from "react";
import ListItem from "../List/ListItem";

export default function List({events}) {
  return (
    <>
      {events.map(event => (
        <ListItem event={event} key={event.id}/>
      ))}
    </>
  )
}