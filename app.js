let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('a');
let navLinks2 = document.querySelectorAll('button');

window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add('link-grow');
  });
  link.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('link-grow');
  });
});

navLinks2.forEach(link => {
  link.addEventListener('mouseover',() => {
    mouseCursor.classList.add('link-grow');
    // link.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('link-grow');
  });
});
