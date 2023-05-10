"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//         const[data] = JSON.parse(this.responseText); //destructing assignment
//         console.log(data);
//         const languagekey = Object.keys(data.languages)[0];
//         const currencykey = Object.keys(data.currencies)[0];
//       const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[languagekey]}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[currencykey].name}</p>
//       </div>
//     </article>
//     `;
//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//     });
//   };
//   getCountryData('portugal');
//   getCountryData('usa');
// getCountryData('germany');

//// 콜백지옥
//   const renderCountry = function (data, className = '') {
//     const languagekey = Object.keys(data.languages)[0];
//     const currencykey = Object.keys(data.currencies)[0];
//     const html = `
//     <article class="country ${className}">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[languagekey]}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[currencykey].name}</p>
//         </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//     // AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
//       // Render country 1
//       renderCountry(data);
//       // Get neighbour country (2)
//       const [neighbour] = data.borders;
//       if (!neighbour) return;
//       // AJAX call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();
//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);
//         console.log(data2);
//         renderCountry(data2, 'neighbour');
//       });
//     });
//   };

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

////오늘 완성본
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//     // Country 1
//     getJSON(
//       `https://restcountries.com/v3.1/name/${country}`,
//       'Country not found'
//     )
//       .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];
//         if (!neighbour) throw new Error('No neighbour found!');
//         // Country 2
//         return getJSON(
//           `https://restcountries.com/v3.1/alpha/${neighbour}`,
//           'Country not found'
//         );
//       })
//       .then(data => renderCountry(data[0], 'neighbour'))
//       .catch(err => {
//         console.error(`${err} 💥💥💥`);
//         renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//       })
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       });
//   };

// getCountryData('germany');

//WhereAmI using lat, lng
// whereAmI("portugal");
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
//   )
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };

//Getting My position
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

//Build WhereAmI using my position
// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
//       );
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} 💥`));
// };

//Refactor using async/await
// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
//     );
//     const dataGeo = await resGeo.json();
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error("Problem getting location data");
//     const data = await res.json();
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(` ${err.message}`);
//     throw err;
//   }
// };
// btn.addEventListener("click", whereAmI);

//Other Promise features
// const get3Countries = async function(c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`)
//     ,
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`)
//     ,
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//     ]);
//     console.log(data.map(d => d[0].capital[0]));
//   } catch(err){
//     console.error(err);
//   }
// }
// get3Countries('portugal', 'canada', 'south korea');

// (async function() {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//     getJSON(`https://restcountries.com/v3.1/name/south korea`)
//   ]);
//   console.log(res[0]);
// }());

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`request took too long!`));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/south korea`),
//   timeout(0.2),
// ])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.log(err));
