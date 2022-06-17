import React from "react";
import PointerIcon from "../images/pointerIcon.png";

export default function TravelCard(props) {
  return (
    <div className="travel--container">
      <img
        src={props.item.imageUrl}
        className="travel--image"
        alt={props.item.title}
      />

      <div className="travel--details">
        <div className="pointer-maps">
          <img src={PointerIcon} alt="pointer icon" />
          <p>{props.item.location}</p>
          <a
            href={props.item.googleMapsUrl}
            target="_blank"
            className="googleMaps"
          >
            View on Google Maps
          </a>
        </div>

        <h3 className="title">{props.item.title}</h3>
        <p className="dates">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="discription">{props.item.description}</p>
      </div>
    </div>
  );
}
