import styled from "styled-components";

// VARIABLES SIZE
const root = {
  backgroundDark: "#2d3548",
  textLight: "rgba(255, 255, 255, 0.6)",
  textLighter: "rgba(255, 255, 255, 0.9)",
  spacingS: "8px",
  spacingM: "16px",
  spacingL: "24px",
  spacingXL: "32px",
  spacingXXL: "64px",
  widthContainer: "1200px",
};

// Components background dos cards
export const CardBackground = styled.div<{ $bgImage: string }>`
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  border-radius: ${root.spacingL};
  bottom: 0;
  filter: brightness(0.37) saturate(1.4) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;

  /* Efeito ao passar o mouse sobre o card */
  .cards:hover & {
    transform: scale(1.05) translateZ(0);
  }

  /* Efeito ao passar o mouse na grade de cards */
  .cards-grid:hover > .cards:not(:hover) & {
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(5px);
  }
`;

export const SectionP = styled.section`
  align-items: flex-start;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: ${root.spacingXXL} ${root.spacingXL};

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: ${root.spacingL};
    grid-row-gap: ${root.spacingL};
    max-width: ${root.widthContainer};
    width: 100%;
  }

  @media (min-width: 540px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 960px) {
    .cards-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .cards {
    list-style: none;
    position: relative;
    cursor: pointer;
  }

  .cards:before {
    content: "";
    display: block;
    padding-bottom: 150%;
    width: 100%;
  }

  .cards__content {
    left: 0;
    padding: ${root.spacingL};
    position: absolute;
    top: 0;
  }

  .cards__category {
    color: ${root.textLight};
    font-size: 0.9rem;
    margin-bottom: ${root.spacingS};
    text-transform: uppercase;
  }

  .cards__heading {
    color: ${root.textLighter};
    font-size: 1.8rem;
    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.7);
    line-height: 1.4;
    word-spacing: 100vw;
  }

  /* 🔹 Menu inicialmente escondido */
  .cards__menu {
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.644);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${root.spacingL};
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  /* 🔹 Torna o menu visível no hover */
  .cards:hover .cards__menu {
    opacity: 1;
    transform: translateY(0);
  }

  .cards__menu a {
    color: white;
    text-decoration: none;
    padding: ${root.spacingS} 0;
    text-align: center;
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    line-height: 2;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  /*  Mostra os links com fade-in no hover */
  .cards:hover .cards__menu a {
    opacity: 1;
  }

  .cards__menu a:hover {
    color: #09897f;
    background-color: #e0e0e0;
    border-radius: ${root.spacingL};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// import styled from "styled-components";

// // VARIABLES SIZE
// const root = {
//   backgroundDark: "#2d3548",
//   textLight: "rgba(255, 255, 255, 0.6)",
//   textLighter: "rgba(255, 255, 255, 0.9)",
//   spacingS: "8px",
//   spacingM: "16px",
//   spacingL: "24px",
//   spacingXL: "32px",
//   spacingXXL: "64px",
//   widthContainer: "1200px",
// };

// // Componente estilizado para o background dos cards
// export const CardBackground = styled.div<{ bgImage: string }>`
//   background-image: url(${(props) => props.bgImage});
//   background-size: cover;
//   background-position: center;
//   border-radius: ${root.spacingL};
//   bottom: 0;
//   filter: brightness(0.55) saturate(1.4) contrast(0.85);
//   left: 0;
//   position: absolute;
//   right: 0;
//   top: 0;
//   transform-origin: center;
//   transform: scale(1) translateZ(0);
//   transition: filter 200ms linear, transform 200ms linear;

//   /* Efeito ao passar o mouse sobre o card */
//   .cards:hover & {
//     transform: scale(1.05) translateZ(0);
//   }

//   /* Efeito ao passar o mouse na grade de cards */
//   .cards-grid:hover > .cards:not(:hover) & {
//     filter: brightness(0.5) saturate(0) contrast(1.2) blur(5px);
//   }
// `;

// export const SectionP = styled.section`
//   align-items: flex-start;
//   display: flex;
//   min-height: 100%;
//   justify-content: center;
//   background-color: red;
//   padding: ${root.spacingXXL} ${root.spacingXL};

//   .cards-grid {
//     display: grid;
//     grid-template-columns: repeat(1, 1fr);
//     grid-column-gap: ${root.spacingL};
//     grid-row-gap: ${root.spacingL};
//     max-width: ${root.widthContainer};
//     width: 100%;
//   }

//   @media (min-width: 540px) {
//     .cards-grid {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   @media (min-width: 960px) {
//     .cards-grid {
//       grid-template-columns: repeat(4, 1fr);
//     }
//   }

//   .cards {
//     list-style: none;
//     position: relative;
//     cursor: pointer;
//   }

//   .cards:before {
//     content: "";
//     display: block;
//     padding-bottom: 150%;
//     width: 100%;
//   }

//   .cards__content {
//     left: 0;
//     padding: ${root.spacingL};
//     position: absolute;
//     top: 0;
//   }

//   .cards__category {
//     color: ${root.textLight};
//     font-size: 0.9rem;
//     margin-bottom: ${root.spacingS};
//     text-transform: uppercase;
//   }

//   .cards__heading {
//     color: ${root.textLighter};
//     font-size: 1.9rem;
//     text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
//     line-height: 1.4;
//     word-spacing: 100vw;
//   }

//   .cards__menu {
//     position: absolute;
//     top: 40%;
//     left: 0;
//     right: 0;
//     background-color: rgba(0, 0, 0, 0.644);
//     display: none;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     border-radius: ${root.spacingL};
//   }

//   .cards__menu a {
//     color: white;
//     text-decoration: none;
//     padding: ${root.spacingS} 0;
//     text-align: center;
//     width: 100%;
//     opacity: 0;
//     font-size: 15px;
//     font-weight: 500;
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//     line-height: 2;
//   }

//   .cards__menu a:hover {
//     color: #09897f;
//     background-color: #e0e0e0;
//     border-radius: ${root.spacingL};
//   }

//   .cards:hover .cards__menu {
//     display: flex;
//     animation: fadeIn 0.5s;
//   }

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;
