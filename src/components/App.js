import React, { useState, useEffect } from "react";
import closeButton from "../images/Close_button.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.error(`Problem fetching cards cards: ${err}`));
  }, []);

  useEffect(() => {
    api
      .getInitialProfile()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.error(`Problem fetching profile data: ${err}`));
  }, []);

  function handleAddPlaceSubmit(card) {
    api
      .fetchCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.error(`Problem adding new card: ${err}`));
    closeAllPopups();
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api
      .likeCard(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(`Problem liking card: ${err}`));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((state) => state !== card));
      })
      .catch((err) => console.error(`Problem deleting card: ${err}`));
  }

  function handleUpdateUser(userData) {
    api
      .fetchProfileInfo(userData)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.error(`Problem updating user: ${err}`));
    closeAllPopups();
  }

  function handleUpdateAvatar(userData) {
    api
      .changeProfileAvatar(userData)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.error(`Problem updating avatar: ${err}`));
    closeAllPopups();
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <PopupWithForm
          moldalType={"delete"}
          modalTitle={"Are you sure?"}
          modalButtonText={"Yes"}
          closeButtons={closeButton}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          closeButtons={closeButton}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          closeButtons={closeButton}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          closeButtons={closeButton}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <ImagePopup
          closeButtons={closeButton}
          selectedCard={selectedCard}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
