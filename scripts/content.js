const Elements = { 
  divs: document.getElementsByClassName("css-1dbjc4n"), // Retrive an array of div.css-1dbjc4n
  h1: document.getElementsByTagName('h1'),
  h2: document.getElementsByTagName('h2'), 
  h3: document.getElementsByTagName('h3'), 
  h4: document.getElementsByTagName('h4'), 
  h5: document.getElementsByTagName('h5'),
};

const Listeners = [ document.onload(stripInlineStyleColors()) ];

const Functions = {
  stripInlineStyleColors: () => {
    const divs = Elements.divs;
    const h1 = Elements.h1;
    const h2 = Elements.h2;
    const h3 = Elements.h3;
    const h4 = Elements.h4;
    const h5 = Elements.h5;

    divs.forEach(div => {
      div.removeProperty("background-color"); // Remove inline tag
      div.removeProperty("color");
    });
    
    h1.forEach(h1 => {
      h1.removeProperty("background-color");
      h1.removeProperty("color");
    });
    
    h2.forEach(h2 => {
      h2.removeProperty("background-color");
      h2.removeProperty("color");
    });
    
    h3.forEach(h3 => {
      h3.removeProperty("background-color");
      h3.removeProperty("color");
    });
    
    h4.forEach(h4 => {
      h4.removeProperty("background-color");
      h4.removeProperty("color");
    });
    
    h5.forEach(h5 => {
      h5.removeProperty("background-color");
      h5.removeProperty("color");
    });

  }
};