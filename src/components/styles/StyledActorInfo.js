import styled from "styled-components";

export const StyledActorInfo = styled.div`
         max-width: 1280px;
         margin: 0 auto;
         font-family: "Abel", sans-serif;
         display: grid;
         grid-template-columns: 1fr 1fr;
         place-items: center;
         background: linear-gradient(to bottom, #3cbec9, #00b3e5);
         padding: 2rem;

         .actorinfo-img {
           margin: 1rem;

           img {
             border-radius: 20px;
             width: 100%;
           }
         }

         .actorinfo-text {
           padding: 2rem;
           background: linear-gradient(to bottom, #3cbec9, #00b3e5);
           border: 2px solid #90cea1;
           color: #000;
           font-size: 1.3rem;
           line-height: 1.5;
           border-radius: 20px;

           h1 {
             font-weight: bold;
             text-transform: uppercase;
           }
         }

         @media screen and (max-width: 1024px) {
           grid-template-columns: 1fr;
         }
       `;
