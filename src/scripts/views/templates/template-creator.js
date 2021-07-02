import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.restaurant.name}</h2>
  <img class="restaurant-pics" src="${`${CONFIG.BASE_URL}/images/medium/${restaurant.restaurant.pictureId}`}" alt="${restaurant.restaurant.name}'s picture">
  <div class="restaurant-info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.restaurant.rating}</p>
  </div>
  <div class="restaurant-desc">
    <h4>Description</h4>
    <p>${restaurant.restaurant.description} minutes</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => {
  const desc = restaurant.description.substr(0, 100);
  return `
  <a class="anchor-list" href="${`/#/detail/${restaurant.id}`}">
  <div tabindex="0" class="list-restaurant">
    <img src="${`${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}`}" alt="${restaurant.name}'s picture">
    <div class="rating">
      ⭐️ ${restaurant.rating}
    </div>
    <div class="restaurant-detail">
      <h3>${restaurant.name}</h3>
      <h4 class="location">&#9673 ${restaurant.city}</h4>
      <p>${desc}...</p>
    </div>
  </div>
  </a>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
