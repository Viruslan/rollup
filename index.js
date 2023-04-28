import "./index.css";
import img from './assets/JS.png';

console.log('Hello World!');

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = img;

const jsHeaderHTML = document.createElement('h1');
jsHeaderHTML.textContent='I love JavaScript';

document.body.append(jsHeaderHTML);
document.body.append(jsImageHTML);
