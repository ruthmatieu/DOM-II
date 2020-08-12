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

//event 3 - dblclick. Changes background to yellow and text to black on doubleclick
const button = document.querySelector('.btn');


button.addEventListener("dblclick", (e) => {
  e.target.style.backgroundColor = 'yellow';
  e.target.style.color = 'black';
  e.target.style.fontSize = '3rem';
  button.textContent = 'Clicked!';
  console.log('element was clicked')
});

//event 4 - keydown. Turns title invisible momentarily.
const body = document.querySelector('body');
const header = document.querySelector('h1');
body.addEventListener("keydown", () => {
  header.style.opacity = "0";
});

//event 5 - keyup. Turns tile to white w/ black background.
// const headerColors = [
//   'green',
//   'yellow',
//   'pink',
//   'red',
//   'cyan',
//   'purple',
//   'orange',
//   'brown'
// ];

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

// event 7 - drag. Rotates banner img by 180 degrees
const destinationImg = document.querySelector('.content-destination img' );
destinationImg.addEventListener('drag', (e) => {
  e.target.style.transform = 'rotate(180deg)'
});

//event 8 - dragend. Img remains rotated and decreases in size by 75%.
destinationImg.addEventListener('dragend', (e) => {
  e.target.style.width = '25%'
  e.target.style.transform = 'rotate(180deg), '
});

// event 9 - load. Prints document on when page is loaded.
window.addEventListener('load', () => {
  print();
});

// event 10 - resize. Alert pops up when window has been resized.
window.addEventListener('resize', () => {
  alert("I've been resized");
});

//stop propagation - prevents the background color of the  first paragraph from
//turning slategray like all the other elements that are clicked
body.addEventListener('click', (e)=>{
  e.target.style.backgroundColor = 'slategray';
  console.log('clicked')
})

introPara = document.querySelector('.intro p')
introPara.addEventListener('click', (e)=>{
  e.target.style.backgroundColor = 'green';
  console.log('clicked')
  e.stopPropagation();
})

//prevents navigation items from refreshing page and 'About Us' from 
//directing to Google on click
const navItems = document.querySelector('.nav')
navItems.addEventListener('click', (e) => {e.preventDefault();
console.log("You've clicked on one of the menu links.");}
);
