/*=== styles ===*/
import 'normalize.css';
import './scss/layout/base.scss';

/*=== include handlebars template ===*/
import render from './templates/table.hbs';

/*=== modules ===*/
import {data} from './js/data';
import {animateTD} from "./js/animateTD";
import {result} from "./js/result";

/*=== display of table ===*/
let container = document.querySelector('.table');
container.innerHTML = render({users: data});

animateTD();
result();


