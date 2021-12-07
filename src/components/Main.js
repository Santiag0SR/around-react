import React, { useEffect, useState } from "react";
import editButton from "../images/edit_profile_button.svg";
import profileAvatar from "../images/Jacques_Cousteau.png";
import addButton from "../images/Add_button.svg";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("Santiago Sánchez");
  const [userDescription, setUserDescription] = useState("Web Explorer");
  const [userAvatar, setUserAvatar] = useState(profileAvatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialProfile().then((data) => setUserName(data.name));
  });
  useEffect(() => {
    api.getInitialProfile().then((data) => setUserDescription(data.about));
  });
  useEffect(() => {
    api.getInitialProfile().then((data) => setUserAvatar(data.avatar));
  });

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => console.error(`Problem fetching cards cards: ${err}`));
  }, []);

  return (
    <div>
      <main className="content">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar-container">
              <img
                src={userAvatar}
                className="profile__avatar"
                alt={userName}
              />
              <button
                className="button profile__avatar-button"
                onClick={props.onEditAvatarClick}
                type="button"
                style={{ backgroundImage: `url(${editButton})` }}
              ></button>
            </div>
            <div className="profile__text-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="button profile__edit-button"
                type="button"
                style={{ backgroundImage: `url(${editButton})` }}
                onClick={props.onEditProfileClick}
              ></button>
              <p className="profile__about">{userDescription}</p>
            </div>
          </div>
          <button
            className="button profile__add-button"
            type="button"
            style={{ backgroundImage: `url(${addButton})` }}
            onClick={props.onAddPlaceClick}
          ></button>
        </section>
        {/* <!-- places elements--> */}
        <section className="elements">
          {cards.map((card) => (
            <Card cardData={card} onCardClick={props.onCardClick} />
          ))}
        </section>
      </main>
      <template id="card-template"></template>
    </div>
  );
}

export default Main;
