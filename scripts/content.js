const Elements = { 
  color: "#404040",
  divs: document.getElementsByClassName("css-1dbjc4n") // Retrive an array of div.css-1dbjc4n
};

const Listeners = [ document.onload(stripInlineStyleBgColor()) ];

const Functions = {
  stripInlineStyleBgColor: () => {
    const divs = Elements.divs;
    const color = Elements.color;

    divs.forEach(div => {
      div.removeProperty("background-color"); // Remove inline tag
    });

  }
};