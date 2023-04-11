
// Typing effect at Home secction
const el = document.getElementById("typing-effect"); // get the element to add the text to
const items = el.getAttribute("data-typed-items").split(","); // get the items to display and split them by comma
const delay = 100; // the delay between each character being added, in milliseconds

let itemIndex = 0;
let charIndex = 0;

function type() {
  const item = items[itemIndex];
  
  if (charIndex < item.length) {
    el.innerHTML += item.charAt(charIndex); // add the next character to the text
    charIndex++;
    setTimeout(type, delay); // recursively call type() after the delay
  } else {
    // reset the character index and move to the next item in the array
    charIndex = 0;
    itemIndex = (itemIndex + 1) % items.length; // wrap around to the beginning if we reach the end of the array
    el.innerHTML = ""; // clear the text
    setTimeout(type, delay * 3); // wait for a longer delay before starting the next item
  }
}

type(); // start the typing effect

// END EFFECT

// About
const button = document.querySelector(".showMore");
const moreText = document.querySelector(".more-about");

button.addEventListener("click", () => {
  moreText.classList.toggle("more-about--visible");
  const buttonText = button.querySelector("em");
  buttonText.textContent = moreText.classList.contains("more-about--visible") ? "less" : "more";
});
// end About

  document.getElementById('resume-btn').addEventListener('click', function() {
    ga('send', 'event', 'Resume', 'view');
  });
  // Click on '+' in portfolio and will open the text(<p>)
//   $(document).ready(function() {
//     $('.portfolio-toggle').on('click', function(event) {
//       event.preventDefault(); // prevent default behavior of link
//       $(this).closest('.portfolio-wrap').find('.toggle').toggleClass('visible');
//     });
//   });