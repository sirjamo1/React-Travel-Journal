import React from "react";

export default function TravelCard(props) {
  return (
    <div>
      <div>
        <img src={props.item.imageUrl} />
      </div>
      <div>
        <span>
          <img src="" />
          <p>{props.item.location}</p>
          <a>{props.item.googleMapsUrl}</a>
        </span>
        <h3>{props.item.title}</h3>
        <p>
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
        <hr />
      </div>
    </div>
  );
}
