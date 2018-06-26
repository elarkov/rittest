function animateTD(){

  let tableContainer = document.querySelector('.table');

  tableContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){

      event.target.classList.toggle('opened');
    }
  });
}


export {
  animateTD
}