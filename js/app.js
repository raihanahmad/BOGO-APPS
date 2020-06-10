// Smooth Scrolling
$('#navbar a, #footer-link a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 0
      },
      800
    );
  }
});


// Hamburger Click Event
// Targeting UI
const hamburger = document.querySelector('#hamburger');
const navber = document.querySelector('#navlink');

hamburger.addEventListener('click', function () {
  hamburger.style.boxShadow = '0 0 2px 4px #7bbbbe';

  if (navber.style.transform === 'scale(1)') {
    navber.style.transform = 'scale(0)';
    document.querySelector('#hamburger .b').style.transform = 'unset';
    document.querySelector('#hamburger .a').style.transform = 'unset';
    document.querySelector('#hamburger .a').style.top = '20px';
    document.querySelector('#hamburger .c').style.transform = 'unset';
    document.querySelector('#hamburger .c').style.top = '44px';
  } else {
    navber.style.transform = 'scale(1)';
    hamburger.style.boxShadow = 'unset';
    document.querySelector('#hamburger .b').style.transform = 'rotate(225deg)';
    document.querySelector('#hamburger .a').style.transform = 'rotate(130deg)';
    document.querySelector('#hamburger .a').style.top = '32px';
    document.querySelector('#hamburger .c').style.transform = 'rotate(130deg)';
    document.querySelector('#hamburger .c').style.top = '32px';

    document.querySelector('#navlink').addEventListener('click', function (e) {

      if (e.target.classList.contains('link')) {
        navber.style.transform = 'scale(0)';
        document.querySelector('#hamburger .b').style.transform = 'unset';
        document.querySelector('#hamburger .a').style.transform = 'unset';
        document.querySelector('#hamburger .a').style.top = '20px';
        document.querySelector('#hamburger .c').style.transform = 'unset';
        document.querySelector('#hamburger .c').style.top = '44px';
      }

    })
  }
});