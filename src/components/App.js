import React, { useState } from "react";
import closeButton from "../images/Close_button.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        moldalType={"delete"}
        modalTitle={"Are you sure?"}
        modalButtonText={"Yes"}
        closeButtons={closeButton}
      />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        moldalType={"avatar"}
        modalTitle={"Change profile picture"}
        modalButtonText={"Change"}
        closeButtons={closeButton}
        onClose={closeAllPopups}
      >
        <input
          id="link-input-avatar"
          className="modal__form-item modal__form-item_type_image-link"
          type="url"
          name="avatar"
          placeholder="Image link"
          required
        />
        <span id="link-input-avatar-error" className="modal__error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        moldalType={"edit"}
        modalTitle={"Edit Profile"}
        modalButtonText={"Save"}
        closeButtons={closeButton}
        onClose={closeAllPopups}
      >
        <input
          id="name-input"
          className="modal__form-item modal__form-item_type_name"
          type="text"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="name-input-error" className="modal__error"></span>
        <input
          id="about-input"
          className="modal__form-item modal__form-item_type_about"
          type="text"
          name="about"
          placeholder="About Me"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="about-input-error" className="modal__error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        moldalType={"add"}
        modalTitle={"New Place"}
        modalButtonText={"Create"}
        closeButtons={closeButton}
        onClose={closeAllPopups}
      >
        <input
          id="title-input"
          className="modal__form-item modal__form-item_type_title"
          type="text"
          name="name"
          placeholder="Title"
          required
          minLength="1"
          maxLength="40"
        />
        <span id="title-input-error" className="modal__error"></span>
        <input
          id="link-input"
          className="modal__form-item modal__form-item_type_image-link"
          type="url"
          name="link"
          placeholder="Image link"
          required
        />
        <span id="link-input-error" className="modal__error"></span>
      </PopupWithForm>
      <ImagePopup
        closeButtons={closeButton}
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
