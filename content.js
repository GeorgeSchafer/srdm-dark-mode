"use strict";

  /* 
    @const Elements
    We are storing the elements that want to be changed into arrays.
  */
const Elements = { 
  h1: Array.from(document.getElementsByTagName("h1")),
  h2: Array.from(document.getElementsByTagName("h2")), 
  h3: Array.from(document.getElementsByTagName("h3")), 
  h4: Array.from(document.getElementsByTagName("h4")), 
  h5: Array.from(document.getElementsByTagName("h5")),
  divs: Array.from(document.getElementsByTagName("div")),
  input: Array.from(document.getElementsByTagName("input"))
};

const Functions = {
  stripInlineStyles: () => {

    console.log(JSON.parse(JSON.stringify(Elements)));

    
    for(const [key,value] of Object.entries(Elements) ){
      console.log(`${key}: ${value}`); // Using this to verify that the script is running
      value.forEach( (index) => {

      /*
        @description Attempt #1
        This is the first thing I tried. This is 
        supposed to find the property and remove it. 
        However, according to the MDN it 
        manipulates the css file, not the inline 
        style.
      */
        // index.style.removeProperty("background-color");
        // index.style.removeProperty("color");
        // index.style.removeProperty("box-shadow");

      /*
        @description attempt #2
        This is the next thing I tried. I found this on
        StackOverflow but it looks like it works the same
        way as attempt #1.
      */
        // index.style.backgroundColor( "" );
        // index.style.color( "" );
        // index.style.boxShadow( "" );

      /*
        @description attempt #3
        Eventually, I got the bright idea of trying 
        to manipulate the string of the inline style.
        I think this could work, but this wouldn't be
        my preferred option as manipulating strings
        in this way doesn't seem like an efficient 
        way to accomplish this. At this point, I had
        to stop looking at the code.
      */
        //  str declaration #1
        // let str = `index.style`

        // str declaration option #2
        // let str = `JSON.stringify(index.style)`;

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

/*
We run the function as soon as the page loads.
*/
Functions.stripInlineStyles();