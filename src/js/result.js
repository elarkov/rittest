function result(){
  let cell = document.querySelectorAll('.table__cell');
  let blockResult = document.querySelector('.result');

  for(let i = 0; i<cell.length; i++){
    cell[i].addEventListener('click', () => {
      blockResult.innerHTML = cell[i].innerHTML;
    });
  }
}


export {
  result
}