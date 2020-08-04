import React from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../images/no_image.jpg";

import { StyledActorInfo } from "../styles/StyledActorInfo";

const ActorInfo = ({ actor }) => {
  return (
    <StyledActorInfo>
      <div className="actorinfo-img">
        <img
          src={
            actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
          }
          alt="actorthumb"
        />
      </div>
      <div className="actorinfo-text">
        <h1>{actor.name}</h1>
        <p>Place of Birth: {actor.place_of_birth}</p>
        <p>BIOGRAPHY: {actor.biography}</p>
      </div>
    </StyledActorInfo>
  );
};

export default ActorInfo;
