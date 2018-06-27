/*=== styles ===*/
import 'normalize.css';
import './scss/layout/base.scss';
import './scss/layout/table-two.scss';

/*=== include handlebars template ===*/
import render from './templates/table.hbs';
import renderTwo from './templates/table-two.hbs';

/*=== modules ===*/
import {data} from './js/data';
import {animateTD} from "./js/animateTD";
import {buttons} from "./js/buttons";

/*=== display of table one ===*/
let container = document.querySelector('.table');
container.innerHTML = render({users: data});

/*=== display of table two ===*/
let tableTwo = document.querySelector('.table-two');
tableTwo.innerHTML = renderTwo({users: data});


animateTD();
buttons();


