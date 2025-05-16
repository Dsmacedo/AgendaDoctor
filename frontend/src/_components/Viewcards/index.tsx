"use client";

import { useEffect, useState } from "react";
import { SectionP, CardBackground } from "./style";
import cardsData from "@/data/cardsData";

const ADMIN_ROLE = "admin";
const USER_ROLE = "usuario";
const USER_ALLOWED_CARDS = ["Painel Usuário", "Relatório"];

const Section = () => {
  const [filteredCards, setFilteredCards] = useState<typeof cardsData>([]);

  useEffect(() => {
    const role = sessionStorage.getItem("userRole");

    if (!role) {
      window.location.href = "/login";
      return;
    }

    if (role === ADMIN_ROLE) {
      setFilteredCards(cardsData);
    } else if (role === USER_ROLE) {
      const cardsFiltrados = cardsData.filter((card) =>
        USER_ALLOWED_CARDS.includes(card.title)
      );
      setFilteredCards(cardsFiltrados);
    }
  }, []);

  return (
    <SectionP>
      <div className="cards-grid">
        {filteredCards.map((card, index) => (
          <div className="cards" key={index}>
            <CardBackground $bgImage={card.image} />
            <div className="cards__content">
              <p className="cards__category">{card.category}</p>
              <h3 className="cards__heading">{card.title}</h3>
            </div>
            <div className="cards__menu">
              {card.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionP>
  );
};

export default Section;
