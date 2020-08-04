import React from "react";

// Components
import ActorInfo from "./elements/ActorInfo";
import Navigation from "./elements/Navigation";
import Spinner from "./elements/Spinner";

import { useActorFetch } from "./hooks/useActorFetch";

const Actor = ({ actorId }) => {
  const [actor, loading, error] = useActorFetch(actorId);

  if (error) return <div>Something went wrong ... </div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation actor={actor.name}>Actor name </Navigation>
      <ActorInfo actor={actor} />
    </>
  );
};

export default Actor;
