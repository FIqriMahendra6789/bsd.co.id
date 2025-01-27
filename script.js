document.addEventListener("DOMContentLoaded", function () {
  const typedTextElement = document.getElementById("typed-text");
  const text1 = "Welcome to ";
  const text2 = "BSD Development|";
  let i = 0;
  let textIndex = 0;

  function typeText() {
    let currentText = textIndex === 0 ? text1 : text2;

    if (i < currentText.length) {
      let currentChar = currentText.charAt(i);

      // For "Welcome to" (first part), set font-size to 30px
      if (textIndex === 0) {
        typedTextElement.innerHTML += `<span style="color: #00796b; font-size: 30px;">${currentChar}</span>`;
      }
      // For "LenyShop" (second part), handle colors and font-size of 60px
      else {
        if (
          currentChar === "B" || 
          currentChar === "S" || 
          currentChar === "D" || 
          currentChar === "E"
        ) {
          typedTextElement.innerHTML += `<span style="color:#00796b; font-size: 60px;">${currentChar}</span>`;
        } else if (
          currentChar === "V" || 
          currentChar === "E" || 
          currentChar === "R" || 
          currentChar === "Y"
        ) {
          typedTextElement.innerHTML += `<span style="color:#00796b; font-size: 60px;">${currentChar}</span>`;
        } else if (
          currentChar === "O" || 
          currentChar === "N" || 
          currentChar === "E"
        ) {
          typedTextElement.innerHTML += `<span style="color:#00796b; font-size: 60px;">${currentChar}</span>`;
        } else {
          typedTextElement.innerHTML += currentChar;
        }
      }
      

      i++;
      setTimeout(typeText, 100); // Typing speed (100ms per character)
    } else if (textIndex === 0) {
      // After finishing "Welcome to", insert a line break and start typing "LenyShop"
      typedTextElement.innerHTML += "<br>"; // Insert a line break to move "LenyShop" below
      textIndex = 1;
      i = 0;
      setTimeout(typeText, 300); // Delay before starting "LenyShop"
    }
  }

  typeText(); // Start typing effect
});

document.addEventListener("DOMContentLoaded", () => {
const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam eius ducimus suscipit omnis aliquam perferendis quia, voluptatum voluptates consectetur tempore fugit sint? Inventore, totam delectus unde corrupti ullam corporis. 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam eius ducimus suscipit omnis aliquam perferendis quia, voluptatum voluptates consectetur tempore fugit sint? Inventore, totam delectus unde corrupti ullam corporis.

`;

  const aboutElement = document.querySelector("#about-text");
  let charIndex = 0;

  function typeText() {
    if (charIndex < text.length) {
      aboutElement.innerHTML += text[charIndex];
      charIndex++;
      setTimeout(typeText, 50);
    }
  }

  typeText();
});