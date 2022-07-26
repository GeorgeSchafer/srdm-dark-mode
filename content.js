"use strict";

/**  @const Elements
 *   We are storing the elements that need to be changed.
 */
const Elements = { 
  divs: Array.from(document.getElementsByTagName("div")),
  h1: Array.from(document.getElementsByTagName("h1")),
  h2: Array.from(document.getElementsByTagName("h2")), 
  h3: Array.from(document.getElementsByTagName("h3")), 
  h4: Array.from(document.getElementsByTagName("h4")), 
  h5: Array.from(document.getElementsByTagName("h5")),
  input: Array.from(document.getElementsByTagName(`input`))
};

const Functions = {
  stripInlineStyles: () => {
    const bundle = { 
      divs: Elements.divs,
      h1: Elements.h1,
      h2: Elements.h2,
      h3: Elements.h3,
      h4: Elements.h4,
      h5: Elements.h5,
      input: Elements.input
    };

    console.log(JSON.parse(JSON.stringify(bundle)));

    for(const [key,value] of Object.entries(bundle) ){
      console.log(`${key}: ${value}`);
      value.forEach( (index) => {
        index.style.removeProperty("color");
        index.style.removeProperty("background-color");
        index.style.removeProperty("box-shadow");
        console.log(`index.style: ${index.style.toString()}`)
        // let str = `${index.style}`;
        // let colorIndex;
        // let colorEnd;
        // let bgColorIndex;
        // let bgColorEnd;
        // let shadowIndex;
        // let shadowEnd;

        // bgColorIndex = str.indexOf("background-color:");
        
        // if( bgColorIndex !== -1 ){
        //   bgColorEnd = str.indexOf(";", bgColorIndex) ;
        //   str = `${str.substring(0, bgColorIndex - 1)}${str.substring(bgColorEnd + 1, str.length -  1 )}`;
        // }

        // colorIndex = str.indexOf("color:");

        // if(colorIndex !== -1 ){
        //   colorEnd = str.indexOf(";", colorIndex) ;
        //   str = `${str.substring(0, colorIndex - 1 )}${str.substring(colorEnd + 1, str.length - 1 )}`;
        // }

        // shadowIndex = str.indexOf("box-shadown:");
        
        // if(shadowIndex !== -1 ){
        //   shadowEnd = str.indexOf(";", shadowIndex) ;
        //   str = `${str.substring(0, shadowIndex - 1)}${str.substring(shadowEnd + 1, str.length - 1 )}`;
        // }
        
        // index.style = `${str}`;
      });
    }
  }
};

Functions.stripInlineStyles();
