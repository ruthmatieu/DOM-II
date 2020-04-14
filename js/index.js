//event 1 - mouseover. Turns nav items cyan when mouse hovers over
const mouseItem = document.querySelectorAll('a');

mouseItem.forEach(item => {
  item.addEventListener('mouseover', (e) => {
  e.target.style.color = 'cyan';
  e.target.style.transition = '0.5s'})
});

//event 2 - mouseleave. Turns items red when mouse leaves
mouseItem.forEach(item => {
  item.addEventListener('mouseleave', (e) => {
  e.target.style.color = 'red';
  e.target.style.transition = '0.5s'})
});

//event 3 - dblclick; changes background to yellow and text to black
const button = document.querySelector('.btn');

button.addEventListener("dblclick", (e) => {
  e.target.style.backgroundColor = 'yellow';
  e.target.style.color = 'black';
  e.target.style.fontSize = '3rem';
});

//event 4 - keydown. Turns title invisible momentarily.
const body = document.querySelector('body');
const header = document.querySelector('h1');
body.addEventListener("keydown", () => {
  header.style.opacity = "0";
});

//event 5 - keyup. Turns tile to white w/ black background.
const headerColors = [
  'green',
  'yellow',
  'pink',
  'red',
  'cyan',
  'purple',
  'orange',
  'brown'
];

body.addEventListener("keyup", () => {
  header.style.opacity = "10";
  header.style.color = 'white';
  header.style.backgroundColor = 'black';
});

// event 6 - wheel. Console asks for name.
body.addEventListener('wheel', function once(){
  const name = prompt(`What is your name?`)
  alert(`Hi, ${name}! Keep scrolling for more interactivity!`);
  body.removeEventListener('wheel', once);
});

// event 7 - drag banner img
const bannerImg = document.querySelector('.intro > img' );
bannerImg.addEventListener('drag', (e) => e.target.style.transform = 'rotate(180deg)');

// event 8 -load
window.addEventListener('load', function(event) {
  print();
});

// event 9 - resize
window.addEventListener('resize', () => alert("I've been resized"))

//event 10 - mouseenter. Turns
const navContainer = document.querySelector(".intro");
const header4 = document.querySelector('h4')
navContainer.addEventListener("mouseenter", () => {
  header4.style.color = "green";
});

//prevents from reloading page on click
const navItems = document.querySelector('')
navItems.addEventListener('click', (e) => {e.preventDefault();
console.log("clicked on navlink");}
);
