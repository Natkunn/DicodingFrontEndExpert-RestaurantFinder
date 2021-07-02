import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <h2 tabindex="0" class="menu-title">Recommendations For You</h2>
    <div id="restaurants" class="menu-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
