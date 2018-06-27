export let result;

function animateTD(){

  let tableCell = document.querySelectorAll('.table__cell');
  let text = document.querySelector('.result__text');
      result = document.querySelector('.result');

  for(let i = 0; i < tableCell.length; i++){
    tableCell[i].addEventListener('click', function() {
      this.style.fontSize = '20px';
      this.style.color = '#fff';
      this.style.backgroundColor = '#ff5722';
      text.style.display = 'none';
      result.innerHTML += `<p class="cell-text"> ${tableCell[i].textContent}`;
    });
  }

}


export {
  animateTD
}