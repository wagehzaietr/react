import React from "react";

import { StyledCard } from "./styled-components/Card.style";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <>
      <StyledCard>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>
            
        </div>
        <img src={`./images/${image}`} alt="" />
      </StyledCard>
    </>
  );
};

export default Card;
