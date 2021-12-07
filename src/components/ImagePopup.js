function ImagePopup(props) {
  return (
    <div
      className={`modal modal_type_preview ${
        props.selectedCard ? "modal_open" : ""
      }`}
    >
      <div className="modal__box modal__box_type_preview">
        <button
          className="modal__close-button modal__close-button_type_preview button"
          type="button"
          style={{ backgroundImage: `url(${props.closeButtons})` }}
          onClick={props.onClose}
        ></button>
        <figure className="modal__preview-figure">
          <img
            className="modal__preview-image"
            src={`${props.selectedCard && props.selectedCard.cardData.link}`}
            alt={`${props.selectedCard && props.selectedCard.cardData.name}`}
          />
          <figcaption className="modal__preview-caption">
            {`${props.selectedCard && props.selectedCard.cardData.name}`}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
