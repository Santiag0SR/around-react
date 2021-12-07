import trash from "../images/Trash.svg";
import likeButton from "../images/like_button.svg";
import likeButtonActive from "../images/like_button_active.svg";

function Card({ cardData, onCardClick }) {
  function handleClick() {
    onCardClick({ cardData });
  }

  return (
    <div>
      <article className="card">
        <button
          className="button card__delete-button"
          type="button"
          style={{ backgroundImage: `url(${trash})` }}
        ></button>
        <img
          className="card__img"
          src={cardData.link}
          alt={cardData.name}
          onClick={handleClick}
        />
        <div className="card__text-container">
          <h2 className="card__text">{cardData.name}</h2>
          <div class="card__likes-container">
            <button
              className="button card__like-button"
              type="button"
              style={{ backgroundImage: `url(${likeButton})` }}
            ></button>
            <p class="card__text card__text_likes-number">
              {cardData.likes.length}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
