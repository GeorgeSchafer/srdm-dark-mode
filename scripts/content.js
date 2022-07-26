"use strict";

/**
 * @const Elements
 * We are storing the elements that need to be changed.
 */
const Elements = { 
  divs: document.getElementsByTagName("div"),
  h1: document.getElementsByTagName("h1"),
  h2: document.getElementsByTagName("h2"), 
  h3: document.getElementsByTagName("h3"), 
  h4: document.getElementsByTagName("h4"), 
  h5: document.getElementsByTagName("h5"),
  input: document.getElementsByTagName(`input[type="text"]`)
};

/**
  * @const Listeners
  * We are storing the listeners in arrays because we 
  * need them to be there but we don't need to retrieve 
  * them ever.
*/
const Listeners = [ 
  document.onload(stripInlineStyleColors()) 
];

const Functions = {
  stripInlineStyleColors: () => {
    const bundle = { 
      divs: Elements.divs,
      h1: Elements.h1,
      h2: Elements.h2,
      h3: Elements.h3,
      h4: Elements.h4,
      h5: Elements.h5,
      input: Elements.input
    }

    console.log(JSON.parse(JSON.stringify(bundle)));

    for(const [key,value] of Object.entries(bundle) ){
      console.log(`${key}`);
      value.forEach( (index) => {
        index.style.removeProperty("background-color");
        index.style.backgroundColor( "" );
        index.style.removeProperty("color");
        index.style.color( "" );
        index.style.removeProperty("box-shadow");
        index.style.boxShadow( "" );
      })
    }
  }
};

Functions.stripInlineStyleColors();
