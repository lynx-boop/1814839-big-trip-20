import { CITIES, TYPES } from '../mock/consts-mock.js';
import { getRandomArrayElement } from '../utils.js';
import AbstractView from '../framework/view/abstract-view.js';

const getOffers = (type, offersData) => {
  const offersByType = offersData.find((offer) => offer.type === type);

  return offersByType.offers.map(
    (offer) => `<input class="event__offer-checkbox  visually-hidden" id="offer-${offer.id}" type="checkbox" name="offer-${offer.id}">
        <label class="event__offer-label" for="offer-${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>`
  ).join('');
};

const getRandomType = () => getRandomArrayElement(TYPES);

const getTemplate = (offersData) => {
  const name = getRandomArrayElement(CITIES);
  const type = getRandomType();
  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                <div class="event__type-item">
                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                    <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                    <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                    <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                    <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                    <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                    <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                    <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                    <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                    <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                </div>
              </fieldset>
            </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${type} ${name}" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
            </div>

            <div class="event__field-group  event__field-group--price">
              <label class="event__label" for="event-price-1">
                <span class="visually-hidden">Price</span>
                &euro;
              </label>
              <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </header>
          <section class="event__details">
            <section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>

              <div class="event__available-offers">
              ${getOffers(type, offersData)}
              </div>
            </section>

            <section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>
            </section>
          </section>
        </form>
      </li>`;
};

export default class EditPointView extends AbstractView {
  #offersData = null;
  #onSubmitClick = null;
  #onResetClick = null;
  #onRollUpClick = null;

  constructor({ offersData, onSubmitClick, onResetClick, onRollUpClick }) {
    super();
    this.#offersData = offersData;
    this.#onSubmitClick = onSubmitClick;
    this.#onResetClick = onResetClick;
    this.#onRollUpClick = onRollUpClick;

    this.element
      .querySelector('.event__save-btn')
      .addEventListener('click', this.#submitClickHandler);
    this.element
      .querySelector('.event__reset-btn')
      .addEventListener('click', this.#resetClickHandler);
    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollUpClickHandler);
  }

  get template() {
    return getTemplate(this.#offersData);
  }

  #submitClickHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitClick();
  };

  #resetClickHandler = (evt) => {
    evt.preventDefault();
    this.#onResetClick();
  };

  #rollUpClickHandler = (evt) => {
    evt.preventDefault();
    this.#onRollUpClick();
  };
}

// export default class EditPointView {
//   constructor(offersData) {
//     this.offersData = offersData;
//   }

//   getElement() {
//     if (!this.element) {
//       this.element = createElement(getTemplate(this.offersData));
//     }

//     return this.element;
//   }

//   removeElement() {
//     this.element = null;
//   }
// }
