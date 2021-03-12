import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from './useAxios';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addResponseData] = useAxios();
const addCard = async () => {
    let response = "https://deckofcardsapi.com/api/deck/new/draw/"
    addResponseData(cards => [...cards, { ...response.data, id: uuid() }]);
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;