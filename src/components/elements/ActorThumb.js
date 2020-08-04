import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

import NoImage from "../images/no_image.jpg";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { StyledActorThumb } from "../styles/StyledActorThumb";

const ActorThumb = ({ actor }) => (
  <StyledActorThumb>
    <Link to={`/actor/${actor.id}`}>
      <img
        className="clickable"
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actorthumb"
      />

      <span className="actor-name">{actor.name}</span>
      <span className="actor-character">{actor.character}</span>
    </Link>
  </StyledActorThumb>
);

ActorThumb.propTypes = {
  actor: PropTypes.object,
};

export default ActorThumb;
