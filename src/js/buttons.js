import {result} from './animateTD';

function buttons(){

	let table = document.querySelector('.table'),
		tableTwo = document.querySelector('.table-two'),
		btnOne = document.querySelector('.btn-one'),
		btnTwo = document.querySelector('.btn-two');

	btnOne.addEventListener('click', () => {
		table.style.display = 'none';
		tableTwo.style.display = 'flex';
		result.style.display = 'none';
	});

	btnTwo.addEventListener('click', () => {
		table.style.display = 'table';
		tableTwo.style.display = 'none';
		result.style.display = 'flex';
	});

}


export {
	buttons
};