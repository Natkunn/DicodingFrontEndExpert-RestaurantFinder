import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// import { restaurants } from '../DATA.json';

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('.menu-page'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// let restaurantHTML = '';
// restaurants.forEach((restaurant) => {
//   const desc = restaurant.description.substr(0, 100);
//   restaurantHTML += `
//     <div tabindex="0" class="restaurant">
//       <img src="${restaurant.pictureId}" alt="${restaurant.name}'s picture">
//       <div class="rating">
//         &#9733 ${restaurant.rating}
//       </div>
//       <div class="restaurant-detail">
//         <h3>${restaurant.name}</h3>
//         <h4 class="location">&#9673 ${restaurant.city}</h4>
//         <p>${desc}...</p>
//       </div>
//     </div>
//   `;
//   document.getElementById('menu-list').innerHTML = restaurantHTML;
// });
