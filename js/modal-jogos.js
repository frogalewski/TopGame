function iniciaModal(modalID) {  
    const modal = document.getElementById(modalID);
    if(modal) {
      modal.classList.add('mostrar');
      modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar') {
          modal.classList.remove('mostrar');
          localStorage.fechaModal = modalID;
        }
      });
    }  
}

const logo = document.querySelector('.button');
logo.addEventListener('click', () => iniciaModal('modal-promocao'));

const loga = document.querySelector('.button1');
loga.addEventListener('click', () => iniciaModal('modal-promo--two'));

const logas = document.querySelector('.button2');
logas.addEventListener('click', () => iniciaModal('modal-promo--tree'));

const logos = document.querySelector('.button3');
logos.addEventListener('click', () => iniciaModal('modal-promo--four'));

const loge = document.querySelector('.button4');
loge.addEventListener('click', () => iniciaModal('modal-promo--five'));

const logi = document.querySelector('.button5');
logi.addEventListener('click', () => iniciaModal('modal-promo--six'));










