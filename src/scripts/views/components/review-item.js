import template from './templates/review-item.html';
import './styles/review-item.scss';

class ReviewItem extends HTMLElement {
  #review = null;

  set review(value) {
    this.#review = value;
    this.render();
  }

  render() {
    this.innerHTML = template;
    this.className = 'restaurant-review';

    // get element
    const headerElement = this.querySelector('#customerReviewHeader');
    const contentElement = this.querySelector('#customerReviewContent');

    // set attribute value
    headerElement.innerHTML = `${this.#review.name} @${this.#review.date}`;
    contentElement.innerHTML = this.#review.review;
  }
}

customElements.define('review-item', ReviewItem);
