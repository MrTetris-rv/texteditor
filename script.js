window.onload = function () {


  const hideblock = document.getElementsByClassName('hideblock')[0];
  const message = document.getElementsByClassName('comments3')[0];

  const btnblock = document.getElementById('btnblock');
  btnblock.addEventListener('click', (event) => {
    console.log(event);
    event.target.classList.toggle('hideblockjs');
    console.log(message);
    message.classList.toggle('comets3Block')

  });
};